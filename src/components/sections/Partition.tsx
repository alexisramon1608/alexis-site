import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PartitionProps {
  children: ReactNode
  className?: string
}

/**
 * Base partition component for creating subdivisions.
 * Use this for custom horizontal or vertical partitions.
 */
export default function Partition({ 
  children,
  className
}: PartitionProps) {
  return (
    <div className={cn('overflow-hidden h-full w-full', className)}>
      {children}
    </div>
  )
}

