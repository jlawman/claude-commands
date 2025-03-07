'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Metrics() {
  const [timeRange, setTimeRange] = useState('30d');
  
  // Mock metrics data
  const metrics = {
    overview: {
      revenue: {
        value: 142587.65,
        change: 12.3,
        trend: 'up'
      },
      users: {
        value: 8429,
        change: 7.8,
        trend: 'up'
      },
      conversionRate: {
        value: 4.2,
        change: 0.5,
        trend: 'up'
      },
      churnRate: {
        value: 2.1,
        change: -0.3,
        trend: 'down'
      }
    },
    performance: [
      { date: '2023-01', value: 85 },
      { date: '2023-02', value: 88 },
      { date: '2023-03', value: 87 },
      { date: '2023-04', value: 89 },
      { date: '2023-05', value: 91 },
      { date: '2023-06', value: 92 },
      { date: '2023-07', value: 93 },
      { date: '2023-08', value: 94 },
      { date: '2023-09', value: 95 },
      { date: '2023-10', value: 96 },
      { date: '2023-11', value: 97 },
      { date: '2023-12', value: 99 }
    ],
    trafficSources: [
      { source: 'Direct', value: 35 },
      { source: 'Organic Search', value: 25 },
      { source: 'Referral', value: 20 },
      { source: 'Social Media', value: 15 },
      { source: 'Email', value: 5 }
    ],
    deviceUsage: [
      { device: 'Desktop', value: 58 },
      { device: 'Mobile', value: 32 },
      { device: 'Tablet', value: 10 }
    ],
    topPages: [
      { path: '/home', views: 12542, conversion: 3.2 },
      { path: '/products', views: 8721, conversion: 4.5 },
      { path: '/pricing', views: 6532, conversion: 5.8 },
      { path: '/blog/top-10-tips', views: 4321, conversion: 2.1 },
      { path: '/about', views: 3214, conversion: 1.7 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Core Metrics</h1>
            <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time range selector */}
        <div className="mb-6">
          <div className="flex space-x-1 rounded-lg bg-gray-200 dark:bg-gray-700 p-1 max-w-md">
            {['7d', '30d', '90d', '1y', 'all'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`
                  flex-1 py-2 px-4 text-sm font-medium rounded-md 
                  ${timeRange === range 
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }
                `}
              >
                {range === '7d' ? 'Week' : 
                 range === '30d' ? 'Month' : 
                 range === '90d' ? 'Quarter' : 
                 range === '1y' ? 'Year' : 'All Time'}
              </button>
            ))}
          </div>
        </div>

        {/* Key metrics overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                    ${metrics.overview.revenue.value.toLocaleString()}
                  </p>
                </div>
                <div className={`text-sm ${metrics.overview.revenue.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {metrics.overview.revenue.trend === 'up' ? '↑' : '↓'} {Math.abs(metrics.overview.revenue.change)}%
                </div>
              </div>
              <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                    {metrics.overview.users.value.toLocaleString()}
                  </p>
                </div>
                <div className={`text-sm ${metrics.overview.users.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {metrics.overview.users.trend === 'up' ? '↑' : '↓'} {Math.abs(metrics.overview.users.change)}%
                </div>
              </div>
              <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '58%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                    {metrics.overview.conversionRate.value}%
                  </p>
                </div>
                <div className={`text-sm ${metrics.overview.conversionRate.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {metrics.overview.conversionRate.trend === 'up' ? '↑' : '↓'} {Math.abs(metrics.overview.conversionRate.change)}%
                </div>
              </div>
              <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '42%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Churn Rate</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                    {metrics.overview.churnRate.value}%
                  </p>
                </div>
                <div className={`text-sm ${metrics.overview.churnRate.trend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
                  {metrics.overview.churnRate.trend === 'up' ? '↑' : '↓'} {Math.abs(metrics.overview.churnRate.change)}%
                </div>
              </div>
              <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '21%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance over time chart */}
        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Over Time</h2>
          <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-md p-4 flex flex-col">
            <div className="flex-grow flex items-end space-x-2">
              {metrics.performance.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-blue-500 rounded-t" style={{ height: `${item.value}%` }}></div>
                </div>
              ))}
            </div>
            <div className="h-6 flex items-center space-x-2 mt-2">
              {metrics.performance.map((item, index) => (
                <div key={index} className="flex-1 text-xs text-center text-gray-500 dark:text-gray-400">
                  {item.date.split('-')[1]}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Traffic and device distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Traffic sources */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h2>
            <div className="space-y-4">
              {metrics.trafficSources.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{source.source}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{source.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${source.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Device usage */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Device Usage</h2>
            <div className="flex items-center justify-center h-64">
              <div className="w-full max-w-md">
                <div className="relative h-48 w-48 mx-auto">
                  {/* Simplified donut chart */}
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 0, 0 0, 0 65%, 50% 65%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(50% 65%, 0 65%, 0 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{metrics.deviceUsage.reduce((sum, item) => sum + item.value, 0)}%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Usage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {metrics.deviceUsage.map((device, index) => (
                <div key={index} className="flex items-center">
                  <span className={`h-3 w-3 rounded-full mr-1 ${
                    index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'
                  }`}></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{device.device} ({device.value}%)</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Top pages */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Page Path
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Views
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Conversion Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {metrics.topPages.map((page, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {page.path}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {page.conversion}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
} 