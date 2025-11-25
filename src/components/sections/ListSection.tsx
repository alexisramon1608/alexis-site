interface ListItem {
  text: string
  icon?: string
  link?: string
}

interface ListSectionProps {
  items: ListItem[]
  variant?: 'bullet' | 'numbered' | 'icon'
  className?: string
}

export default function ListSection({ 
  items,
  variant = 'bullet',
  className
}: ListSectionProps) {
  return (
    <div className={className}>
      {variant === 'numbered' ? (
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.icon && <span>{item.icon}</span>}
              {item.link ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


