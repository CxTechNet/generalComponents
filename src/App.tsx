import './App.css'
import Container from './components/grid/Container'
import Sidebar from './components/sidebar/sidebar'
function App() {

  return (
    <>
      <Sidebar />
      <Container
        numColumns={4}
        numRows={3}
        columnSize="1fr"
        rowSize="200px"
      />
    </>
  )
}

export default App
