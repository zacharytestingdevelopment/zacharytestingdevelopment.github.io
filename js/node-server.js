

function nodeCall() {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    const stripe = require('stripe')('sk_test_w1g1tpvhyXgsA5FxExXzqbSn00PBdOC8T6');

    const customer = stripe.customers.create({
        email: 'paying.user@example.com',
        source: 'tok_mastercard',
    });
   
    
}
