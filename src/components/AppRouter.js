import React, { useContext } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import { privateRoutes } from '../routes'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..'


const AppRouter = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth) 
  
  console.log(user)
  return  user ?
    (
   <Switch>
      {privateRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact={true}/>
      )}
      <Redirect to={CHAT_ROUTE}/>
   </Switch>
    )
    :
    (
        <Switch>
             {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
}

export default AppRouter