import {extension, Grid, Button, Text} from '@shopify/ui-extensions/checkout';
export default extension('purchase.checkout.cart-line-list.render-after', (root) => {

  const text = root.createComponent(Text, {size: 'medium'}, 'Happy with your shopping experience with us? Please leave us a review.');

  const tPLink = root.createComponent(
    Button,
    {to: 'https://uk.trustpilot.com/'},
    'TrustPilot',
  );

  const reviewsLink = root.createComponent(
    Button,
    {to: 'https://reviews.io/'},
    'Reviews.io',
  );

  const grid = root.createComponent(
    Grid,
    {
      columns: ['auto', 'fauto'],
      rows: ['auto', 'auto'],
    },
    [
      text,
      tPLink,
      reviewsLink,
    ],
  );

  root.appendChild(grid);
});