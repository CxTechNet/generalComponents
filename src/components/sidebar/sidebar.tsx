import './sidebar.css'
import logo from './logo.svg'

interface SidebarProps {
  active: number;
  changeActive: (id: number) => void;
  items: { id: number, name: string, link: string, icon: string }[]
}
function Sidebar({active, changeActive, items}: SidebarProps) {



  return (
    <>
<div className="sidebar">
  <div className="sidebar__background"></div>
  <div className="sidebar__content">
    <div className="sidebar__logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="sidebar__menu">
      {items.map((item) => (
        <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => changeActive(item.id)}>
          <i className={item.icon}></i>
        </button>
      ))}
    </div>
    <div className="sidebar__footer">
      <button onClick={() => changeActive(0)}>
        <i className="fa fa-user"></i>
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default Sidebar
