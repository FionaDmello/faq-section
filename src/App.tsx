import React from "react"
import './App.css'
import { RiIndeterminateCircleLine } from "@remixicon/react"
import { ACCORDION_CONTENT } from "@/data/content"

function App() {

  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] min-h-screen flex flex-col p-4">
      <div className="flex-1 rounded md:rounded-1.5 bg-white shadow gap-2 px-4 py-12 md:py-16 lg:p-24 items-center">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-5 text-center">
            <h1 className="text-3xl/7.5 md:text-5xl/12 font-semibold">Frequently asked questions</h1>
            <p className="text-lg/4.5 md:text-xl/4 text-neutral-600">Get all your questions answered</p>
          </div>
          
          <div className="space-y-7 divide-y divide-neutral-400">
            {
              ACCORDION_CONTENT.map(accordion => {
                return (
                  <React.Fragment key={accordion.title} >
                    <div className="flex gap-x-4 pb-7 nth-6:pb-0 nth-6:border-0 justify-between">
                      <div className="space-y-2">
                        <p className="text-lg/4.5 font-medium">{accordion.title}</p>
                        <p className="text-base/4 text-neutral-600 text-left">
                          {accordion.description}
                        </p>
                      </div>
                      <div>
                        <RiIndeterminateCircleLine className="text-neutral-400 w-6 h-6"/>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
            <div className="border-2 border-neutral-200 shadow-md rounded-lg p-4 md:p-8 gap-y-4 md:gap-y-0 md:gap-x-4 flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-left">Can't find the answer you're looking for?</h4>
                <p className="text-base text-neutral-600">
                  Reach out to our <span><a className="text-indigo-700  hover:text-indigo-800 focus:outline-4 focus:outline-offset-1 focus:outline-indigo-200 disabled:text-neutral-400 rounded">customer support</a></span> team.
                </p>
              </div>
              <button className="space-x-1.5 px-5 py-3 bg-indigo-700 text-white text-center shadow rounded hover:bg-indigo-800 focus:outline-4 focus:outline-solid focus:outline-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400">
                Get in touch
              </button>
            </div>
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
