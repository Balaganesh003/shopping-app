require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SCERET_KEY);
exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      payment_method_types: ['card'],
      description: 'Software development services',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    console.log({ stripe });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
