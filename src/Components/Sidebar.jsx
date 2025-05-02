import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@12.9.0/+esm"
import { useEffect, useState } from "react"
import '../Styles/SideBar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const cancelHover = hover('.fa-brands', (e) => {
      animate(e, { scale: 1.3 })
      return () => animate(e, { scale: 1 })
    })

    return () => cancelHover()
  }, [])

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <a href="https://www.instagram.com/justharlyss/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://wa.link/w7mpxz" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://github.com/JustHarlys" target="_blank"><i className="fa-brands fa-github"></i></a>
        <button className="toggle-btn arrow-left" onClick={toggleSidebar}>⮜</button>
      </div>

      {!isOpen && (
        <button className="toggle-btn arrow-right" onClick={toggleSidebar}>⮞</button>
      )}
    </div>
  )
}

export default Sidebar
