export default function(options) {
    (function(w, d, s, id, cb) {
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
  
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://svcapi.gigagenie.ai/sdk/v1.0/js/gigagenie.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      })(window, document, 'script', 'geine-sdk', () => {
        this.gigagenie = global.gigagenie;
        this.initGeine();
      });
}