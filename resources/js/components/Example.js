import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import App from './App';
import Header from './Header';
import styled from 'styled-components';
import SideBar from './SideBar';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Comment from './Comment'


function Example (){
    return (
    <div>
         <Provider store={store}>
              <Header /> 
              <AppBody>
                <SideBar />
                <Comment />
              </AppBody>
         </Provider>
    </div>
    );
}

export default Example;

const AppBody = styled.div`
    display: flex;
    min-height: 100vh;
    height: auto;
    overflow: scroll;
`;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
