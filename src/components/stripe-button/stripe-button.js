import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price })  => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HI6niACi8NFbVcX30AwCDvQZNgGvdzHwM0NI15ZHJaD8e8Dho8ny9Me9Eeyk9rOI7Ams2tjKJtos0FB7IRzH2Oc00WLcdNWmN'

    const onToken = token => {
       console.log(token);
       alert('payment successful');
   }

   return(
       <StripeCheckout 
       
       label = 'Pay now'
       name= 'CRWN clothing Ltd.'
       billingAddress
       shippingAddress
       image='https://stripe.com/img/documentation/checkout/marketplace.png'
       description= {`your total is $${price}` }
       amount ={priceForStripe}
       panelLabel = 'Pay now'
       token ={onToken }
       stripeKey = {publishableKey}

       
       />

   )



} 


export default StripeCheckoutButton ;