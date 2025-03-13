import { useState, useEffect, useRef, ReactNode, Children, cloneElement } from "react";

const PAGE_HEIGHT = 400; // Altura máxima do conteúdo por página

interface BookPageProps {
  children: ReactNode;
}

const BookPage: React.FC<BookPageProps> = ({ children }) => {
  const [pages, setPages] = useState<ReactNode[][]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!measureRef.current) return;
    
    const childArray = Children.toArray(children) as ReactNode[];
    const tempPages: ReactNode[][] = [];
    let tempPage: ReactNode[] = [];
    let currentHeight = 0;
    
    childArray.forEach((child) => {
      if (!measureRef.current) return;
      
      measureRef.current.innerHTML = "";
      const element = cloneElement(<div className="invisible">{child}</div>);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = element.props.children as string;
      measureRef.current.appendChild(tempDiv);
      
      const elementHeight = tempDiv.clientHeight;
      
      if (currentHeight + elementHeight > PAGE_HEIGHT) {
        tempPages.push(tempPage);
        tempPage = [];
        currentHeight = 0;
      }
      tempPage.push(child);
      currentHeight += elementHeight;
    });
    
    if (tempPage.length) tempPages.push(tempPage);
    setPages(tempPages);
  }, [children]);

  return (
    <>
      <div ref={measureRef} className="absolute invisible h-0 w-0 overflow-hidden"></div>
      <div className="flex gap-4 overflow-x-auto">
        {pages.map((page, index) => (
          <div key={index} className="w-80 h-[400px] p-4 border shadow-md bg-white overflow-hidden">
            <div ref={index === 0 ? containerRef : null} className="flex flex-col">
              {page}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookPage;
