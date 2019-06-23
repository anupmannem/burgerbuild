/*----------REACT IMPORTS----------*/
import React, { Component } from "react";
import PropTypes from "prop-types";

/*----------REACT IMPORTS----------*/
import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  /*----------CONSTRUCTOR----------*/

  /*----------LIFE CYCLE METHODS----------*/

  /*----------METHODS----------*/

  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;

      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;

      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;

      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;

      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;

      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;

      default:
        ingredient = null;
    }

    return ingredient;
  }
}

/*----------PROPS VALIDATION----------*/
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

/*----------EXPORTS----------*/
export default BurgerIngredient;
