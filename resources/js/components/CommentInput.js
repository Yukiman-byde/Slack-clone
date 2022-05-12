import { Button } from '@material-ui/core/';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { CommentAction } from '../redux/CommentSlice';

function CommentInput() {
  const [value, setValue] = useState("");
  const roomName = useSelector(state => state.channel?.roomName);
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault(); //prevents refresh
    const data = {
      content: value,
      room_name: roomName,
    };
    
    axios.post('/comment', data).then(response => {
      console.log(response);
    });
    
   setValue("");
　 dispatch(CommentAction.increment());
  };
  
  return (
    <CommentInputContainer>
          <form>
              <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="messsage"
              value={value}
              />
              <Button
               hidden type="submit"
               onClick={handleClick}
              >
                SEND
              </Button>
          </form>
    </CommentInputContainer>
  )
}

export default CommentInput

const CommentInputContainer = styled.div`
    border-radius: 20px;

    >form {
      position: relative;
      display: flex;
      justify-content: center;
    }

    >form > input {
      position: fixed;
      bottom:30px;
      width: 60%;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      outline: none;
    }

    .MuiButton-root {
      display: none !important;
    }
`;