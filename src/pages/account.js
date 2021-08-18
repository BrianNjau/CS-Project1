import React from 'react'
import {Router} from '@reach/router'
import {login, logout ,isAuthenticated, getProfile} from "../utils/auth"
import Layout from 'components/layout';
import { StickyProvider } from 'contexts/app/app.provider';
const Settings = () => <p>To Change Profile Details</p>
const Billing = () => <p>To be redirected after authentication</p>
const Home = () => <p> <a href="#logout" onClick={e =>{ 
    logout() 
    e.preventDefault()
}} > Log out</a>Account Dashboard Page </p>

 const account = () => {

    if(!isAuthenticated()){
        login();
        return <p>Redirecting to login...</p>
    }

    const user = getProfile();
    
    return (
        <>

        <pre>{JSON.stringify(user,null,2)}</pre>
   
        <Router>
        <Settings path = "/account/settings" /> 
        <Billing path ="/account/billing" />  
        <Home path ="/account/" />  

           
     </Router>
     
       
        </>
    )
}

export default account 
