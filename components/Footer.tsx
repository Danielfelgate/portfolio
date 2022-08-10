import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div className='flex flex-col items-center py-8 mt-4 font-light dark:text-white lg:py-8'>
      <SocialIcons />
      <span className='mt-4 text-xs font-light lg:mt-8'>
        &copy; {year} Daniel Felgate
      </span>
    </div>
  );
}

export default memo(Footer);
