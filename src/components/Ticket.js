import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		width: "100%",
		backgroundColor: "#dde5eb",
	},
	title: {
		fontSize: 25,
		textAlign: "center",
		color: "#aa2e25",
		fontWeight: "bold",
	},
	pos: {
		marginBottom: 12,
		marginTop: 12,
		color: "#381f75",
		fontSize: 20,
	},
});

const Ticket = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root} variant="elevation">
			<CardContent>
				<Typography variant="h5" component="h2" className={classes.title}>
					Cat Facts
				</Typography>
				<Box
					color="text.primary"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<Typography
						className={classes.pos}
						color="textPrimary"
						variant="body1"
					>
						Yes
					</Typography>
					<Typography
						className={classes.pos}
						color="textPrimary"
						variant="body1"
					>
						Animals
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
					well meaning and kindly.
				</Typography>
			</CardContent>
			<CardActions style={{ display: "flex", justifyContent: "space-between" }}>
				<Button
					size="small"
					onClick={() => console.log("Edit is tapped")}
					style={{ backgroundColor: "#b27000", color: "#fff" }}
				>
					<Link
						to="edit-ticket"
						style={{ color: "#fff", textDecoration: "none" }}
					>
						Edit
					</Link>
				</Button>
				<Button
					size="small"
					onClick={() => console.log("Delete is tapped")}
					style={{ backgroundColor: "#f50057", color: "#fff" }}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Ticket;
