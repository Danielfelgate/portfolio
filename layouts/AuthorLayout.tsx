import { Header } from '@/components/Form';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { WorkStack } from 'config/stack';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, resume, email } = frontMatter;
  const [resumeColor] = useRandomColorPair();

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className='divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
        <Header title='About' />
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-start pt-8 space-x-2'>
            <Image
              src={avatar}
              alt='avatar'
              width='192px'
              height='192px'
              className='w-48 h-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
              {name}
            </h3>
            <div className='text-gray-500 font-small dark:text-gray-400'>
              {occupation}
            </div>
            <div className='text-gray-500 dark:text-gray-400'>{email}</div>
          </div>

          <div className='pt-8 pb-8 prose max-w-none dark:prose-dark xl:col-span-2'>
            {children}
            <p className='mt-8'>
              <a
                className='!font-bold !text-black !no-underline dark:!text-white'
                href={resume}
                target='_blank'
                rel='noreferrer'
              >
                View my CV
              </a>
              <h2 className='mt-8 mb-4 text-2xl font-semibold dark:text-white'>
                Skills
              </h2>
              <StackList stack={WorkStack} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
