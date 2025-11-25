import { ReactNode, Children, useRef, useEffect } from 'react'
import Section from './Section'
import { cn } from '@/lib/utils'

interface RowSectionProps {
  children: ReactNode
  className?: string
  columns?: 1 | 2 | 3 | 4
  /** Column ratios as an array of numbers (e.g., [1, 2] for 1:2 ratio, [1, 3, 2] for 1:3:2) */
  ratios?: number[]
}

export default function RowSection({ 
  children,
  className,
  columns = 2,
  ratios
}: RowSectionProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const childrenArray = Children.toArray(children)
  const gridRef = useRef<HTMLDivElement>(null)

  // If ratios are provided, use custom grid-template-columns
  // On mobile, use single column; on desktop, use the ratios
  const gridColsClass = ratios 
    ? 'grid grid-cols-1' 
    : gridCols[columns]

  // Apply ratio styles on desktop using useEffect
  useEffect(() => {
    if (ratios && gridRef.current && ratios.length === childrenArray.length) {
      const mediaQuery = window.matchMedia('(min-width: 768px)')
      const applyRatios = () => {
        if (mediaQuery.matches) {
          gridRef.current!.style.gridTemplateColumns = ratios.map(r => `${r}fr`).join(' ')
        } else {
          gridRef.current!.style.gridTemplateColumns = `repeat(${childrenArray.length}, minmax(0, 1fr))`
        }
      }
      
      applyRatios()
      mediaQuery.addEventListener('change', applyRatios)
      
      return () => mediaQuery.removeEventListener('change', applyRatios)
    }
  }, [ratios, childrenArray.length])

  return (
    <Section className={cn('flex flex-col', className)}>
      <div 
        ref={gridRef}
        className={cn(gridColsClass, 'overflow-hidden flex-1 min-h-0')}
        style={{ display: 'grid', alignItems: 'stretch' }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="min-w-0 overflow-hidden h-full w-full" style={{ display: 'flex', flexDirection: 'column' }}>
            {child}
          </div>
        ))}
      </div>
    </Section>
  )
}

