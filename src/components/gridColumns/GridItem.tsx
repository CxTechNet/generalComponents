import { useEffect, useState } from 'react';

interface GridItemProps {
  spanColumns?: number;
  spanRows?: number;
  children?: React.ReactNode;
  numColumns?: number;
}

const GridItem: React.FC<GridItemProps> = ({ spanColumns = 1, spanRows = 1, children, numColumns = 1 }) => {
  const [vw, setVw] = useState<number>(0);

  // Hook para atualizar o valor de vw sempre que a janela é redimensionada
  useEffect(() => {
    const updateVw = () => {
      // Captura a largura da janela e calcula 1vw
      const newVw = window.innerWidth / 100;
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
  const maxGridColumns = Math.min(vw / 250, numColumns);

  return (
    <div
      className={spanColumns === numColumns ? 'grid__item' : 'grid__item full-width'}
      style={{
        gridColumn: `span ${Math.min(spanColumns, maxGridColumns)}`, // Aplica o valor máximo calculado
        gridRow: `span ${spanRows}`,
      }}
    >
      <div className="grid__background"></div>
      <div className="grid__content">{children}</div>
      {children}
    </div>
  );
};

export default GridItem;
