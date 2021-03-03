import {
  Search,
  Grid,
  Header,
  Button,
  Image,
  Placeholder,
  PlaceholderLine,
  PlaceholderImage,
} from 'semantic-ui-react'
import { Main } from './MainLayoutStyles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

const MainLayout = () => {
  return (
    <Main>
      <Grid className='LLLL'>
        {/* <Grid.Row>
          <Header content='I AM Large Content' />
        </Grid.Row> */}
        <Grid.Column className='live' computer={3}>
          Lifestyle
        </Grid.Column>
        <Grid.Column className='laugh' computer={3}>
          Events
        </Grid.Column>
        <Grid.Column className='learn' computer={3}>
          Learn
        </Grid.Column>
        <Grid.Column className='love' computer={3}>
          Newsletter
        </Grid.Column>
      </Grid>

      <Grid stackable>
        <Grid.Row className='placeholder' columns={2}>
          <Grid.Column className='image'>
            <Image src='/quote.png' fluid />
          </Grid.Column>
          <Grid.Column className='text'>
            <p>
              Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
              definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne,
              his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
              ei quo vide phaedrum, vim vivendum maiestatis in.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid className='triple'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src='/organized.png' fluid />
          </Grid.Column>
          <Grid.Column>
            <Image src='/wealthy.png' fluid />
          </Grid.Column>
          <Grid.Column>
            <Image src='/high.jpeg' fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Main>
  )
}

export default MainLayout
