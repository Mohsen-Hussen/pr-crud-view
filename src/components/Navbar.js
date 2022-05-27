import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logoImg from "../assets/planradar_logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: "120px",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ backgroundColor: "#a5f3df" }}>
				<Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<Link to="/">
							<img src={logoImg} alt="PlaRadar Logo" />
						</Link>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
