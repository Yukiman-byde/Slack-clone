import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {ChannelAction} from '../redux/ChannelSlice';

//title => roomName
//roomHash => roomHash

function SideBarOption({ title, Icon, addChannelOption, roomHash }) {
  const dispatch = useDispatch();
  
  const addChannel = () => {
    const channelName = prompt("add a channel name");
    console.log("エラー");
    
    if(channelName){
      const data = {
        'room_hash': channelName,
        'room_name': channelName,
      };
      
      axios.post('/slack', data).then((response) => {
        //console.log(response.data);
      });
      dispatch(ChannelAction.showRoom({
        roomName: channelName,
      }));
    }
  };
  

  const selectChannel = () => {
      dispatch(ChannelAction.showRoom({
        roomName: title,
        roomHash: roomHash,
      }));
  };

  return (
    <SideBarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
       {Icon && <Icon style={{fontSize: 18}}/>}
       {Icon ? (
         <h4>{title}</h4>
       ): (
         <SideBarOptionChannel>
              <h4><span>#</span>{title}</h4>
         </SideBarOptionChannel>
       )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  text-align: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 0;
    margin-left: 6px;
  }

  h3 > span {
    padding: 15px;
  }
`;

const SideBarOptionChannel = styled.div``