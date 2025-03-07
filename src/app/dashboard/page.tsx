'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for the dashboard
  const metrics = {
    dailyActiveUsers: 1842,
    revenue: 12589.45,
    conversionRate: 3.7,
    churnRate: 2.1,
    growth: 15.8
  };
  
  const recentActivities = [
    { id: 1, user: 'Sarah Johnson', action: 'Updated profile settings', time: '10 minutes ago' },
    { id: 2, user: 'Mark Williams', action: 'Completed onboarding', time: '25 minutes ago' },
    { id: 3, user: 'Alex Chen', action: 'Upgraded subscription', time: '1 hour ago' },
    { id: 4, user: 'Taylor Swift', action: 'Created a new project', time: '2 hours ago' },
    { id: 5, user: 'Jamie Rodriguez', action: 'Shared document with team', time: '3 hours ago' }
  ];
  
  const upcomingTasks = [
    { id: 1, title: 'Quarterly review meeting', date: 'Today, 2:00 PM', priority: 'High' },
    { id: 2, title: 'Content calendar approval', date: 'Tomorrow, 10:00 AM', priority: 'Medium' },
    { id: 3, title: 'Team sync call', date: 'Wed, 11:30 AM', priority: 'Medium' },
    { id: 4, title: 'Project roadmap review', date: 'Fri, 1:00 PM', priority: 'High' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex space-x-8">
            {['overview', 'analytics', 'projects', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Daily Active Users</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{metrics.dailyActiveUsers}</p>
            <p className="mt-2 text-sm text-green-600">↑ 12.5% from last month</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">${metrics.revenue.toLocaleString()}</p>
            <p className="mt-2 text-sm text-green-600">↑ 8.2% from last month</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{metrics.conversionRate}%</p>
            <p className="mt-2 text-sm text-green-600">↑ 0.5% from last month</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Churn Rate</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{metrics.churnRate}%</p>
            <p className="mt-2 text-sm text-red-600">↑ 0.3% from last month</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{metrics.growth}%</p>
            <p className="mt-2 text-sm text-green-600">↑ 2.3% from last month</p>
          </div>
        </div>
        
        {/* Chart placeholder */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Over Time</h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Performance chart visualization would go here</p>
          </div>
        </div>
        
        {/* Recent activity and tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    {activity.user.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.user}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.action}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming Tasks</h2>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex">
                  <div className={`flex-shrink-0 h-4 w-4 mt-1 rounded-full ${
                    task.priority === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 