// IMPORTING APIS
import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FormatListBulletedIcon from '@material-ui/icons//FormatListBulleted';
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
import Home from "../pages/home";
import List from "../pages/list";
import Post from "../pages/post";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <BrowserRouter>
                    <AppBar>
                        <Toolbar>
                            <Typography
                                variant="h5"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                            >
                                Blog Demo
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="textPrimary"
                                        className={classes.menuButton}
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchor}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        KeepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/"
                                        >
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6"> Home</Typography>
                                        </MenuItem>

                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/list"
                                        >
                                            <ListItemIcon>
                                                <FormatListBulletedIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6"> List</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/post"
                                        >
                                            <ListItemIcon>
                                                <BookmarksIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6"> Post </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem" }}>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/"
                                        color="default"
                                    >
                                        <HomeIcon />
                                        Home
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/list"
                                        color="default"
                                    >
                                        <FormatListBulletedIcon />
                                        List
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/post"
                                        color="default"
                                    >
                                        <BookmarksIcon />
                                        Post
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={List} />
                        <Route exact path="/post" component={Post} />
                    </Switch>
                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default Header;
