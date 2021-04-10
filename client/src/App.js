import React, { useEffect, lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import HomePage from './pages/homepage/homepage';
//import ShopPage from './pages/shop/shop';
//import AuthPage from  './pages/auth/auth';
//import CheckoutPage from './pages/checkout/checkout';
//import SimpleSlider from './components/slick-carousel/carousel';

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { GlobalStyle } from "./global.styles";
import Burger from "./components/animated-burger/animatedBurger";
import Menu from "./components/Menu/menu";
import AnimatedBar from "./components/lottie/animated-bar";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const SimpleSlider = lazy(() => import("./components/slick-carousel/carousel"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const AuthPage = lazy(() => import("./pages/auth/auth"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />

      <GlobalStyle />

      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SimpleSlider />
                {/* <AnimatedBar /> */}
                {/* <HomePage /> */}
              </React.Fragment>
            )}
          />

          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
