import './App.css'
import Container from './components/grid/Container'
import Sidebar from './components/sidebar/sidebar'
import { useState } from 'react'

function App() {

  const [active, setActive] = useState(1);

  const changeActive = (id: number) => {
    if (active === id) {
      setActive(0);
      return;
    } 
    setActive(id);
  }

  return (
    <>
      <Sidebar 
        changeActive={changeActive}
        active={active}
      />
      <Container
        numColumns={4}
        numRows={3}
        columnSize="1fr"
        rowSize="250px"
      />
    </>
  )
}

export default App
