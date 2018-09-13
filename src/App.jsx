import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { rootRouters } from '@/router/router'

/**
 * 组件 以及 复合组件的应用
 */
class App extends React.Component {
  render() {
    return(
      <div className='App'>
          <Router>
            <Switch>
              {
                rootRouters.map((route,index) => {
                  return(
                    <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}/>
                  )
                })
              }
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App; 