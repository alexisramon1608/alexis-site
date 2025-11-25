interface StatusUpdate {
  date: string
  message: string
  author?: string
  emoji?: string
}

interface StatusSectionProps {
  updates: StatusUpdate[]
  className?: string
}

export default function StatusSection({ 
  updates,
  className
}: StatusSectionProps) {
  return (
    <div className={className}>
      <div>
        {updates.map((update, index) => (
          <div key={index}>
            {update.emoji && <span>{update.emoji}</span>}
            {update.author && <span>{update.author}</span>}
            <span>{update.date}</span>
            <p>{update.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


