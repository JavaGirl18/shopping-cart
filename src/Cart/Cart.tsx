import CartItem from '../CartItem/CartItem'

import { Wrapper } from './Cart.styles'

import { CartItemType } from '../Types/CartItemTypes'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
type Props = {
  cartItems: CartItemType[]
  addToCart: (clickItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((i: number, item) => i + item.amount * item.price, 0)

  return (
    <Wrapper>
      <div>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items in the cart</p> : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className='total'>
          <p> Total: </p>
          <p>${calculateTotal(cartItems).toFixed(2)}</p>
        </div>
        <Button
          component='div'
          className='checkout'
          disableElevation
          variant='outlined'
          onClick={() => console.log('checking out')}
        >
          Checkout
        </Button>
      </div>
    </Wrapper>
  )
}

export default Cart
