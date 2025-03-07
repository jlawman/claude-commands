import Link from 'next/link';

export default function About() {
  // Mock company data
  const companyInfo = {
    name: 'AnalyticsPro',
    founded: 2018,
    employees: 127,
    locations: ['San Francisco', 'New York', 'London', 'Singapore'],
    mission: 'To empower businesses with data-driven insights that drive growth and innovation.'
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Alexandra Chen',
      title: 'Chief Executive Officer',
      bio: 'Alexandra has over 15 years of experience in tech and analytics. Before founding AnalyticsPro, she was VP of Product at DataViz Inc.',
      imageUrl: '/images/team/alexandra.jpg' // placeholder
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Chief Technology Officer',
      bio: 'Marcus leads our engineering team and has built scalable systems for multiple Fortune 500 companies throughout his career.',
      imageUrl: '/images/team/marcus.jpg' // placeholder
    },
    {
      id: 3,
      name: 'Priya Patel',
      title: 'Chief Product Officer',
      bio: 'Priya brings her passion for user-centric design and product strategy, having previously led product teams at major tech companies.',
      imageUrl: '/images/team/priya.jpg' // placeholder
    },
    {
      id: 4,
      name: 'David Rodriguez',
      title: 'VP of Customer Success',
      bio: 'David ensures our customers achieve their goals with our platform, bringing deep expertise in customer experience and support.',
      imageUrl: '/images/team/david.jpg' // placeholder
    }
  ];

  const milestones = [
    {
      year: 2018,
      title: 'Company Founded',
      description: 'AnalyticsPro was founded with seed funding from leading venture capital firms.'
    },
    {
      year: 2019,
      title: 'First Major Release',
      description: 'Launch of our core analytics platform with predictive modeling capabilities.'
    },
    {
      year: 2020,
      title: 'Series A Funding',
      description: 'Secured $12M in Series A funding to expand our product offerings and team.'
    },
    {
      year: 2021,
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore to better serve our global customer base.'
    },
    {
      year: 2022,
      title: 'Enterprise Platform Launch',
      description: 'Released our enterprise-grade solution with advanced security and compliance features.'
    },
    {
      year: 2023,
      title: 'Series B Funding',
      description: 'Raised $40M in Series B funding to accelerate growth and innovation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">About Us</h1>
            <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-blue-600 text-white p-8 flex items-center justify-center md:w-64">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">{companyInfo.name}</h2>
                  <p className="mt-2">Est. {companyInfo.founded}</p>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">Our Mission</div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">{companyInfo.mission}</p>
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Company Facts</h3>
                  <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Founded</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{companyInfo.founded}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Employees</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{companyInfo.employees}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Locations</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">{companyInfo.locations.join(', ')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col md:flex-row">
                <div className="md:flex-shrink-0 h-48 md:h-auto md:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div className="text-3xl text-gray-400 dark:text-gray-500">{member.name.split(' ').map(n => n[0]).join('')}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{member.title}</p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company history */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h2>
          <div className="relative">
            <div className="absolute top-0 left-5 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute top-0 left-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {milestone.year.toString().substring(2)}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <div className="flex items-baseline">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{milestone.title}</h3>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{milestone.year}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 