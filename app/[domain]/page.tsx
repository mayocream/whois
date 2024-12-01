import Header from '@/components/header'
import { whois } from '@/lib/whois'
import { unstable_cache } from 'next/cache'

export default async function Page({
  params,
}: {
  params: Promise<{ domain: string }>
}) {
  const { domain } = await params

  const data = unstable_cache(async () => whois(domain), [domain], {
    revalidate: 3600,
  })()

  return (
    <>
      <Header />
      {data && (
        <div className='max-w-3xl mx-auto p-4'>
          <h1 className='text-3xl font-bold text-blue-600'>
            WHOIS Lookup for {domain}
          </h1>
          <pre>{data}</pre>
        </div>
      )}
    </>
  )
}
