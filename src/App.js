// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/semantics/Nav";
import Header from "./Components/semantics/Header";
import Main from "./Components/semantics/Main";
import Footer from "./Components/semantics/Footer";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;

// // App.js

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./Components/layout/Footer";
// import Main from "./Components/layout/Main";
// import Nav from "./Components/layout/Nav";
// import BookingPage from "./pages/BookingPage"; // Import your BookingPage component

// function App() {
//   return (
//     <Router>
//       <>
//         <Nav />
//         <Switch>
//           <Route path="/booking" component={BookingPage} />
//           <Route path="/" exact component={Main} />
//         </Switch>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;
