import { ReactNode, Children, useRef, useEffect } from 'react'
import Section from './Section'
import { cn } from '@/lib/utils'

interface ColumnSectionProps {
  children: ReactNode
  className?: string
  /** Type 1: Use ratios to determine height distribution of sections stacked vertically (e.g., [1, 2, 1] for 1:2:1 ratio). */
  ratios?: number[]
  /** Type 2: Scrollable mode. Provide heights for each section stacked vertically (e.g., ["200px", "300px", "150px"]). */
  heights?: string[]
  /** Enable scrollable mode (Type 2). If true, use `heights` prop. */
  scrollable?: boolean
}

/**
 * ColumnSection component for creating vertical column subdivisions within a section.
 * 
 * Type 1 (ratios): Single column with sections stacked vertically, using ratios to determine height distribution.
 * Type 2 (scrollable): Scrollable container with manual heights for each section.
 */
export default function ColumnSection({ 
  children,
  className,
  ratios,
  heights,
  scrollable = false
}: ColumnSectionProps) {
  const childrenArray = Children.toArray(children)
  const gridRef = useRef<HTMLDivElement>(null)

  // Type 1: Ratios mode - sections stacked vertically, ratios determine height
  if (ratios && !scrollable) {
    // Apply ratio styles using useEffect to set grid-template-rows
    useEffect(() => {
      if (ratios && gridRef.current && ratios.length === childrenArray.length) {
        gridRef.current.style.gridTemplateRows = ratios.map(r => `${r}fr`).join(' ')
        gridRef.current.style.height = '100%'
      }
    }, [ratios, childrenArray.length])

    return (
      <Section className={cn('flex flex-col', className)}>
        <div 
          ref={gridRef}
          className="grid grid-cols-1 flex-1 overflow-hidden"
        >
          {childrenArray.map((child, index) => (
            <div 
              key={index} 
              className="min-w-0 w-full overflow-hidden"
            >
              {child}
            </div>
          ))}
        </div>
      </Section>
    )
  }

  // Type 2: Scrollable mode - manual heights
  if (scrollable && heights) {
    if (heights.length !== childrenArray.length) {
      console.warn(`ColumnSection: heights array length (${heights.length}) doesn't match children count (${childrenArray.length})`)
    }

    return (
      <Section className={cn('flex flex-col', className)}>
        <div className="overflow-y-auto overflow-x-hidden flex-1">
          {childrenArray.map((child, index) => (
            <div 
              key={index} 
              style={{ height: heights[index] || 'auto' }}
              className="min-w-0 w-full overflow-hidden"
            >
              {child}
            </div>
          ))}
        </div>
      </Section>
    )
  }

  // Fallback: if neither mode is properly configured, render as regular section
  return (
    <Section className={className}>
      {children}
    </Section>
  )
}

