import "./App.css";
import { data } from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Adress from "./components/Adress";


function App() {
  return (
    <Router>
      <Nav/>
      {/* <Adress/> */}
        <Switch>
          {data.map((obj, id) => {
            return (
              <Route exact={obj.exact} key={id} path={obj.route} children={<obj.component />} />
            );
          })}
          </Switch>
    </Router>
  );
}
export default App;