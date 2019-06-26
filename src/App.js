/*----------REACT IMPORTS----------*/
import React, { Component } from "react";

/*----------REACT IMPORTS----------*/
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  /*----------CONSTRUCTOR----------*/

  /*----------LIFE CYCLE METHODS----------*/

  /*----------METHODS----------*/

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

/*----------EXPORTS----------*/
export default App;
