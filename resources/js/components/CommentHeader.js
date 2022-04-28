import React from 'react'
import styled from 'styled-components';
import SideBarOption from './SideBarOption';
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
          <AvatarContainer>
            <AvatarStyled variant="square"/>
            <AvatarStyled variant="square"/>
            <AvatarStyled variant="square"/>
          </AvatarContainer>
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

const AvatarStyled = styled(Avatar)`

  :nth-child(1){
     z-index: -995;
     border: 6px solid #fff;
  }
  :nth-child(2){
     z-index: -997;
     left: -10px;
     border: 6px solid #fff;
  }
  :nth-child(3){
     z-index: -999;
     left: -20px;
     border: 6px solid #fff;
  }
`;