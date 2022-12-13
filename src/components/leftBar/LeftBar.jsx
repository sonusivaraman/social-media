import "./leftBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <HomeOutlinedIcon fontSize="large" />
            <span>Home</span>
          </div>

          <div className="item">
            <SearchOutlinedIcon fontSize="large"  />
            <span>Search</span>
          </div>
          <div className="item">
            <ExploreOutlinedIcon fontSize="large" />
            <span>Explore</span>
          </div>
          <div className="item">
            <MessageOutlinedIcon fontSize="large" />
            <span>Message</span>
          </div>
        
        <div className="item">
          <NotificationsOutlinedIcon fontSize="large" />
          <span>Notifications</span>
        </div>
        <div className="item">
          <AddCircleOutlineOutlinedIcon fontSize="large" />
          <span>Create</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
