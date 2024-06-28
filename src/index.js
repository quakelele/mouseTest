import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import './18n'
import App from './App'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <Suspense fallback={<div>Loading</div>}>
         <App />
      </Suspense>
   </Provider>,
)
