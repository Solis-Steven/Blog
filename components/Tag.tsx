import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-white bg-cyan-400 dark:bg-cyan-500 p-1 rounded-md"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
