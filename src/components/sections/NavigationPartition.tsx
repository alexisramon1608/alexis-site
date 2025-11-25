import Navigation from '../Navigation'
import Partition from './Partition'
import Section from './Section'
import WindowPanel from '../WindowPanel'

/**
 * Navigation partition component for use on every page.
 * Provides a window-styled navigation pane that slots into any row.
 */
export default function NavigationPartition() {
  return (
    <Partition className="space-y-6">
      <Section>
        <WindowPanel title="navigation">
          <Navigation />
        </WindowPanel>
      </Section>
    </Partition>
  )
}

