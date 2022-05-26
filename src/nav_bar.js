import { BsFilterLeft } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BiCubeAlt } from "react-icons/bi";
import * as React from 'react';
import {useState} from 'react';
import { TiBell} from "react-icons/ti";
import {BiChevronDown} from "react-icons/bi";
import { BiMessageRounded} from "react-icons/bi";
import { FiSettings} from "react-icons/fi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Popup from 'reactjs-popup';

// import style from 'styled-components';
// import Button from '@material-ui/core/Button';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import IconButton from '@material-ui/core/IconButton';

function NavBar() {
  const [drop, setdrop] = React.useState('');

  const handleChange = (event) => {
    setdrop(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const closeModal1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const closeModal2 = () => setOpen2(false);

  return (
    <div className='layout'>
      <div className="navbar">
        <div id='title'>iSense<BsFilterLeft/></div>
        <div className='smallsize'>CAMPAIGNS</div>
        <div className='largesize'><GoHome/>&nbsp;&nbsp;New</div>
        <div className='largesize' variant="standard"><BiCubeAlt/>&nbsp;&nbsp;Schedule</div>
        <div className='smallsize'>SETTINGS</div>
        <div className='largesize'><BiCubeAlt/>&nbsp;&nbsp;Language</div>
        <div className='largesize' variant="standard"><BiCubeAlt/>&nbsp;&nbsp;Timezone</div>
      </div>
    
      <div className="main">
        <div className="main-head">
          <div className="head1">
            <div  id="dropdown">
              <FormControl variant="standard"  sx={{ m: 0, minWidth: 100 }}>
              <InputLabel id="dropdown">DropDown</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={drop}
                onChange={handleChange}
                label="DropDown"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
        {/* search bar and dropdown block div */}
            </div>
        
          <div className="search">
          <TextField
            id="outlined-basic"
            variant="standard"
            fullWidth
            label="Search"
          />
        </div>
          {/* head1-div */}
        </div>
        <div className="head2">
          <div className="bell" onMouseDown={() => setOpen(o => !o)}>
            <><TiBell/>
              <BiChevronDown/>
              {/* bell-popup */}
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                <div className="pop-up-bell">Notifications</div>
          
                </div>
              </Popup>
            </></div>
          <div className="message" onMouseDown={() => setOpen1(o => !o)}>
            <><BiMessageRounded/>
            <BiChevronDown/>
            <Popup open={open1} closeOnDocumentClick onClose={closeModal1}>
                <div className="modal">
                <div className="pop-up-message">Messages</div>
          
                </div>
              </Popup>
            </></div>
          <div className="setting" onMouseDown={() => setOpen2(o => !o)}>
            <><FiSettings/>
            <BiChevronDown/>
            <Popup open={open2} closeOnDocumentClick onClose={closeModal2}>
                <div className="modal">
                <div className="pop-up-setting">Settings</div>
          
                </div>
              </Popup>
            </></div>
        </div>
        {/* main head div */}
      </div>
      <div className="container">
            New <br /><br />
            <GoHome/>&nbsp;/&nbsp;New <br /> <br />
            <div id="bar">&nbsp;&nbsp;&nbsp;   &nbsp;Upload New Asset</div>
            <div id="bar-content">
            &nbsp;Campaign name <br />
            {/* search bar */}
            <form>
        <label htmlFor="header-search">
        </label>
        &nbsp;<input
            type="text"
            id="header-search"
            name="s" 
        />

    </form> <br />
                <div className="uploader"><input type="file" name="file"/></div><br />
                <div id="submit"><button>Submit</button></div>                </div>
            
           
             
           
            
      </div>
      {/* main-div */}
      </div>
      {/* layout div */}
      </div>
    
  
    
    
  )
}

export default NavBar;



    






   

     
