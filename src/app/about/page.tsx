import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  UserGroupIcon, 
  CalendarIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-950 dark:to-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">About Us</h1>
            <Link href="/" className="group">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <motion.section 
          className="mb-20 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-clip-text text-transparent mb-4">
            {companyInfo.name}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {companyInfo.mission}
          </p>
        </motion.section>

        {/* Company overview */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <BuildingOffice2Icon className="h-16 w-16 mx-auto mb-4 text-blue-100" />
                  <h2 className="text-3xl font-bold">{companyInfo.name}</h2>
                  <p className="mt-2 text-blue-100">Established {companyInfo.founded}</p>
                </div>
              </div>
              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Company Facts</h3>
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="flex flex-col gap-2 bg-slate-50 dark:bg-gray-700/50 p-4 rounded-xl">
                    <dt className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="h-5 w-5 text-blue-500" />
                      Founded
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900 dark:text-white">{companyInfo.founded}</dd>
                  </div>
                  <div className="flex flex-col gap-2 bg-slate-50 dark:bg-gray-700/50 p-4 rounded-xl">
                    <dt className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <UserGroupIcon className="h-5 w-5 text-blue-500" />
                      Employees
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900 dark:text-white">{companyInfo.employees}</dd>
                  </div>
                  <div className="flex flex-col gap-2 bg-slate-50 dark:bg-gray-700/50 p-4 rounded-xl">
                    <dt className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <MapPinIcon className="h-5 w-5 text-blue-500" />
                      Global Presence
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">{companyInfo.locations.length} locations</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {companyInfo.locations.map((location, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <MapPinIcon className="h-4 w-4" />
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership team */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Leadership Team</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                variants={fadeIn}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="md:w-1/3 aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company history */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="pt-4"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Journey</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent ml-6"></div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-5 md:left-1/2 md:-ml-0.5 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-blue-400 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className={`relative md:flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
                >
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    {index % 2 === 0 ? (
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                          <span className="text-sm font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 md:-ml-3.5 h-7 w-7 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10"></div>
                  
                  <div className={`md:hidden ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                        <span className="text-sm font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    {index % 2 === 1 ? (
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                          <span className="text-sm font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6">
                Ready to transform your data analytics experience? Discover how our platform can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  View Dashboard
                </Button>
                <Link href="/dashboard">
                  <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}