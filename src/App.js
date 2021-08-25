import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import navReducer from "./redux/navReducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>

                <Nav navPage = { props.state.navReducer} />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render = { () => <Profile store={props.store}/> }/>

                    <Route path='/dialog' render = { () => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news' render = { () => <News /> }/>
                    <Route path='/settings' component ={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
