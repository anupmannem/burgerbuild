/*----------REACT IMPORTS----------*/
import React from "react";

/*----------FILE IMPORTS----------*/
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

/*----------EXPORTS----------*/
export default layout;
