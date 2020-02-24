import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WCOooReVxwqw5YqvaEE1g3es';
  const onToken = token => {
    console.log(token);
    alert('Payment Sccesful');
  }
  return (
    <StripeCheckOut
      label='Pay Now'
      name='Ecommerce Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;