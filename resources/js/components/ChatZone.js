import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ChatZone(){
  const name = useSelector(state => state.channel?.roomName);
  const comment = useSelector(state => state.comment.comment);
  const [chats, setChats] = useState([]);
  const chatRef = useRef();

  
  useEffect(() => {
     axios.get(`/rooms/${name}`).then(response => {
      setChats(response.data);  //chatsとして表示
    }).catch(error => {
        console.log(error.message);
    });
   },[name, comment]);   //channelのnameやcommentが変化した時にレンダリング
   
   useEffect(() => {
       chatRef?.current?.scrollIntoView({　　//chatRefまでスクロールダウン
           behavior: "smooth",　　//ゆっくりと
       })
   },[chats]);  //chatsが全て取得されて読み込み終わった後にレンダリング
   
   
   console.log(chats);
  
    return(
        <ChatZoneContainer>
        {chats.map(({content, user}) => (
        <Chat 
        content={content}
        user={user}
        />
        ))}
        <div ref={chatRef}></div>
        </ChatZoneContainer>
        );
}

export default ChatZone;

const ChatZoneContainer = styled.div`
   height: 70vh;
   margin-top: 50px;
   overflow: scroll;
   padding: 20px;
   margin-bottom: 50px;
`;