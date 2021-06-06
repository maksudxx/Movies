import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";  //hay que hacer npm install para poder usar (ver documentacion)
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <Router>
      <header>
         <NavBar/>
      </header>
      <main>
      <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
