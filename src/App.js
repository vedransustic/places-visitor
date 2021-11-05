import './styles/App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Users from "./pages/users/Users";
import NewStories from "./pages/stories/NewStories"

const App = () => {
  return (
      <>
          <Switch>
              <Route exact path="/"><Users/></Route>
              <Route exact path="/stories/new"><NewStories/></Route>
              <Redirect to="/"/>
          </Switch>
      </>
  )
}

export default App;
