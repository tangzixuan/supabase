import Link from 'next/link'
import React from 'react'
import { Badge, IconArrowRight } from 'ui'

interface Meetup {
  title: string
  isLive: boolean
  link: string
  info: string
}

const meetups: Meetup[] = [
  { title: 'Cape Town', isLive: false, link: '', info: '' },
  { title: 'Kenya', isLive: false, link: '', info: '' },
  { title: 'Singapore', isLive: true, link: '', info: '' },
  { title: 'Amsterdam', isLive: true, link: '', info: 'Aug 9, 5:30-8:30PM' },
  { title: 'London', isLive: false, link: '', info: '' },
  { title: 'Los Angeles', isLive: false, link: '', info: '' },
]

const LW8Meetups = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
      <div className="col-span-1 lg:col-span-4 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl tracking-[-.5px]">Join us live</h2>
        <p className="text-scale-1000 text-xs sm:text-sm lg:text-base py-3 lg:max-w-md">
          Celebrate LW8 with us at our first-ever live meetup across various locations. Join the
          fun, grab some swag, and be a part of the Supabase community.
        </p>
      </div>
      <div className="col-span-1 lg:col-span-7 lg:col-start-6 w-full max-w-4xl flex flex-col justify-between items-stretch">
        {meetups.map(({ info, link, isLive, title }: Meetup) => (
          <Link href={link}>
            <a
              target="_blank"
              className={[
                'w-full group py-0 flex items-center gap-2 md:gap-4 text-2xl lg:text-4xl border-b border-[#111718]',
                'hover:text-brand-900',
                isLive ? 'text-scale-1100' : 'text-scale-800',
              ].join(' ')}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <span>{title}</span>
                {isLive && <Badge>Live now</Badge>}
                <span className="opacity-0 -translate-x-2 transition-all md:group-hover:opacity-100 group-hover:translate-x-0">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.0387 16.2422L40.6691 23.8727M40.6691 23.8727L33.0387 31.5031M40.6691 23.8727L6.33203 23.8727"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              {info && <span className="text-sm text-right flex-1">{info}</span>}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LW8Meetups
