import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import AuthPage from  './pages/auth/auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser : null
    }

  }

  unsubscribeFromAuth = null



  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        
        const userRef =  await createUserProfileDocument(userAuth)

        userRef.onSnapshot(Snapshot=>{
          this.setState(
            {
            currentUser: {
              id: Snapshot.id,
              ...Snapshot.data()

            }
          })
            
        });
        
      }
      this.setState({currentUser:userAuth})
    
      
     })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
      return(
     <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={AuthPage} />
     
      </Switch>
       
   
    </div> 
  )

  }

  

}
 

export default App;
