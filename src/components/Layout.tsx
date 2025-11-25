import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  /** Size of the repeating background tile. Can be a number (pixels) or CSS value string (e.g., "50px", "100px", "2rem"). Defaults to 'auto'. */
  tileSize?: number | string
}

export default function Layout({ children, tileSize = 25 }: LayoutProps) {
  const backgroundSize = typeof tileSize === 'number' ? `${tileSize}px` : tileSize

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(https://emeowly.gay/_images/assets/backgroundstatic.png)',
        backgroundRepeat: 'repeat',
        backgroundColor: '#006d85',
        backgroundSize: backgroundSize
      }}
    >
      {/* Secondary background acts as padding on sides */}
      <div className="min-h-screen py-8 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        {/* Centered content strip */}
        <div className="max-w-6xl mx-auto flex flex-col overflow-hidden">
          
          {/* Page content - sections stack vertically */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}


