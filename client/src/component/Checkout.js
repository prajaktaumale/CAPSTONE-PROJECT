import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Success from '../component/Success'
import Error from '../component/Error'
import Loading from '../component/Loading'

export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))

    }

    return (
        <div>
            {/* stripe is used to take a payment on test mode */}
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51MGzYMSGepRmvvay2YlRnEbjRB7M4aLnfzFswTFLCSt1R0fSxZR7kTfRGYmKabK8tlSGASRs4eOjKTH5lAygg1g000LwiZCJh2'
                currency='INR'
            >

                    {loading && (<Loading />)}
                    {error && (<Error error='something went wrong'/>)}
                    {success && (<Success success='Your Order Placed Successfully'/>)}

                <button style={{ backgroundColor: 'red', fontSize: '20px' }} className='btn'>Checkout</button>
            </StripeCheckout>
        </div>
    )
}