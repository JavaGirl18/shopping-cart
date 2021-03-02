import { Search, Grid, Icon, Menu, Dropdown } from 'semantic-ui-react'
import { Main } from './MainLayoutStyles'
import { Link } from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

const MainLayout = () => {
  return (
    <Main>
      <Grid style={{ justifyContent: 'center', alignContent: 'center' }}>
        <Grid.Column className='xyz'>
          <Menu horizontal style={{ height: 50 }}>
            <Dropdown item text='About Us'>
              <Dropdown.Menu>
                <Dropdown.Item>Our Story</Dropdown.Item>
                <Dropdown.Item>Get Involved</Dropdown.Item>
                <Dropdown.Item>More</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu>
              <Dropdown item text='Shop'>
                <Dropdown.Menu>
                  <Dropdown.Item>Our Story</Dropdown.Item>
                  <Dropdown.Item>Get Involved</Dropdown.Item>
                  <Dropdown.Item>More</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu>
              <Grid>
                <Grid.Column className='xyz'>
                  <Search />
                </Grid.Column>
                <Grid.Column computer={6} floated='right' mobile='4'>
                  <Icon name='instagram' size='big' />
                  <Icon name='facebook' size='big' />
                  <Icon name='twitter' size='big' />
                  {/* </Grid.Column>
                <Grid.Column mobile='2'> */}
                  <button>
                    <Badge color='error'>
                      <AddShoppingCartIcon />
                    </Badge>
                  </button>
                </Grid.Column>
              </Grid>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    </Main>
  )
}

export default MainLayout
