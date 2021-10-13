
import Nav from "./Navbar";
import {connect} from "react-redux";
import navReducer, {setBestFriends} from "../../redux/navReducer";

// const NavContainer = (props) => {
//
//
//
//
//     return (
//         <storeContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 return (
//                     <Nav navPage={state} />
//                 )
//             }
//             }
//         </storeContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {

  return {
      navPage:state.navReducer
  }
}

const NavContainer = connect(mapStateToProps,{setBestFriends})(Nav)

export default NavContainer;