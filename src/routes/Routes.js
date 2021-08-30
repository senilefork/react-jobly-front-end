import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../home/Homepage";
import SignupForm from "../signup/SignupForm";
import LoginForm from "../login/LoginForm";
import Companies from "../companies/Companies";
import Jobs from "../jobs/Jobs";
import Profile from "../profile/Profile";
import CompanyJobList from "../companies/CompanyJobList";

function Routes({ login, signup, apply }){
    return(
        <div>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/signup">
              <SignupForm signup={signup} />
            </Route>
            <Route exact path="/login">
              <LoginForm login={login}/>
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/companies/:handle">
              <CompanyJobList />
            </Route>
            <Route exact path="/jobs" >
              <Jobs apply={apply} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
    )
}

export default Routes;