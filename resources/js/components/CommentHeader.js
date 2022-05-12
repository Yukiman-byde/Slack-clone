import React from 'react'
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';


function CommentHeader() {
    const headerTitle = useSelector(state => state.channel?.roomName);
  return (
       <CommentCaption>
        <RoomTitle>
          <LockIcon />
          <h3>{headerTitle}</h3>
        </RoomTitle>
       </CommentCaption>
  )
}

export default CommentHeader

const CommentCaption = styled.div`
  padding: 0 15px;
  height: 55px;
  border-bottom: 0.5px solid #49274b;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  background: #fff;
  position: fixed;
`;

const RoomTitle = styled.div`
  display: flex;
  align-items: center;
  >h3 {
      margin-bottom: 0;
  }
`;

const AvatarContainer = styled.div`
 display: flex;
 border: 0.1px solid #49274b;
 transform: scale(0.7);
 border-radius: 6px;
`;
