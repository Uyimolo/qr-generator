
const Spinner = () => {
  return (
    <div className="bg-transparent w-8 relative h-8 overflow-hidden rounded-full animate-spin mx-auto">
        <div className="bg-teal absolute top-0 left-0 right-0 mx-auto w-8 h-3"></div>
        <div className="bg-teal absolute bottom-0 left-0 right-0 mx-auto w-8 h-3"></div>
        <div className="bg-verylightGreen rounded-full w-5 h-5 absolute top-0 bottom-0 right-0 left-0 m-auto"></div>
      </div>
  )
}

export default Spinner
