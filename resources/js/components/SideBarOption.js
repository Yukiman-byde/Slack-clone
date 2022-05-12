import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {ChannelAction} from '../redux/ChannelSlice';

function SideBarOption({ name, Icon, addChannelOption }) {
  const dispatch = useDispatch();
  
  const addChannel = () => {
    const roomName = prompt("add a channel name");

    if(roomName){
      const data = {  
        'room_name': roomName,  
      };
      
      axios.post('/slack', data).catch(error => {
        console.log(error.message);
      });
      dispatch(ChannelAction.showRoom({
        roomName: roomName,
      }));
    }
  };
  

  const selectChannel = () => {
      dispatch(ChannelAction.showRoom({
        roomName: name,
      }));
  };

  return (
    <SideBarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
       {Icon && <Icon style={{fontSize: 18}}/>}
       {Icon ? (
         <h4>{name}</h4>
       ): (
         <SideBarOptionChannel>
              <h4><span>#</span>{name}</h4>
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