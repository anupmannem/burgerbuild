/*----------REACT IMPORTS----------*/
import React, { Component } from "react";

/*----------FILE IMPORTS----------*/
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  /*----------CONSTRUCTOR----------*/

  /*----------LIFE CYCLE METHODS----------*/

  /*----------METHODS----------*/

  render() {
    return (
      /*----------Components----------*/
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

/*----------EXPORTS----------*/
export default BurgerBuilder;
