import React from 'react';
import './gridItem.css';

interface GridItemProps {
  numRows: number;
  numColumns: number;
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ numRows, numColumns, children }) => {
  return (
    <div
      className="grid-item"
      style={{
        gridRow: `span ${numRows}`,
        gridColumn: `span ${numColumns}`,
      }}
    >
      <div className="grid-item-background"></div>
      <div className="grid-item-content">{children}</div>
    </div>
  );
};

export default GridItem;
