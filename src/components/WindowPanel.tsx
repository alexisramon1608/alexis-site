import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface WindowPanelProps {
  title: string
  children: ReactNode
  className?: string
}

/**
 * Retro window inspired by Windows XP chrome.
 * Provides a gradient border, faux title bar buttons, and padded content area.
 */
export default function WindowPanel({
  title,
  children,
  className
}: WindowPanelProps) {
  const contentBg = '#e0f5ff'

  const buttons = [
    { icon: '–', bg: 'bg-[#7dd3ff]', label: 'minimize' },
    { icon: '▭', bg: 'bg-[#4db8ff]', label: 'restore' },
    { icon: '✕', bg: 'bg-[#0097b2]', label: 'close' }
  ]

  return (
    <div
      className={cn(
        'p-[7px] bg-gradient-to-r from-[#4db8ff] via-[#7dd3ff] to-[#a8e6ff]',
        'border border-black',
        'mx-1 sm:mx-2 overflow-visible',
        className
      )}
    >
      <div className="border border-white/60 bg-[#d1f0ff] overflow-visible">
        <div className="relative flex items-center justify-between gap-3 -pl-1 pr-4 py-1 text-white text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-[#0097b2] via-[#00a8cc] to-[#4db8ff] border-b border-black/40 overflow-visible">
          <div className="flex flex-col leading-none drop-shadow gap-1">
            <span
              className="inline-flex items-center -px-1 py-0.5 text-black uppercase -tracking-[0.05em] text-[0.65rem] sm:text-[0.7rem] border border-black"
              style={{ backgroundColor: contentBg }}
            >
              {title}
            </span>
          </div>
          <div
            className="absolute -top-1.5 -right-1.5 flex items-center gap-1.5"
            aria-hidden="true"
          >
            {buttons.map((button, index) => (
              <div
                key={button.icon + index}
                className={cn(
                  'w-8 h-6 flex items-center justify-center text-xs font-bold text-white',
                  'border border-black shadow-[0_3px_0_rgba(0,0,0,0.35)]',
                  button.bg
                )}
                title={button.label}
              >
                {button.icon}
              </div>
            ))}
          </div>
        </div>
        <div
          className="p-4 sm:p-6 text-blue-900"
          style={{ backgroundColor: contentBg }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}


