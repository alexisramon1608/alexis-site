import { ReactNode } from 'react'
import Partition from './Partition'
import { cn } from '@/lib/utils'

interface HeaderSectionProps {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

export default function HeaderSection({ 
  left, 
  right,
  className 
}: HeaderSectionProps) {
  return (
    <Partition className={cn('p-4', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          {left || (
            <h1 className="text-2xl font-bold text-blue-600 retro-text-shadow">
              My Website
            </h1>
          )}
        </div>
        
        {/* Right side - optional custom content */}
        {right && (
          <div className="flex-shrink-0">
            {right}
          </div>
        )}
      </div>
    </Partition>
  )
}

