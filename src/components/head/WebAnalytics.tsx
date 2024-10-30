import { analytics } from '@/config.json'

export function WebAnalytics() {
  if (import.meta.env.DEV || !analytics.enable) return null

  return <>
    {
      analytics.google.measurementId && <GoogleAnalytics {...analytics.google} />
    }
  </>
}

function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string,
}) {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${measurementId}');`,
      }}></script>
    </>
  )
}
