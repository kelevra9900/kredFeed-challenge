import FormView from "pages/FormView";
import ProfileView from "pages/Profile.View";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <ProfileView />
          </Route>
          <Route path="/">
            <FormView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}