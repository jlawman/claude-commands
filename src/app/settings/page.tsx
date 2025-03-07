'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Settings() {
  // Define state for form controls
  const [generalSettings, setGeneralSettings] = useState({
    username: 'johndoe',
    email: 'john.doe@example.com',
    language: 'en',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weeklyDigest: true,
    activitySummary: true,
    securityAlerts: true,
    marketingEmails: false
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'system',
    fontSize: 'medium',
    contrastMode: false,
    reducedMotion: false,
    compactView: false
  });

  // Handle input changes
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGeneralSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAppearanceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setAppearanceSettings((prev) => ({ ...prev, [name]: checked }));
    } else {
      setAppearanceSettings((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submissions
  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated save - would normally call an API
    console.log('Saving general settings:', generalSettings);
    // Show success message or feedback
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <nav className="space-y-1">
              {[
                { name: 'General', id: 'general' },
                { name: 'Notifications', id: 'notifications' },
                { name: 'Appearance', id: 'appearance' },
                { name: 'Privacy & Security', id: 'privacy' },
                { name: 'Billing', id: 'billing' },
                { name: 'Advanced', id: 'advanced' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              {/* General Settings */}
              <section id="general" className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">General Settings</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Update your basic account information.
                  </p>
                </div>
                <form onSubmit={handleGeneralSubmit} className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={generalSettings.username}
                        onChange={handleGeneralChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={generalSettings.email}
                        onChange={handleGeneralChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={generalSettings.language}
                        onChange={handleGeneralChange}
                        className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="ja">Japanese</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={generalSettings.timezone}
                        onChange={handleGeneralChange}
                        className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"
                      >
                        <option value="America/New_York">Eastern Time (US & Canada)</option>
                        <option value="America/Chicago">Central Time (US & Canada)</option>
                        <option value="America/Denver">Mountain Time (US & Canada)</option>
                        <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                        <option value="Europe/London">London</option>
                        <option value="Asia/Tokyo">Tokyo</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Date Format
                      </label>
                      <select
                        id="dateFormat"
                        name="dateFormat"
                        value={generalSettings.dateFormat}
                        onChange={handleGeneralChange}
                        className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"
                      >
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              {/* Notification Settings */}
              <section id="notifications" className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Notification Settings</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Decide how and when you want to be notified.
                  </p>
                </div>
                <form className="px-4 py-5 sm:p-6">
                  <div className="space-y-4">
                    {Object.entries(notificationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={key}
                            name={key}
                            type="checkbox"
                            checked={value}
                            onChange={handleNotificationChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={key} className="font-medium text-gray-700 dark:text-gray-300">
                            {key
                              .replace(/([A-Z])/g, ' $1')
                              .replace(/^./, (str) => str.toUpperCase())
                              .replace(/Emails$/, ' Emails')
                              .replace(/Notifications$/, ' Notifications')
                              .replace(/Sms/, 'SMS')
                            }
                          </label>
                          <p className="text-gray-500 dark:text-gray-400">
                            {key === 'emailNotifications' && 'Receive notifications via email.'}
                            {key === 'pushNotifications' && 'Receive push notifications on your devices.'}
                            {key === 'smsNotifications' && 'Receive SMS text messages for important alerts.'}
                            {key === 'weeklyDigest' && 'Get a weekly summary of your account activity.'}
                            {key === 'activitySummary' && 'Get a summary of your daily platform activity.'}
                            {key === 'securityAlerts' && 'Get alerts about security events on your account.'}
                            {key === 'marketingEmails' && 'Receive emails about new features and promotions.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              {/* Appearance Settings */}
              <section id="appearance" className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Appearance Settings</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Customize the look and feel of the application.
                  </p>
                </div>
                <form className="px-4 py-5 sm:p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="text-base font-medium text-gray-900 dark:text-white">Theme</label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Choose how the application appears to you.</p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="theme-system"
                            name="theme"
                            type="radio"
                            value="system"
                            checked={appearanceSettings.theme === 'system'}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                          />
                          <label htmlFor="theme-system" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            System (follow device settings)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="theme-light"
                            name="theme"
                            type="radio"
                            value="light"
                            checked={appearanceSettings.theme === 'light'}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                          />
                          <label htmlFor="theme-light" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Light
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="theme-dark"
                            name="theme"
                            type="radio"
                            value="dark"
                            checked={appearanceSettings.theme === 'dark'}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600"
                          />
                          <label htmlFor="theme-dark" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Dark
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Font Size
                      </label>
                      <select
                        id="fontSize"
                        name="fontSize"
                        value={appearanceSettings.fontSize}
                        onChange={handleAppearanceChange}
                        className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">Extra Large</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="contrastMode"
                            name="contrastMode"
                            type="checkbox"
                            checked={appearanceSettings.contrastMode}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="contrastMode" className="font-medium text-gray-700 dark:text-gray-300">
                            High Contrast Mode
                          </label>
                          <p className="text-gray-500 dark:text-gray-400">Increase contrast for better visibility.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="reducedMotion"
                            name="reducedMotion"
                            type="checkbox"
                            checked={appearanceSettings.reducedMotion}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="reducedMotion" className="font-medium text-gray-700 dark:text-gray-300">
                            Reduced Motion
                          </label>
                          <p className="text-gray-500 dark:text-gray-400">Minimize animations throughout the interface.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="compactView"
                            name="compactView"
                            type="checkbox"
                            checked={appearanceSettings.compactView}
                            onChange={handleAppearanceChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="compactView" className="font-medium text-gray-700 dark:text-gray-300">
                            Compact View
                          </label>
                          <p className="text-gray-500 dark:text-gray-400">Display more content by reducing whitespace.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              {/* Privacy & Security (abbreviated) */}
              <section id="privacy" className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Privacy & Security</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage your data privacy and security settings.
                  </p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-center text-gray-500 dark:text-gray-400 italic">
                    Privacy and security settings would appear here...
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 