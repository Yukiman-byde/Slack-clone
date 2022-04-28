import React from 'react';
import styled from 'styled-components';
import CommentHeader from './CommentHeader';
import CommentInput from './CommentInput';
import ChatZone from './ChatZone';

function Comment() {
  return (
    <CommentContainer>
      {/* Comment Header */}
      {/* Which will be passed room name afterword */}
      <CommentHeader />

      {/* Comments */}
    <ChatZone />

      {/* Comment input field */}
     <CommentInput />
      
    </CommentContainer>
  )
}

export default Comment

const CommentContainer = styled.div`
   margin-top: 50px;
   width: 100%;
`;