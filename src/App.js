import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import NavContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import  {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")); // Lazy-loaded
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")); // Lazy-loaded

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if( !this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper" role={'main'}>
                <HeaderContainer/>
                <NavContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer) }/>
                    <Route path='/dialog' render={withSuspense(DialogsContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}),
)(App)


 let AppMain = (props) => {
  return  <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
}

export default AppMain