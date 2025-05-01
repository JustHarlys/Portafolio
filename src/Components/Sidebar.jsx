import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@12.9.0/+esm"
import { useEffect } from "react"
import '../Styles/SideBar.css'

function Sidebar() {


  useEffect(() => {

    const cancelHover = hover('.fa-brands', (e) => {
      animate(e, {scale: 1.3 })
      return () => animate(e, {scale: 1} )
    })

    return () => cancelHover();

  }, [])

  return (
    <>

    <div className="sidebar">
      <a href="https://www.instagram.com/justharlyss/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://wa.link/w7mpxz" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
      <a href="https://github.com/JustHarlys" target="_blank"><i className="fa-brands fa-github"></i></a>
    </div>

    </>
  )
}

export default Sidebar 