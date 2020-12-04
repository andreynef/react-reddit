import React from "react";

export function usePortalZone() {//хук возвращающий <div id="portal_root"/>

  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(()=>{//единственное что можно возвращать из useEffect это () => void
    let portalZone = document.getElementById('portal_zone') as HTMLDivElement;

    if (!portalZone){//если нет то создать
      portalZone = document.createElement('div');
      portalZone.setAttribute('id', 'portal_zone');
      document.body.appendChild(portalZone)
    }
    setPortalElement(portalZone)
  },[])

  return [portalElement]//всегда возвр ноду
}

// somewhere in component

// function Portal() {
//   const portalNode = usePortalZone();
//   ReactDOM.createPortal(..., portalNode)
// }


// const node = document.querySelector('#modal_root');//указываем место в DOM где будет отрендерен компонент
// if(!node) return null;//исправление типизации node|null на просто null.
