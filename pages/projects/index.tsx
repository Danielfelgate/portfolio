import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
        <Header title='Projects' />
        <div className='container py-12'>
          <div className='flex flex-wrap -m-4'>
            {config.projects.map(
              ({ slug, title, shortDescription, banner }) => (
                <Card
                  key={slug}
                  title={title}
                  description={shortDescription}
                  banner={banner}
                  href={`/projects/${slug}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
