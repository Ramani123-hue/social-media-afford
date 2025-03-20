import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
  Box,
} from '@mui/material';
import {
  Menu as MenuIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Feed as FeedIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)<{ position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative' }>(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Logo = styled(Typography)<{ component?: React.ElementType; to?: string; variant?: string }>(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontWeight: 700,
  letterSpacing: '.3rem',
  marginRight: theme.spacing(2),
}));

const NavButton = styled(Button)<{ component?: React.ElementType; to?: string; startIcon?: React.ReactNode }>(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
  },
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.12)',
  },
}));

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { text: 'Top Users', path: '/top-users', icon: <PeopleIcon /> },
    { text: 'Trending Posts', path: '/trending-posts', icon: <TrendingUpIcon /> },
    { text: 'Feed', path: '/feed', icon: <FeedIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          key={item.text}
          component={RouterLink}
          to={item.path}
          button
          selected={location.pathname === item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Logo component={RouterLink} to="/" variant="h6">
            Social Analytics
          </Logo>
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  startIcon={item.icon}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navigation; 