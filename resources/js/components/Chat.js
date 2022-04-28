import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';


function Chat({content, user}){
    return(
         <ChatFragment>
            <Avatar variant="square">{user[0]}</Avatar>
            <ChatContent>
            <h5>{user}</h5>
            <h4>{content}</h4>
            </ChatContent>
          </ChatFragment>
        );
}

export default Chat;

const ChatFragment = styled.div`
  display: flex;
  min-height: 70px;
  
  >.MuiAvatar-root {
      border-radius: 5px;
      margin: 7px 5px 0 0;
      height: 45px;
      width: 45px;
      z-index: -999;
  }
`;

const ChatContent = styled.div`
  min-height: 80px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;