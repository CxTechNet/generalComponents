import React, {useState, useEffect} from 'react';
import './containerSize.css';
import GridItem from './GridItem';

interface ContainerSizeProps {
  cardWidth: string;
  cardHeight: string;
  items: { numRows: number; numColumns: number; id: string, content?: string }[];
}

const ContainerSize: React.FC<ContainerSizeProps> = ({ cardWidth, cardHeight, items }) => {
    const [vw, setVw] = useState<number>(0);    
      // Hook para atualizar o valor de vw sempre que a janela é redimensionada
      useEffect(() => {
        const updateVw = () => {
          // Captura a largura da janela e calcula 1vw
          const newVw = window.innerWidth;
          setVw(newVw);
        };
    
        // Atualiza o valor de vw quando o componente for montado ou a janela for redimensionada
        updateVw();
    
        // Define o ouvinte de redimensionamento da janela
        window.addEventListener('resize', updateVw);
    
        // Limpeza do ouvinte de evento
        return () => {
          window.removeEventListener('resize', updateVw);
        };
      }, []);
    
      // Calcula o valor máximo para gridColumn com base no vw
      const maxGridColumns = Math.floor(vw / Number(cardWidth)) - 1;
  return (
    <div
      className="container-size"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}px, 1fr))`,
        gridTemplateRows: `repeat(auto-fill, minmax(${cardHeight}px, auto))`,
        gridAutoRows: `minmax(${cardHeight}px, auto)`,
      }}
    >
      {items.map((item) => (
        <GridItem key={item.id} numRows={item.numRows} numColumns={item.numColumns} maxGridColumns={maxGridColumns}>
          {item.content ? item.content : item.id}
        </GridItem>
      ))}
    </div>
  );
};

export default ContainerSize;
