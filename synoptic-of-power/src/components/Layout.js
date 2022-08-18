import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from './../style.module.css' ;
import logo from './../images/image.png'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 



const drawerWidth = 240;
// const navItems = ['/Political', '/Contact'];
const navItems = [
    // {
    //   section:'Mapa',
    //   icon: <img src={adoptaIcon} alt="" width="25px" height="25px" style={{verticalAlign:'middle'}} />
    // },
    {
      section:'Politicos',

      link: '/Political'
    }, 
    {
      section:'Contactos',

      link: '/Contact'
    },

  ];
function Layout (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleHome=() => {
    navigate('/');
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sinoptico
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
             
                <ListItem key={item.section} disablePadding>
                    
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.section} />
                </ListItemButton>
                
            </ListItem>
            

        ))}
      </List>
    </Box>
  );
const container = window !== undefined ? () => window().document.body : undefined;




    
  return (
    <>
        {/* <nav>
            <div className={styles.navbarLeft}>
                <Link to='/'>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
            </div>
            <div className={styles.navbarRight}>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                <Link to="/political">Politicos</Link>
                </li>
                <li>
                    <Link to="/contact">Contactos</Link>
                </li>
            </ul>
            </div>
        </nav> */}
    <Box sx={{ display: 'flex' }}>
      <AppBar style={{backgroundColor:'#3B4070',paddingBottom:'0px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:'#EBF5EE',fontFamily:`'Poppins',sans-serif` }}
           
          >
            <div onClick={handleHome} className="home-typography">
              {/* <img src={arbuAppIcon} alt="" width="30px" height="30px" style={{verticalAlign:'middle',borderRadius:'50%',backgroundColor:'#EBF5EE',paddingTop:'2px'}} /> */}
        &nbsp;
            Sinoptico
            </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Link key={item.section} to={item.link}>
                <Button className='buttons-appbar'  sx={{ color: '#fff' }}>
                    {item.section}
                    
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );


      <Outlet />
    </>
  )
};

// DrawerAppBar.propTypes = {

//     window: PropTypes.func,
//   };

// export default DrawerAppBar;

export default Layout;