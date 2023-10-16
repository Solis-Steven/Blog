import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 
          dark:text-gray-100 sm:text-4xl sm:leading-10  md:leading-14">
            Steven Solis <span className='text-cyan-400'>Blog</span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <div className="">

          <h2 className="text-2xl font-bold leading-9 tracking-tight text-cyan-400 
          sm:text-4xl sm:leading-10 md:leading-14 mt-12">
            Novedades
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, tags } = post
              return (
                <li key={slug} className="pb-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0
                    mt-4">
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="text-gray-500 dark:text-gray-400 flex">
                              <p className='mr-2'>Publicado el: </p>
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </div>
                            <div className="flex flex-wrap mt-3 gap-y-3">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
                            aria-label={`Read "${title}"`}
                          >
                            Leer m&aacute;s &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
            aria-label="All posts"
          >
            Todas las Publicaciones &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
