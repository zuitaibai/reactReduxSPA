import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Layouts from '../common/container/layout'
import './index.less'
import DevTools from './devTools'
import configureStore from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

const history = createHistory()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
          {Layouts}
        {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)