import "./App.css";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Alumni from "./Pages/Alumni";
import Campus from "./Pages/Campus";
import Certification from "./Pages/Certification";

import Forum from "./Pages/Forum";
import MemReg from "./Pages/MemReg";
import Testimonial from "./Pages/Testimonials";
import Complaints from "./Pages/Complaints";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
<Route exact path="/" component={Home }></Route>
<Route exact path="/about" component={About }></Route>
<Route exact path="/alumni" component={Alumni}></Route>
<Route exact path="/complaints" component={Complaints }></Route>
<Route exact path="/member-registration" component={MemReg}></Route>
<Route exact path="/campus" component={Campus }></Route>
<Route exact path="/certification" component={Certification }></Route>
<Route exact path="/forum" component={Forum }></Route>
<Route exact path="/testimonial" component={Testimonial }></Route>

</Switch>
      </Router>
    </div>
  );
}

export default App;
