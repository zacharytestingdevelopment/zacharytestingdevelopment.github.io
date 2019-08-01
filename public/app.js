//const keyPublishable = process.env.PUBLISHABLE_KEY;
//const keySecret = process.env.SECRET_KEY;


const express = require("express");
const stripe = require("stripe")('pk_test_F28EtSz9EsfCMzKlTGT3lqfv00oWpXQ3E4');
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
    let amount = 500;

    stripe.customers.create({
        email: req.body.email,
        card: req.body.id
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.send(charge))
        .catch(err => {
            console.log("Error:", err);
            res.status(500).send({ error: "Purchase Failed" });
        });
});

app.listen(8000);
