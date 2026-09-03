const ContactCard = () => {
  return (
    <div className="border-2 border-neutral-200 shadow-md rounded-lg p-4 md:p-8 gap-y-4 md:gap-y-0 md:gap-x-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-left">Can't find the answer you're looking for?</h4>
        <p className="text-base text-neutral-600">
          Reach out to our <span><a href="" className="text-indigo-700  hover:text-indigo-800 focus:outline-4 focus:outline-offset-1 focus:outline-indigo-200 disabled:text-neutral-400 rounded cursor-pointer">customer support</a></span> team.
        </p>
      </div>
      <button className="space-x-1.5 px-5 py-3 bg-indigo-700 text-white text-center shadow rounded hover:bg-indigo-800 focus:outline-4 focus:outline-solid focus:outline-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400">
        Get in touch
      </button>
    </div>
  )
}

export default ContactCard