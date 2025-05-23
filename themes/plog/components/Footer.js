import Vercel from '@/components/Vercel'
import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()

  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer className={'z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all' } >
     <div className="my-4 text-sm leading-6">
       <div className="flex align-baseline justify-start flex-wrap space-x-6">
       </div>
     </div>
   </footer>
}
