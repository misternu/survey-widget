import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './main'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'))
// registerServiceWorker();
