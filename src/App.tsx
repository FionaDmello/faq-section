import './App.css'
import { RiIndeterminateCircleLine } from "@remixicon/react"

function App() {

  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] min-h-screen flex flex-col p-4">
      <div className="flex-1 rounded bg-white shadow gap-2 px-4 py-12 md:py-18">
        <div className="space-y-12 md:space-y-18">
          <div className="space-y-5 text-center">
            <h1 className="text-3xl/7.5 md:text-5xl/12 font-semibold">Frequently asked questions</h1>
            <p className="text-lg/4.5 md:text-xl/4 text-neutral-600">Get all your questions answered</p>
          </div>
          
          <div className="space-y-7">
            <div className="flex gap-x-4">
              <div className="space-y-2">
                <p className="text-lg/4.5 font-medium">What types of images are available on your platform?</p>
                <p className="text-base/4 text-neutral-600 text-left">
                  Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.
                </p>
              </div>
              <RiIndeterminateCircleLine className="text-neutral-400 w-6 h-6" />
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
