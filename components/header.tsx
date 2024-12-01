'use client'

import { Globe, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const router = useRouter()
  const [domain, setDomain] = useState('')

  return (
    <div className='p-4'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex justify-center items-center mb-8'>
          <Globe className='w-12 h-12 text-blue-600 mr-2' />
          <h1 className='text-3xl font-bold text-blue-600'>Whois</h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            router.push(domain)
          }}
          className='flex gap-2'
        >
          <div className='relative flex-1'>
            <input
              type='text'
              name='domain'
              onChange={(e) => setDomain(e.target.value)}
              placeholder='example.com'
              className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
            />
            <Globe className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          </div>
          <button
            type='submit'
            className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center'
          >
            <Search className='w-5' />
          </button>
        </form>
      </div>
    </div>
  )
}
