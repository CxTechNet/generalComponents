interface GridItemProps {
  spanColumns?: number;
  spanRows?: number;
  children?: React.ReactNode;
  numColumns?: number;
}

const GridItem: React.FC<GridItemProps> = ({ spanColumns = 1, spanRows = 1, children, numColumns = 1 }) => {
  return (
    <div
      className={spanColumns === numColumns ? 'grid__item' : 'grid__item full-width'}
      style={{
        gridColumn: `span ${spanColumns}`,
        gridRow: `span ${spanRows}`,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
