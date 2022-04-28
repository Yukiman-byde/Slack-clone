import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ChatZone(){
  const name = useSelector(state => state.channel?.roomName);
  const comment = useSelector(state => state.comment.comment);
  const [chats, setChats] = useState([]);

  
   useEffect(() => {
     axios.get(`/rooms/${name}`).then(response => {
      setChats(response.data);
      console.log(response.data);
    }).catch(error => {
        console.log(error.message);
    });
   },[name, comment]);
   
   
   console.log(chats);
  
    return(
        <ChatZoneContainer>
        {chats.map(({content, user}) => (
        <Chat content={content} user={user} />
        ))}
        </ChatZoneContainer>
        );
}

export default ChatZone;

const ChatZoneContainer = styled.div`
   padding: 20px;
`;