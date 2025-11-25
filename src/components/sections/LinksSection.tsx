interface Link {
  url: string
  label: string
  description?: string
  icon?: string
}

interface LinksSectionProps {
  links: Link[]
  variant?: 'grid' | 'list'
  className?: string
}

export default function LinksSection({ 
  links,
  variant = 'grid',
  className
}: LinksSectionProps) {
  return (
    <div className={className}>
      {variant === 'grid' ? (
        <div>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && <span>{link.icon}</span>}
              <span>{link.label}</span>
              {link.description && <span>{link.description}</span>}
            </a>
          ))}
        </div>
      ) : (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <span>{link.icon}</span>}
                <span>{link.label}</span>
                {link.description && <span>{link.description}</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


