import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import axios from 'axios';


function Example (){

    const [channels, setChannels] = useState([]);
    const [update, setUpdate] = useState(0);
    const [errorName, setErrorName] = useState("");
    const [channel, setChannel] = useState();
    
    
    console.log('looping');
    
    const handleClick = () => {
        let res = prompt('write name of channel'); //string
        //post
           axios({
                method: "POST",
                url: '/',
                data: {
                    room_hash: res,
                    room_name: res,
                }
            })
            .catch(errors => {
                setErrorName(errors.response.data.errors['room_name']);
            });
        //update
           axios.get('/channel').then(response => {
              setChannels(response.data);
          });
        };
        
    const selectChannel = async(room_hash) => {
       await axios({
           method: "POST",
           url: "/rooms",
           data: {
               room_hash: room_hash,
           }
       }).then((response) => {
           //because of key 0 will be returned always
           setChannel(response.data[0]);
          // setChannel(response.data[1]);
       })
       .catch(error => {
           console.log(error.message);
       });
    };
       
    useEffect(() => {
           const getRoom = async() => {
           const res = await axios.get('/channel');
           await setChannels(res.data);
        };
        getRoom();
    },[]);
    
      //  console.log(channel);
        
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{flex: 0.3}}>
               <button
               onClick={handleClick}
               >+</button>
               {errorName && <div>{errorName}</div>}
               <div id="channel">
                    {channels.map((channel, id) => (
                      <div key={id}>
                         <div
                         style={{fontSize: 30, cursor: 'pointer',}}
                         onClick={() => selectChannel(channel.room_hash)}
                         >
                        {channel.room_name}
                         </div>
                      </div>
                     ))}
               </div>
          </div>
          <div style={{flex: 0.6}}>
             {channel && (
                 <div>
                   <h1>{channel.room_name}</h1>
                 </div>
                 )
             }
          </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
