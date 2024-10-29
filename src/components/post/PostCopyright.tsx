import { author, site } from '@/config.json'
import { getFormattedDateTime } from '@/utils/date'
import { AnimatedSignature } from '../AnimatedSignature'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";

function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyright({
  title,
  slug,
  lastMod,
}: {
  title: string
  slug: string
  lastMod: Date
}) {
  const [lastModStr, setLastModStr] = useState('')
  const url = getPostUrl(slug)

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)
    toast.success('Article link copied')
  }

  useEffect(() => {
    setLastModStr(getFormattedDateTime(lastMod))
  }, [lastMod])

  return (
    <section className="text-xs leading-loose text-secondary">
      <p>Title: {title}</p>
      <p>Author：{author.name}</p>
      <p>
        <span>URL：{url}</span>
        <span role="button" className="cursor-pointer select-none" onClick={handleCopyUrl}>
          [copy]
        </span>
      </p>
      <p>Last modified: {lastModStr}</p>
      <hr className="my-3 border-primary" />
      <div>
        <div className="float-right ml-4 my-2">
          <AnimatedSignature />
        </div>
        <p>
          
          <a
            className="hover:underline hover:text-accent underline-offset-2"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
         
        </p>
      </div>
    </section>
  )
}
