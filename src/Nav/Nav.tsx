import { Link } from 'react-router-dom'
import { Search, Grid, Icon, Menu, Dropdown, Image } from 'semantic-ui-react'
import { Navigation } from './NavStyles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

const Nav = () => {
  return (
    <Navigation>
      <div className='top'>
        <Image className='eh' size='small' src='/EH_black.png' alt=''></Image>
      </div>
      <Grid className='xyz'>
        <Grid.Column computer={4} mobile={3} className='about-us-mobile1'>
          <Menu stackable borderless compact color='black'>
            <Dropdown item text='About Us' className='about-us' pointing='left'>
              <Dropdown.Menu>
                <Dropdown.Item>Our Story</Dropdown.Item>
                <Dropdown.Item>Get Involved</Dropdown.Item>
                <Dropdown.Item>More</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Shop' className='shop' pointing='left'>
              <Dropdown.Menu>
                <Dropdown.Item>Our Story</Dropdown.Item>
                <Dropdown.Item>Get Involved</Dropdown.Item>
                <Dropdown.Item>More</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>

        <Grid.Column computer={5} floated='left' mobile={4} className='search'>
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
    </Navigation>
  )
}

export default Nav
