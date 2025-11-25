import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', label: 'home' },
  { path: '/example', label: 'example' },
]

export default function Navigation() {
  const location = useLocation()

  return (
    <nav>
      <h2 className="text-xl font-bold mb-4 text-blue-600 retro-text-shadow border-b-2 border-blue-200 pb-2">
        navigation
      </h2>
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  'block px-3 py-2 rounded-md transition-all',
                  'hover:bg-blue-100 hover:translate-x-1',
                  isActive
                    ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold'
                    : 'text-blue-700 hover:text-blue-900 bg-blue-50'
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


