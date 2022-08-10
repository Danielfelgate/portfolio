import Link from '@/components/Link';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { memo } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const { frontMatter } = props;
  const [aboutColor, contactColor] = useRandomColorPair();

  return (
    <div className='flex flex-col justify-center flex-1 px-6 py-10 fade-in banner dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
        Hi, I'm {frontMatter.shortname}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl'>
        {frontMatter.occupation}
      </p>
      <p className='font-light lg:text-xl'>
        Read more
        <Link className='ml-2 mr-2 font-bold' href='/about'>
          about me
        </Link>
        or view
        <Link className='ml-2 font-bold' href='/projects'>
          my projects
        </Link>
      </p>
    </div>
  );
}

export default memo(Banner);
