import './App.css'

function App() {

  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] min-h-screen flex flex-col p-4">
      <div className="flex-1 rounded bg-white shadow gap-2 px-4 py-12">
        <h1>Frequently asked questions</h1>
        <p>Get all your questions answered</p>
      </div>
      
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          >GreatFrontEnd Projects</a
        >. Built by
        <a href="https://www.greatfrontend.com/u/your_username" target="_blank"
          >Your Name</a
        >.
      </div>
    </div>
  )
}

export default App
