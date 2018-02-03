import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
/**
 * @author 이환섭 <bestseob93@gmail.com>
 * @version V1.0
 */
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
