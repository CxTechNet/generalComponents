import './App.css';
import ContainerSize from './components/gridSize/ContainerSize';
import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(1);

  const changeActive = (id: number) => {
    setActive(active === id ? 0 : id);
  };

  const items = [
    { numRows: 2, numColumns: 6, id: 'Item 1', content: 'Conteúdo' },
    { numRows: 1, numColumns: 1, id: 'Item 2' },
    { numRows: 1, numColumns: 1, id: 'Item 3' },
    { numRows: 1, numColumns: 1, id: 'Item 4' },
    { numRows: 1, numColumns: 1, id: 'Item 5' },
    { numRows: 1, numColumns: 1, id: 'Item 6' },
    { numRows: 2, numColumns: 2, id: 'Item 7' },
    { numRows: 1, numColumns: 1, id: 'Item 8' },
    { numRows: 1, numColumns: 1, id: 'Item 9' },
    { numRows: 1, numColumns: 1, id: 'Item 10' },
    { numRows: 1, numColumns: 1, id: 'Item 11' },
    { numRows: 1, numColumns: 1, id: 'Item 12' },
  ];

  return (
    <>
      <Sidebar changeActive={changeActive} active={active} />
      <ContainerSize
        cardWidth="200"
        cardHeight="200"
        items={items}
        />
    </>
  );
}

export default App;
