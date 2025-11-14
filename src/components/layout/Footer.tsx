import { siteConfig } from '@/config/site.config'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-6 mt-10 flex justify-center bg-background text-foreground">
      <div className="container flex flex-col md:flex-row gap-6 justify-between items-center">
        <p className="w-9/10 md:w-1/3 justify-center md:justify-start flex gap-2">
          Réalisé par 
          <a
            href="https://sani-web.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline focus:outline-2"
          >
            Sani-Web.com
          </a>
        </p>
        <p className="text-sm w-9/10 md:w-1/3">
          {siteConfig.footerText}
        </p>
        <p className="w-9/10 md:w-1/3 text-center md:text-right text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.<br />
          <Link href="/mentions-legales" className="hover:underline">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  )
}
