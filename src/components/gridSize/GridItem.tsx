import React from 'react';
import './gridItem.css';

interface GridItemProps {
  numRows: number;
  numColumns: number;
  children: React.ReactNode;
  maxGridColumns: number;
}

const GridItem: React.FC<GridItemProps> = ({ numRows, numColumns, children, maxGridColumns }) => {
    const width = Math.min(numColumns, maxGridColumns);
  return (
    <div
      className="grid-item"
      style={{
        gridRow: `span ${numRows}`,
        gridColumn: `span ${width}`,
        minWidth: '200px',
      }}
    >
      <div className="grid-item-background"></div>
      <div className="grid-item-content">{children}</div>
    </div>
  );
};

export default GridItem;
