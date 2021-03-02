import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Store from './Store/Store'
import Nav from './Nav/Nav'
import Main from './Main/MainLayout'
import { Wrapper } from './App.styles'

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/store' component={Store}></Route>
        </Switch>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
