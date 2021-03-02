import { Divider } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { CartItemType } from '../Types/CartItemTypes'
import Item from '../Item/Item'
import { Wrapper } from './CartItem.styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

type Props = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  // <Wrapper>
  //   <div>
  //     <img src={item.image} alt={item.title} />
  //     <h3>{item.title}</h3>
  //     <div className='information'>
  //       <p>Price: ${item.price}</p>
  //       <p>QTY</p>
  //       <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
  //     </div>
  //     <div className='buttons'>
  //       <Button
  //         size='small'
  //         disableElevation
  //         variant='contained'
  //         onClick={() => removeFromCart(item.id)}
  //       >
  //         -
  //       </Button>

  //       <p>{item.amount}</p>

  //       <Button
  //         size='small'
  //         disableElevation
  //         variant='contained'
  //         onClick={() => addToCart(item)}
  //       >
  //         +
  //       </Button>
  //     </div>
  //   </div>
  // </Wrapper>
  <Wrapper>
    {/* <Grid>
      <Grid item xs={6}> */}
    <TableContainer component={Paper} className='table'>
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell component='th'>Item</TableCell>
            <TableCell component='th'></TableCell>
            <TableCell component='th'>Size</TableCell>
            <TableCell component='th'>QTY</TableCell>
            <TableCell component='th'>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              <img
                style={{ height: '50px' }}
                src={item.image}
                alt={item.title}
              />
            </TableCell>
            <TableCell component='th' scope='row'>
              <p>{item.title}</p>
            </TableCell>
            <TableCell component='th' scope='row'>
              <p>?</p>
            </TableCell>
            <TableCell component='th' scope='row'>
              <p>{item.amount}</p>
            </TableCell>
            <TableCell component='th' scope='row'>
              <p>{item.price}</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button
                size='small'
                disableElevation
                variant='outlined'
                onClick={() => addToCart(item)}
              >
                Add
              </Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Button
                component='button'
                size='small'
                disableElevation
                variant='outlined'
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {/* </Grid>
    </Grid> */}
  </Wrapper>
)

export default CartItem
