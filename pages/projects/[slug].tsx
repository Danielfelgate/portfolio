import Conditional from '@/components/Conditional';
import { H1, H2, H3 } from '@/components/Form';
import DeploymentList from '@/components/list/DeploymentList';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import config from 'config';
import type { Project, SubProject } from 'config/projects';
import { defaultDimensions } from 'config/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import React, { useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const { projects } = config;

export async function getStaticPaths() {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  project: Project;
}> = async ({ params }) => {
  const project = projects.find(project => project.slug === params.slug);

  return {
    props: {
      project,
    },
  };
};

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    description,
    shortDescription,
    banner,
    dimensions,
    stack,
    deployment,
    screenshots,
    subProjects,
    website,
    repository,
  } = project;

  const [height, width] = dimensions ?? defaultDimensions;

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      };

      return (
        <div
          className='flex-shrink-0 mr-2 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      );
    },
    [height, width],
  );

  const renderSubProjectList = useCallback(
    ({ title, deployment, description }: SubProject) => (
      <>
        <H3>{title}</H3>
        <Conditional condition={!!deployment}>
          <DeploymentList deployment={deployment} />
        </Conditional>
        <p className='mt-2 mb-4 font-light'>{description}</p>
      </>
    ),
    [],
  );

  const hasDeployments = !!deployment;
  const hasScreenshots = !!screenshots.length;
  const hasSubProjects = !!subProjects.length;

  return (
    <>
      <PageSEO
        title={title}
        description={shortDescription || description}
        imageUrl={banner}
      />
      <H1 className='mb-4 text-3xl font-bold lg:text-5x dark:text-white'>
        {title}
      </H1>
      <p className='mb-4 font-light'>{description}</p>

      <H2>Technology</H2>
      <StackList stack={stack} />

      <Conditional condition={!!website || !!repository}>
        <H2>Links</H2>
        <Conditional condition={!!website}>
          <p>
            <Link className='font-extralight' href={website}>
              Website: {website}
            </Link>
          </p>
        </Conditional>
        <Conditional condition={!!repository}>
          <p>
            <Link className='font-extralight' href={repository}>
              Repository: {repository}
            </Link>
          </p>
        </Conditional>
      </Conditional>

      <Conditional condition={hasScreenshots}>
        <H2 className='my-4'>Screenshots</H2>
        <ScrollContainer
          className='flex mt-4 mb-1 overflow-auto list'
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>

      <Conditional condition={hasSubProjects}>
        <H2 className='mt-4'>More Products</H2>
        <p className='mt-1 mb-4 font-light'>Some additional products</p>
        {React.Children.toArray(subProjects.map(renderSubProjectList))}
      </Conditional>
    </>
  );
}
