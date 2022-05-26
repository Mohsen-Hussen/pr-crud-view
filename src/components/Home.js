import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Ticket from "./Ticket";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const getData = async () => {
	try {
		const res = await axios.get("https://api.publicapis.org/entries");
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

const Home = () => {
	useEffect(() => {
		getData();
	}, []);
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Ticket />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

export default Home;
