import { Search, Grid, Icon, Menu, Dropdown } from 'semantic-ui-react'
import { Main } from './MainLayoutStyles'
import { Link } from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

const MainLayout = () => {
  return (
    <Main>
      <Grid>
        <Grid.Column className='xyz' computer={4}>
          <Dropdown item text='About Us'>
            <Dropdown.Menu>
              <Dropdown.Item>Our Story</Dropdown.Item>
              <Dropdown.Item>Get Involved</Dropdown.Item>
              <Dropdown.Item>More</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Shop'>
            <Dropdown.Menu>
              <Dropdown.Item>Our Story</Dropdown.Item>
              <Dropdown.Item>Get Involved</Dropdown.Item>
              <Dropdown.Item>More</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column className='xyz' computer={5} floated='left' mobile={4}>
          <Search />
        </Grid.Column>
        <Grid.Column computer={3} mobile={2} floated='right'>
          <div>
            <Icon name='instagram' size='big' />
            <Icon name='facebook' size='big' />
            <Icon name='twitter' size='big' />

            <button>
              <Badge color='error'>
                <AddShoppingCartIcon />
              </Badge>
            </button>
          </div>
        </Grid.Column>
      </Grid>
    </Main>
  )
}

export default MainLayout
