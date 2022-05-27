import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchTickets } from "../redux/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTicket } from "../redux/ticketSlice";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		color: "#aa2e25",
		fontWeight: "bold",
	},
	pos: {
		marginBottom: 5,
		marginTop: 5,
		color: "#381f75",
		fontSize: 15,
	},
}));

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	//get state from redux
	const ticketStatus = useSelector((state) => state.ticketInfo.status);
	// get comments from redux
	const ticketData = useSelector((state) => state.ticketInfo.ticketData);

	useEffect(() => {
		dispatch(fetchTickets());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<div className={classes.root}>
				<Grid container spacing={3}>
					{ticketStatus === "loading" || ticketStatus === "failed" ? (
						<Loading />
					) : (
						ticketData &&
						ticketData.map(({ body, email, id, postId, name }) => {
							return (
								<Grid item xs={12} sm={6} md={3} key={id}>
									<Card
										variant="elevation"
										style={{ width: "100%", backgroundColor: "#dde5eb" }}
									>
										<CardContent>
											<Typography
												variant="h5"
												component="h2"
												className={classes.title}
											>
												{name}
											</Typography>
											<Box
												color="text.primary"
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													flexDirection: "column",
												}}
											>
												<Typography
													className={classes.pos}
													color="textPrimary"
													variant="body1"
												>
													Status : {postId}
												</Typography>
												<Typography
													className={classes.pos}
													color="textPrimary"
													variant="body1"
												>
													{email}
												</Typography>
											</Box>
											<Typography
												variant="body2"
												component="p"
												style={{
													display: "flex",
													justifyContent: "center",
													color: "#ab003c",
													fontWeight: "bold",
													letterSpacing: "1px",
												}}
											>
												{body}
											</Typography>
										</CardContent>
										<CardActions
											style={{
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Button
												size="small"
												onClick={() => {
													dispatch(deleteTicket({ id: id }));
												}}
												style={{ backgroundColor: "#f50057", color: "#fff" }}
											>
												Delete
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})
					)}
				</Grid>
			</div>
		</Container>
	);
};

export default Home;
