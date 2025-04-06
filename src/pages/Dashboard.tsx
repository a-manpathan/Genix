
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, Search, User, Calendar, FileText, Settings, PieChart, LogOut, Moon, Sun, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from '@/providers/ThemeProvider';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New appointment request from Sarah Johnson', time: '5 min ago', read: false },
    { id: 2, text: 'Document upload completed', time: '1 hour ago', read: false },
    { id: 3, text: 'System maintenance scheduled for tonight', time: '3 hours ago', read: true },
  ]);
  
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/');
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    toast.success('All notifications marked as read');
  };

  // AI Tools data
  const aiTools = [
    {
      name: 'Patient Scheduler',
      description: 'AI-powered appointment scheduling with smart conflict resolution',
      icon: <Calendar className="w-8 h-8 text-genix-accent" />,
      progress: 70,
    },
    {
      name: 'Document Scanner',
      description: 'Scan and process medical documents with automated classification',
      icon: <FileText className="w-8 h-8 text-genix-accent" />,
      progress: 45,
    },
    {
      name: 'Analytics Dashboard',
      description: 'View patient trends and practice performance metrics',
      icon: <PieChart className="w-8 h-8 text-genix-accent" />,
      progress: 90,
    },
    {
      name: 'Patient Messenger',
      description: 'Secure HIPAA-compliant messaging with patients',
      icon: <MessageSquare className="w-8 h-8 text-genix-accent" />,
      progress: 60,
    }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-white dark:bg-genix-cardBg border-r border-gray-200 dark:border-gray-700 shadow-lg transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-genix-darkBlue dark:text-white">Genix<span className="text-genix-accent">AI</span></span>
          </Link>
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={toggleSidebar}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Dr. John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Primary Care</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <PieChart className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/appointments"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
            >
              <Calendar className="w-5 h-5 mr-3" />
              <span>Appointments</span>
            </Link>
            <Link
              to="/dashboard/documents"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
            >
              <FileText className="w-5 h-5 mr-3" />
              <span>Documents</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 w-full rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="flex items-center mt-2 px-3 py-2 w-full rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Header */}
        <header className="bg-white dark:bg-genix-cardBg shadow-sm h-16 flex items-center px-4">
          <button
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="ml-4 md:ml-0 relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-genix-accent"
            />
          </div>

          <div className="flex items-center ml-auto">
            <div className="relative">
              <button className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-genix-cardBg"></span>
              </button>
              
              {/* Notification dropdown */}
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-genix-cardBg rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <button 
                    className="text-sm text-genix-accent hover:text-genix-accent/80"
                    onClick={markAllAsRead}
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className={`p-4 border-b border-gray-200 dark:border-gray-700 ${
                        notif.read ? 'opacity-70' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <p className={`text-sm ${notif.read ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white font-medium'}`}>
                          {notif.text}
                        </p>
                        {!notif.read && <div className="w-2 h-2 rounded-full bg-genix-accent"></div>}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 text-center">
                  <Link to="/notifications" className="text-sm text-genix-accent hover:text-genix-accent/80">
                    View all notifications
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="ml-4">
              <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 bg-gray-50 dark:bg-genix-darkBlue transition-colors duration-300">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-genix-darkBlue dark:text-white">Welcome back, Dr. Doe</h1>
            <p className="text-gray-600 dark:text-gray-400">Here's an overview of your practice today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Appointments</h3>
                <Calendar className="w-5 h-5 text-genix-accent" />
              </div>
              <p className="text-3xl font-bold mt-2 text-genix-darkBlue dark:text-white">12</p>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>3 more than yesterday</span>
              </p>
            </div>

            <div className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Documents</h3>
                <FileText className="w-5 h-5 text-genix-accent" />
              </div>
              <p className="text-3xl font-bold mt-2 text-genix-darkBlue dark:text-white">5</p>
              <p className="text-sm text-red-500 flex items-center mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>2 more since yesterday</span>
              </p>
            </div>

            <div className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Patient Messages</h3>
                <MessageSquare className="w-5 h-5 text-genix-accent" />
              </div>
              <p className="text-3xl font-bold mt-2 text-genix-darkBlue dark:text-white">8</p>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>All caught up</span>
              </p>
            </div>

            <div className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">AI Credits Used</h3>
                <PieChart className="w-5 h-5 text-genix-accent" />
              </div>
              <p className="text-3xl font-bold mt-2 text-genix-darkBlue dark:text-white">65%</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-genix-accent h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">350/500 credits this month</p>
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-genix-darkBlue dark:text-white">Your AI Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiTools.map((tool, index) => (
                <div key={index} className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-genix-accent/10 p-3 rounded-lg">
                      {tool.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-genix-darkBlue dark:text-white">{tool.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{tool.description}</p>
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500 dark:text-gray-400">Completion</span>
                          <span className="font-medium text-genix-darkBlue dark:text-white">{tool.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div 
                            className="bg-genix-accent h-1.5 rounded-full" 
                            style={{ width: `${tool.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      to={`/dashboard/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-genix-accent hover:text-genix-accent/80 text-sm font-medium flex items-center"
                    >
                      Open Tool
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-genix-darkBlue dark:text-white">Recent Activity</h2>
            <div className="bg-white dark:bg-genix-cardBg rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Activity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-genix-cardBg divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">New Appointment</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Sarah Johnson - Routine Checkup</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">Today</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">10:30 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                          Confirmed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-genix-accent hover:text-genix-accent/80">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Document Uploaded</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Lab Results - Michael Brown</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">Today</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">9:15 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400">
                          Processing
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-genix-accent hover:text-genix-accent/80">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MessageSquare className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Message Received</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Robert Davis - Medication Question</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">Yesterday</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">4:23 PM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400">
                          Unread
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-genix-accent hover:text-genix-accent/80">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
                <a href="#" className="text-sm text-genix-accent hover:text-genix-accent/80 font-medium flex items-center justify-center">
                  View All Activity
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
