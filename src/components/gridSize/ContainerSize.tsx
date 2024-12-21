import React from 'react';
import './containerSize.css';
import GridItem from './GridItem';

interface ContainerSizeProps {
  cardWidth: string;
  cardHeight: string;
  items: { numRows: number; numColumns: number; id: string, content?: string }[];
}

const ContainerSize: React.FC<ContainerSizeProps> = ({ cardWidth, cardHeight, items }) => {
  return (
    <div
      className="container-size"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}, 1fr))`,
        gridTemplateRows: `repeat(auto-fill, minmax(${cardHeight}, auto))`,
        gridAutoRows: `minmax(${cardHeight}, auto)`,
      }}
    >
      {items.map((item) => (
        <GridItem key={item.id} numRows={item.numRows} numColumns={item.numColumns}>
          {item.content ? item.content : item.id}
        </GridItem>
      ))}
    </div>
  );
};

export default ContainerSize;
