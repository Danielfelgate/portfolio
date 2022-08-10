import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import Link from '@/components/Link';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { IoLogoGithub as GithubIcon } from 'react-icons/io';
import { SiGmail as MailIcon, SiItchdotio as ItchioIcon } from 'react-icons/si';
import { Colors } from 'config/colors';
import { EmailIcon } from 'react-share';
import { IoDocumentOutline } from 'react-icons/io5';

function Links(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Links - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
        <Header title='Links' />
        <ul className='container py-12 space-y-8 text-xl'>
          <li>
            <Link
              className='flex ml-2 mr-2'
              href='https://github.com/Danielfelgate'
            >
              <GithubIcon className='icon mt-0.5 mr-2 inline text-2xl' />
              Github
            </Link>
          </li>
          <li>
            <Link
              className='flex ml-2 mr-2'
              href='https://www.linkedin.com/in/daniel-felgate/'
            >
              <LinkedinIcon
                className='icon mr-2 mt-0.5 inline text-2xl'
                style={{ color: Colors.linkedin }}
              />
              LinkedIn
            </Link>
          </li>
          <li>
            <a className='flex ml-2 mr-2' href='mailto:danielfelgate@gmail.com'>
              <MailIcon
                className='icon mr-2 mt-0.5 inline text-2xl'
                style={{ color: Colors.email }}
              />
              Email
            </a>
          </li>
          <li>
            <Link
              className='flex ml-2 mr-2'
              href='https://cyborgmantis.itch.io/'
            >
              <ItchioIcon className='icon mr-2 mt-0.5 inline text-2xl' />
              Itch.io
            </Link>
          </li>
          <li>
            <Link
              className='flex ml-2 mr-2'
              href='https://cyborgmantis.itch.io/'
            >
              <IoDocumentOutline className='icon mr-2 mt-0.5 inline text-2xl' />
              CV
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Links;
