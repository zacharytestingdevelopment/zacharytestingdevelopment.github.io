//const express = require('express')
//const app = express()
const stripe = require('stripe')('sk_test_w1g1tpvhyXgsA5FxExXzqbSn00PBdOC8T6');

function nodeCall() {
    //const stripe = require('stripe')('sk_test_w1g1tpvhyXgsA5FxExXzqbSn00PBdOC8T6');
    console.log(stripe);
    const customer = stripe.customers.create({
        email: 'paying.user@example.com',
        source: 'tok_mastercard',
    });
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys

    /* 
 
     
     console.log("server is running");
    
     */
}