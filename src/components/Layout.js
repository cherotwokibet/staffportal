import React, { useState } from "react";
import {
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Box,
  CssBaseline,
} from "@mui/material";

import {
  AddAlert,
  Menu,
  Logout,
  Send,
  DirectionsCar,
  Contacts,
  Person,
  School,
} from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";

import { format } from "date-fns";

import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MyAccount from "../pages/MyAccount";

import Training from "../pages/Training";
import Leave from "../pages/Leave";
import Travels from "../pages/Travels";
import Claims from "../pages/Claims";
import Staff from "../pages/Staff";

const drawerWidth = 240;

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const {} = useContext(UserContext)
  const menuItems = [
    {
      text: "Dashboard",
      icon: <Person color="secondary" />,
      path: "/",
    },
    {
      text: "Training",
      icon: <School color="secondary" />,
      path: "/training",
    },
    {
      text: "Leave",
      icon: <Send color="secondary" />,
      path: "/leave",
    },
    {
      text: "Claims",
      icon: <AddAlert color="secondary" />,
      path: "/claims",
    },
    {
      text: "Travels",
      icon: <DirectionsCar color="secondary" />,
      path: "/travels",
    },
    {
      text: "Staff",
      icon: <Contacts color="secondary" />,
      path: "/staff",
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log('Sign out')
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  const drawer = (
    <div>
      <div>
        <Typography variant="h5" sx={{ padding: 2 }}>
          Stima Sacco Ltd
        </Typography>
      </div>

      {/* list / links*/}
      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              background: location.pathname === item.path ? "#e1e1e7" : null,
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      {/* app bar */}
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{
          background: "#f9f9f9",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          <Typography color="textSecondary" noWrap sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>

          <IconButton
            onClick={handleSignOut}
            title="Sign Out"
            color="secondary"
            size="small"
            disabled={location.pathname === "/" ? false : true}
          >
            <Typography>Sign Out</Typography>
            <Logout sx={{ marginLeft: 0.5 }} />
          </IconButton>
          {/* <Typography color='textSecondary'>
                        Mario
                    </Typography>
                    <Avatar 
                        alt="prof_pic" 
                        src={mario}
                        sx={{
                            marginLeft:2
                        }}
                    /> */}
        </Toolbar>
      </AppBar>

      {/* side drawer*/}
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            width: drawerWidth,
            display: {
              xs: "none",
              sm: "block",
            },
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
          variant="permanent"
        >
          {drawer}
        </Drawer>
      </Box>

      {/*Main Content*/}

      <div
        style={{
          // background: "#f9f9f9",
          marginTop: "60px",
          width: "100%",
          padding: 24,
        }}
      >
        {/* {children} */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute>
                <Training />
              </PrivateRoute>
            }
          />
          <Route
            path="/leave"
            element={
              <PrivateRoute>
                <Leave />
              </PrivateRoute>
            }
          />
          <Route
            path="/travels"
            element={
              <PrivateRoute>
                <Travels />
              </PrivateRoute>
            }
          />
          <Route
            path="/claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route
            path="/staff"
            element={
              <PrivateRoute>
                <Staff />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
