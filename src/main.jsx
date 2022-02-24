import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './style/global.scss'

import Amplify from 'aws-amplify'
import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react'

import Routes from './router'
import amplifyConfig from './config/amplify'

Amplify.configure(amplifyConfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AmplifyProvider>
        <Authenticator.Provider>
          <Routes />
        </Authenticator.Provider>
      </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
