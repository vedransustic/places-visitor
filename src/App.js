import './styles/App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import MainNavigation from "./components/Navigation/MainNavigation";
import Users from "./pages/Users";
import NewPlaces from "./pages/NewPlaces"
import UserPlaces from "./pages/UserPlaces";

const App = () => {
  return (
      <>
          <MainNavigation/>
          <main>
              <Switch>
                  <Route exact path="/"><Users/></Route>
                  <Route exact path="/:uid/places"><UserPlaces/></Route>
                  <Route exact path="/places/new"><NewPlaces/></Route>
                  <Redirect to="/"/>
              </Switch>
          </main>

      </>

  )
}

export default App;
