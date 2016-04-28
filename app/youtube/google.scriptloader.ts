export class ScriptLoader {
  constructor(){}

  loadScript(window, url, fnString:string, winObject:string){
    return new Promise((resolve) => {
      window[fnString] = (ev) => {        
        resolve(window[winObject]);
      }
      this.processScript(url);
    });
  }

  processScript(url){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
