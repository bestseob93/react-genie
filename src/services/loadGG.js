module.exports = function(component) {
  (function(d, s, id, cb) {
    const element = d.getElementsByTagName('style')[0];
    const fjs = element;
    let js = element;

    js = d.createElement(s);
    js.id = id;
    js.src = 'https://svcapi.gigagenie.ai/sdk/v1.0/js/gigagenie.js';
    fjs.parentNode.insertBefore(js, fjs);
    js.onload = cb;
  })(document, 'script', 'sdk', function() {
    component.gigagenie = global.gigagenie;
    component.initGenie();
  });
}
