import Section from '@/components/sections/Section'
import RowSection from '@/components/sections/RowSection'
import Partition from '@/components/sections/Partition'
import WindowPanel from '@/components/WindowPanel'
import Navigation from '@/components/Navigation'

export default function HomePage() {
  return (
    <RowSection columns={3} ratios={[2, 5, 2]} className="gap-6">
      <Partition className="space-y-10">
        <Section>
          <WindowPanel title="navigation">
            <Navigation />
          </WindowPanel>
        </Section>
        <Section>
          <WindowPanel title="status log">
            <ul className="space-y-3 text-sm text-blue-900">
            </ul>
          </WindowPanel>
        </Section>
        <Section>
          <WindowPanel title="IDK YET">
            <ol className="text-sm text-blue-800 space-y-2">
              <li>ha</li>
            </ol>
          </WindowPanel>
        </Section>
      </Partition>

      <Partition className="space-y-3">
        <Section>
          <WindowPanel title="About me">
            <div className="text-blue-900">
              <img
                src="https://i.imgur.com/oJioQyp.gif"
                alt="Animated corner decoration"
                className="float-left mr-4 mb-2"
                style={{ maxWidth: '175px', height: 'auto' }}
              />
              <p className="mb-3" style={{ fontSize: '22px', letterSpacing: '0.0em', wordSpacing: '0.3em' }}>
                Hey! My name is <span className="text-wiggle font-semibold">Alexis</span> Welcome to my website, genuinely. I'm a ♂️ and 21(00000{' '}
                <img 
                  src="https://i.imgur.com/UBQDjXx.gif" 
                  alt="Animated icon" 
                  className="inline-block align-middle"
                  style={{ width: 'auto', height: '22px', verticalAlign: 'middle', marginLeft: '-10px'}}
                />
                ) years old (unc/carbon dated to the mezozoic era)... o algo
              </p>
              <p className="mb-3">
                This is all 🚧<span className="text-construction font-bold">UNDER CONSTRUCTION</span>🚧
              </p>
              <p className="mb-3" style={{ fontSize: '20px', letterSpacing: '0.0em', wordSpacing: '0.3em'}}>
                So shiver your timbers, you're gonna have to wait a bit for the good shi, although I got some stuff vaulted that you might wanna check out, some secrets, like easter eggs (harr harr harr harrrr...){' '}
                <img 
                  src="https://i.imgur.com/hk6rcoQ.gif" 
                  alt="Animated icon" 
                  className="inline-block align-middle"
                  style={{ width: '40px', height: '40px', marginLeft: '-10px' }}
                />
              </p>
              
              <p className="text-xs uppercase tracking-[0.3em] text-blue-500 text-center">GREATEST OF ALL TIME</p>
            </div>
          </WindowPanel>
        </Section>
        <Section>
          <WindowPanel title="layout notes">
            <p className="text-blue-900 mb-3">
              ZZZZZ
            </p>
          </WindowPanel>
        </Section>
        <Section>
          <WindowPanel title="today's highlight">
            <div className="space-y-4">
              <p className="text-blue-900">
                i love catttsssss.
              </p>
            </div>
          </WindowPanel>
        </Section>
      </Partition>

      <Partition className="space-y-6 ">
        <Section>
          <WindowPanel title="FREE PALESTINE">
            <div className="space-y-4 text-blue-900 ">
              <div className="rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="https://i.imgur.com/6pFzAaf.gif"
                  alt="Free Palestine solidarity artwork"
                  className="w-full h-24 object-cover"
                />
              </div>
              <p className="text-sm text-green-700">
                we (yes we) clicked on this link ⬇
              </p>
              <div className=" text-base font-semibold text-green-800">
                <a
                  href="https://www.pcrf.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-110 hover:text-green-600"
                >
                  Palestinian Children Relief Fund
                </a>
                <a
                  href="https://decolonizepalestine.com/introduction-to-palestine/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-110 hover:text-green-600"
                >
                  Learn about Palestine
                </a>
              </div>
            </div>
          </WindowPanel>
        </Section>
        <Section>
          <WindowPanel title="contact">
            <p className="text-sm text-blue-700 mb-2">  HURRAAH:</p>
            <div className="space-y-1 text-sm text-blue-900">
              <p>✦ GFGFGFGF</p>
              <p>✦ GFGF</p>
              <p>✦ FDFDFxml</p>
            </div>
          </WindowPanel>
        </Section>
      </Partition>
    </RowSection>
  )
}

