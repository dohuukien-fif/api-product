import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from 'features/Auth/component/Register';
import CloseIcon from '@mui/icons-material/Close';
import Login from 'features/Auth/component/login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logout } from './../../features/Auth/userSlice/userSlice';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { cartItemCount } from 'features/cart/cartSelector';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    color: 'grey',
  },
});
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
function Headers() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const opens = Boolean(anchorEl);
  const cartItemCounts = useSelector(cartItemCount);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosesMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const loggedInuser = useSelector((state) => state.user.current);
  console.log(loggedInuser);
  const isLoggedInuser = !!loggedInuser.id;

  const hanleLooutClick = () => {
    const action = logout();
    dispatch(action);
  };
  //
  const handleLinkCart = () => {
    history.push('/cart');
  };
  //
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <AccountCircleIcon sx={{ fontSize: 35 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
            <Link className={classes.link} to="/">
              front end developer
            </Link>
          </Typography>
          <NavLink to="/todo" className={classes.link}>
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink to="/products/countss" className={classes.link}>
            <Button color="inherit">Abum</Button>
          </NavLink>
          <NavLink to="/products" className={classes.link}>
            <Button color="inherit">product</Button>
          </NavLink>
          {!isLoggedInuser && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleLinkCart}
          >
            <Badge badgeContent={cartItemCounts} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {isLoggedInuser && (
            <IconButton onClick={handleClickMenu}>
              <AccountCircleIcon />
              {loggedInuser.fullName}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClosesMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClosesMenu}>Profile</MenuItem>
        <MenuItem onClick={handleClosesMenu}>My account</MenuItem>
        <MenuItem onClick={hanleLooutClick}>Logout</MenuItem>
      </Menu>
      <Dialog onBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <CloseIcon className={classes.closeButton} onClick={handleClose} />

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account . Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Already have an account . Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Headers;
