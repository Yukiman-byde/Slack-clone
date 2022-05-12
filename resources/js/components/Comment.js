import React from 'react';
import styled from 'styled-components';
import CommentHeader from './CommentHeader';
import CommentInput from './CommentInput';
import ChatZone from './ChatZone';
import { useSelector } from 'react-redux';
import CommentIcon from '@material-ui/icons/Comment';

function Comment() {
  const state = useSelector(state => state.channel.roomName);
  console.log(state);
  return (
    <>
      {state ? (
       <CommentContainer>
        {/* Comment Header */}
        {/* Which will be passed room name afterword */}
        <CommentHeader />
  
        {/* Comments */}
        <ChatZone />
  
        {/* Comment input field */}
       <CommentInput />
        
      </CommentContainer>
      ) : (
      <CommentContainer>
         <NoContent>
             <CommentIcon />
             <p>Let's talk</p>
         </NoContent>
      </CommentContainer>
      )}
   </>
  )
}

export default Comment

const CommentContainer = styled.div`
   margin-top: 50px;
   width: 100%;
`;

const NoContent = styled.div`
 　width: 80vw;
 　min-height: 80vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
   .MuiSvgIcon-root	{
     color: lightgray;
     font-size: 100px;
   }
   
   > p {
     color: lightgray;
     font-size: 50px;
   }
`;