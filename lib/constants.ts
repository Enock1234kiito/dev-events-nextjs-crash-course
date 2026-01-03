export type EventItem = {
  id: string
  title: string
  slug: string
  image: string
  location: string
  date: string
  time: string
  description?: string
  tags?: string[]
  url?: string
}

export const events: EventItem[] = [
  {
    id: 'google-io-2026',
    title: 'Google I/O 2026',
    slug: 'google-io-2026',
    image: '/images/event1.png',
    location: 'Mountain View, CA, USA',
    date: '2026-05-19',
    time: '09:00 AM',
    description: 'Google developer conference with announcements across web, Android, and cloud.',
    tags: ['web', 'android', 'cloud'],
    url: 'https://events.google.com/io/'
  },

  {
    id: 'microsoft-build-2026',
    title: 'Microsoft Build 2026',
    slug: 'microsoft-build-2026',
    image: '/images/event2.png',
    location: 'Seattle, WA, USA',
    date: '2026-06-02',
    time: '10:00 AM',
    description: 'Microsoft conference for developers building on Azure, .NET, and Microsoft platforms.',
    tags: ['azure', '.net', 'devops'],
    url: 'https://mybuild.microsoft.com/'
  },

  {
    id: 'react-conf-2026',
    title: 'React Conf 2026',
    slug: 'react-conf-2026',
    image: '/images/event3.png',
    location: 'San Francisco, CA, USA',
    date: '2026-09-10',
    time: '09:30 AM',
    description: 'Official React conference focused on the React ecosystem, performance and new APIs.',
    tags: ['react', 'frontend', 'javascript'],
    url: 'https://reactconf.com/'
  },

  {
    id: 'nextjs-conf-2026',
    title: 'Next.js Conf 2026',
    slug: 'nextjs-conf-2026',
    image: '/images/event4.png',
    location: 'Online & Austin, TX, USA',
    date: '2026-04-22',
    time: '11:00 AM',
    description: 'Conference for Next.js maintainers and users with talks, workshops and product updates.',
    tags: ['nextjs', 'react', 'ssr'],
    url: 'https://nextjs.org/conf'
  },

  {
    id: 'jsconf-eu-2026',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    image: '/images/event5.png',
    location: 'Berlin, Germany',
    date: '2026-07-14',
    time: '09:00 AM',
    description: 'Community-driven JavaScript conference covering language, tooling and platform topics.',
    tags: ['javascript', 'community'],
    url: 'https://jsconf.eu/'
  },

  {
    id: 'ethdenver-2026',
    title: 'ETHDenver 2026',
    slug: 'ethdenver-2026',
    image: '/images/event6.png',
    location: 'Denver, CO, USA',
    date: '2026-02-20',
    time: '10:00 AM',
    description: 'Large Web3 + blockchain hackathon and community conference.',
    tags: ['blockchain', 'web3', 'hackathon'],
    url: 'https://www.ethdenver.com/'
  },

  {
    id: 'hackmit-2026',
    title: 'HackMIT 2026',
    slug: 'hackmit-2026',
    image: '/images/event-full.png',
    location: 'Cambridge, MA, USA',
    date: '2026-03-07',
    time: '08:00 AM',
    description: 'Student-run hackathon with workshops, mentors, and project showcases.',
    tags: ['hackathon', 'students'],
    url: 'https://hackmit.org/'
  },

  {
    id: 'techcrunch-disrupt-2026',
    title: 'TechCrunch Disrupt 2026',
    slug: 'techcrunch-disrupt-2026',
    image: '/images/event1.png',
    location: 'San Francisco, CA, USA',
    date: '2026-10-05',
    time: '09:00 AM',
    description: 'Startup-focused conference featuring founders, investors, and product launches.',
    tags: ['startups', 'investors'],
    url: 'https://techcrunch.com/events/disrupt/'
  }
]

export default events
