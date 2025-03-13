export function irPara(destino: string): void {
    const element = document.getElementById(destino);
    if (element) {
      element.scrollIntoView();
    }
  }