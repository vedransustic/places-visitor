import './styles/App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import MainNavigation from "./components/Navigation/MainNavigation";
import Users from "./pages/Users";
import NewPlace from "./pages/NewPlace"
import UserPlaces from "./pages/UserPlaces";

const App = () => {
  return (
      <>
          <MainNavigation/>
          <main>
              <Switch>
                  <Route exact path="/"><Users/></Route>
                  <Route exact path="/:uid/places"><UserPlaces/></Route>
                  <Route exact path="/places/new"><NewPlace/></Route>
                  <Redirect to="/"/>
              </Switch>
          </main>

      </>

  )
}

export default App;
