import React, { useEffect, useState }  from 'react'
import styled from 'styled-components';
import SideBarOption from './SideBarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { useSelector } from 'react-redux';


function SideBar() {
  const selector = useSelector(state => state.channel.roomName);
  const [channels, setChannels] = useState([]);

 useEffect(() => {
    axios.get('/channel').then((response) => {
     setChannels(response.data);
      });
 },[selector]);

  
  return (
    <SideBarContainer>
     {/* Sidebar header is coming */}
       <SideBarHeader>
          <SideBarInfo>
            <h2>Levtech-College</h2>
            <h3>
              <FiberManualRecordIcon className="online"/>
              User Name
            </h3>
          </SideBarInfo>
          <CreateIcon />
       </SideBarHeader>

       {/* Sidebar option is coming and pass the props */}
       <SideBarOption title="Threads" Icon={InsertCommentIcon}/>
       <SideBarOption title="Mentions & reactions" Icon={InboxIcon}/>
       <SideBarOption title="Saved Item" Icon={DraftsIcon}/>
       <SideBarOption title="Channel browser" Icon={BookmarkBorderIcon}/>
       <SideBarOption title="People & user group" Icon={PeopleAltIcon}/>
       <SideBarOption title="Apps" Icon={AppsIcon}/>
       <SideBarOption title="File browser" Icon={FileCopyIcon}/>
       <SideBarOption title="Show less" Icon={ExpandLessIcon}/>
       <hr />
       <SideBarOption title="Channels" Icon={ExpandMoreIcon}/>
       <hr />
       <SideBarOption title="Add Channel" addChannelOption Icon={AddIcon}/>

        {channels.map((channel) => (
            <SideBarOption title={channel.room_name} roomHash={channel.room_hash}/>
        ))}
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: #4a154b;
    border-top: 2px solid #49274b;
    min-width: 260px;
    margin-top: 50px;
    color: white;
    
    > hr {
      margin-top: 5px;
      margin-bottom: 5px;
      border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
 display: flex;
 border-bottom: 1px solid #49274b;
 padding: 3px;
 align-items: center;

 >.MuiSvgIcon-root {
   margin-left: 5px;
   padding: 5px;
   font-size: 33px;
   background-color: #fff;
   color: #49274b;
   border-radius: 50%;
 }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 18px;
    font-weight: 900;
    font-family: "-apple-system, sans-serif";
  }
  
  > h3 {
    align-items: center;
    display: flex;
    font-size: 15px;
    font-family: "-apple-system, sans-serif";
    margin-bottom: 0;
   }

   .online {
     font-size: 14px;
     margin-right: 2px;
     color: green;
   }

  
`;
