import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51KuZCiB49QkQyOoukuKh6bGkZQIbccK82stMRSX3FujCoT91j8SJDpJVzm9gk8o4A2TMT4xLnMNjkRr1dwl1eyH000xBzzr25i');
  }

  return stripePromise;
}

export default getStripe;