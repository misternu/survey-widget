import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './containers/AppContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'))
// registerServiceWorker();
