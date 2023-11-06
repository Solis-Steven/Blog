import Link from './Link'
import siteMetadata from '../data/siteMetadata'
import SocialIcon from '../components/social-icons'

export default function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center my-8'>
        <div className="flex flex-col sm:flex-row items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <h3 className='md:border-r-2 md:px-6 font-bold dark:text-white
          text-xl'>
            {siteMetadata.author} <span className="font-normal">©</span> {""}
            <span className='text-cyan-500'>{`${new Date().getFullYear()}`}</span>
          </h3>
          <Link href="/">• {siteMetadata.title}</Link>
        </div>
        <div className="flex items-center flex-col space-x-4 mt-4 md:mt-0">
          <div className="flex gap-2">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="web" href={siteMetadata.web} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </div>
          <p className='text-gray-400 text-sm text-center'>No olvides estar atento para m&aacute;s</p>
        </div>
    </footer>
  )
}
