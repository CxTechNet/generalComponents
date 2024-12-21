import React from 'react';
import './grid.css';
import GridItem from './GridItem';

interface GridProps {
  numColumns: number;
  numRows: number;
  columnSize: string;
  rowSize: string;
}

const Container: React.FC<GridProps> = ({ numColumns, numRows, columnSize, rowSize }) => {
  const gridTemplateColumns = `repeat(${numColumns}, ${columnSize})`;
  const gridTemplateRows = `repeat(${numRows}, ${rowSize})`;

  return (
    <div
      className="grid__container"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        gridAutoRows: rowSize,
      }}
    >
      <GridItem spanColumns={2} numColumns={numColumns}>
        <div className="grid__item">1</div>
      </GridItem >
      <GridItem numColumns={numColumns}/>
      <GridItem />
      <GridItem spanColumns={5} spanRows={2} numColumns={numColumns}/>
      <GridItem numColumns={numColumns}/>
      <GridItem numColumns={numColumns}/>
    </div>
  );
};

export default Container;
