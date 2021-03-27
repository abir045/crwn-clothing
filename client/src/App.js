import React, {useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';




import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import AuthPage from  './pages/auth/auth';
import CheckoutPage from './pages/checkout/checkout';
import {checkUserSession} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';


import { GlobalStyle } from './global.styles';

import SimpleSlider from './components/slick-carousel/carousel';
import ReactPageScroller from 'react-page-scroller';


const App = ({checkUserSession, currentUser}) => {

   useEffect(() => {
     checkUserSession();
   },[checkUserSession]);

      return(
        
     <div>
      
      <GlobalStyle/>
      
      <Header />
  
      <Switch> 
  <Route exact path='/'
      render={() =>
 
  <React.Fragment>
  <ReactPageScroller>
    <SimpleSlider/>
    <HomePage/>
   </ReactPageScroller >
  </React.Fragment>

}  /> 
    
     <Route path='/shop' component={ShopPage}/>
     <Route exact path='/checkout' component={CheckoutPage} />
    <Route exact path='/signin'
    
       render={()=>
         currentUser?(
       <Redirect to='/' />
       ): (
       <AuthPage/>
       )
       } />
       
       
     </Switch>
     
    
     
    </div> 
    
   
  )

  
}

 const mapStateToProps = createStructuredSelector ({
   currentUser : selectCurrentUser
 

 })

 const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
 })


export default connect(mapStateToProps,mapDispatchToProps)(App);
