import './App.css'

import Header from "@component/Header"
import ContactCard from "@component/Contact"
import Accordion from "@component/Accordion"
import { ACCORDION_CONTENT } from "@data/content"

function App() {

  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] min-h-screen flex flex-col p-4">
      <div className="flex-1 rounded md:rounded-1.5 bg-white shadow gap-2 px-4 py-12 md:py-16 lg:p-24 items-center">
        <div className="space-y-12 md:space-y-16">
          <Header />
          <div className="flex flex-col gap-y-7 divide-y divide-neutral-400">
            {
              ACCORDION_CONTENT.map(accordion => <Accordion accordion={accordion} />)
            }
            <ContactCard />
          </div>
        </div>
      </div>

      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          >GreatFrontEnd Projects</a
        >. Built by
        <a href="https://www.greatfrontend.com/u/your_username" target="_blank"
          >Fiona D'Mello</a
        >.
      </div>
    </div>
  )
}

export default App
