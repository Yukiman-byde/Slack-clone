import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import axios from 'axios';



function Header(){

    return(
        <HeaderContainer>
        {/* HeaderLeft */}
        <HeaderLeft>
          <HeaderAvatar
          component="a"
          href="/"
          />
          <AccessTimeIcon className="accessIcon"/>
        </HeaderLeft>
        
        {/* HeaderSearch */}
        <HeaderSearch>
           <SearchIcon />
           <input placeholder="Search a channel"/>
        </HeaderSearch>
        
        {/* HeaderRight */}
         <HeaderRight>
            <HelpOutlineIcon />
         </HeaderRight>
        </HeaderContainer>
        );
}

export default Header;

const HeaderContainer = styled.div`
   display: flex;
   position: fixed;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding: 5px;
   background-color: #4a154b;
   color: white;
   z-index: 999;
`;

const HeaderLeft = styled.div`
   flex: 0.3;
   display: flex;
   align-items: center;
   margin-left: 20px;
   
   .accessIcon {
      margin-right: 30px;
      margin-left: auto;
   }
`;

const HeaderAvatar = styled(Avatar)`
 cursor: pointer;
 
 &:hover {
     opacity: 0.8;
 }
`
const HeaderSearch = styled.div`
   flex: 0.4;
   opacity: 1;
   border-radius: 6px;
   background-color: #421f44;
   text-align: center;
   padding: 0 50px;
   display: flex;
   color: gray;
   border: 1px solid gray;
   
   input {
       background-color: transparent;
       border: none;
       text-align:center;
       min-width: 30vw;
       outline: none;
       color: white;
   }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    
    .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
}
`;