import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings - EDL.GG",
  description: "Manage your EDL.GG account settings.",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-[#2d3844] rounded-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Profile Information</h3>
              <div className="bg-[#1e252d] p-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-[#2d3844] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                      placeholder="Your username"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-[#2d3844] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Change Password</h3>
              <div className="bg-[#1e252d] p-4 rounded-md">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-[#2d3844] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                      placeholder="Current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-[#2d3844] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                      placeholder="New password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-[#2d3844] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
              <div className="bg-[#1e252d] p-4 rounded-md">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="email-notifications"
                      type="checkbox"
                      className="h-4 w-4 bg-[#2d3844] border border-[#3d4957] rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-2 block text-sm">
                      Email notifications
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="match-reminders"
                      type="checkbox"
                      className="h-4 w-4 bg-[#2d3844] border border-[#3d4957] rounded"
                    />
                    <label htmlFor="match-reminders" className="ml-2 block text-sm">
                      Match reminders
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="news-updates"
                      type="checkbox"
                      className="h-4 w-4 bg-[#2d3844] border border-[#3d4957] rounded"
                    />
                    <label htmlFor="news-updates" className="ml-2 block text-sm">
                      News updates
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#4c9fd8] text-white py-2 px-4 rounded-md hover:bg-[#3a8bc2] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

