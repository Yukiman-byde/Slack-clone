import React from 'react';
import ReactDOM from 'react-dom';


function Example (){
        
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
         <h1>Example Component</h1>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
