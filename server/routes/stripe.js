const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51JvxOVSCwMCCKdbetV5JcQ9kOciBV1MyrLZFh1QyKfz9GR8ygLEXxSLvGGXiRsLmzhzWEXh38CIzNQg0I9SQ412T00j2fM6m2Z');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;