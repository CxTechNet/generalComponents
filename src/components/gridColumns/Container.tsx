import React from 'react';
import './grid.css';
import GridItem from './GridItem';

interface GridProps {
  numColumns: number;
  numRows: number;
  columnSize: string;
  rowSize: string;
}

const ContainerColumns: React.FC<GridProps> = ({ numColumns, numRows, columnSize, rowSize }) => {
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
      {/* Passando minWidth para os GridItems específicos */}
      <GridItem spanColumns={2}>
        <div className="grid__item">1</div>
      </GridItem>
      <GridItem />
      <GridItem />
      <GridItem spanColumns={5} spanRows={2} />
      <GridItem />
      <GridItem />
    </div>
  );
};

export default ContainerColumns;
