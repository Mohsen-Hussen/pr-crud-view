import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
					<Button
						onClick={() => console.log("create ticket is tapped")}
						style={{ backgroundColor: "#388e3c", color: "#fff" }}
					>
						<Link
							to="/add-ticket"
							style={{ color: "#fff", textDecoration: "none" }}
						>
							Create Ticket
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
