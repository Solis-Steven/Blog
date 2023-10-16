import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

type ReadingStats = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, date, title, tags }= content
  const { readingTime }: { readingTime: ReadingStats } = content;

  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1">
              <div className="text-center">
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <dl className="space-y-10">
                  <div className="flex flex-col md:flex-row gap-2">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {`• ${new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}`}
                      </time>
                    </dd>
                    <dt className="sr-only">Reading time</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {`• ${Math.ceil(readingTime.minutes)} minutos de lectura`}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/${basePath}`}
                  className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
                  aria-label="Back to the blog"
                >
                  &larr; Volver al blog
                </Link>
              </div>
            </div>
          </header>
          <div className="">
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0 border-b 
            border-gray-200">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>

            <dl className="pb-10 pt-6 xl:pt-11 xl:dark:border-gray-700 flex flex-col xl:flex-row items-center justify-between">
              <dt className="sr-only">Authors</dt>
              <dd className="w-6/12">
                <ul className="gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={52}
                          height={52}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <div className="whitespace-nowrap text-sm font-medium leading-5">
                        <p className="text-gray-900 dark:text-gray-100">{author.name}</p>
                        <p className="text-gray-900 dark:text-gray-100 hidden md:block">{author.occupation}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </dd>
              {tags && (
                  <div className="py-4 xl:py-8 w-6/12">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                      Etiquetas
                    </h2>
                    <div className="flex flex-wrap gap-y-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
            </dl>
            
            <footer>
              <div className="text-sm font-medium leading-5">
                {(next || prev) && (
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-0 items-center justify-evenly py-4 lg:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          <Link className="hover:dark:text-white hover:text-black" href={`/${prev.path}`}>Art&iacute;culo Anterior</Link>
                        </h2>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-0">
                          <Link className="hover:dark:text-white hover:text-black" href={`/${next.path}`}>Siguiente Art&iacute;culo</Link>
                        </h2>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
