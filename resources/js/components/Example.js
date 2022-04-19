import React, {useState, useRef, useEffect} from 'react';
import Room from './Room';
import App from './App';
import ReactDOM from 'react-dom';
import axios from 'axios';


function Example (){
      //  console.log(channel);
        
    return (
       <>
         <App />
       </>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
