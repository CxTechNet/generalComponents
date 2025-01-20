import './App.css';
import ContainerSize from './components/gridSize/ContainerSize';
import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(1);


  const changeActive = (id: number) => {
    setActive(active === id ? 0 : id);
  };

  const GridItems = [
    { numRows: 2, numColumns: 2, id: 'Item 1', content: 'Conteúdo' },
    { numRows: 1, numColumns: 1, id: 'Item 2' },
    { numRows: 1, numColumns: 1, id: 'Item 3' },
    { numRows: 1, numColumns: 1, id: 'Item 4' },
    { numRows: 2, numColumns: 1, id: 'Item 5' },
    { numRows: 1, numColumns: 1, id: 'Item 6' },
    { numRows: 2, numColumns: 2, id: 'Item 7' },
    { numRows: 1, numColumns: 1, id: 'Item 8' },
    { numRows: 1, numColumns: 1, id: 'Item 9' },
    { numRows: 1, numColumns: 2, id: 'Item 10' },
    { numRows: 1, numColumns: 1, id: 'Item 11' },
    { numRows: 1, numColumns: 1, id: 'Item 12' },
  ];

  const sideItems = [
    { id: 1, name: 'Home', link: '/', icon: 'fa fa-home' },
    { id: 2, name: 'Search', link: '/search', icon: 'fa fa-search' },
    { id: 3, name: 'Settings', link: '/settings', icon: 'fa fa-cog' },
  ]

  return (
    <>
      <Sidebar changeActive={changeActive} active={active} items={sideItems}/>
      <ContainerSize
        cardWidth="200"
        cardHeight="200"
        items={GridItems}
        />
    </>
  );
}

export default App;
