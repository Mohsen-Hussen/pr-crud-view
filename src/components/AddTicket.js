import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		width: "50%",
		fontSize: "18px",
	},
}));

const AddTicket = () => {
	const classes = useStyles();
	const [subValue, setSubValue] = useState("");
	const [statusValue, setStatusValue] = useState("");
	const [priority, setPriority] = useState("");
	const [decription, setDecription] = useState("");

	const handleSubjectValue = (e) => {
		setSubValue(e.target.value);
	};
	const handleStatusValue = (e) => {
		setStatusValue(e.target.value);
	};
	const handleRadio = (e) => {
		setPriority(e.target.value);
	};
	const handleDescriptionValue = (e) => {
		setDecription(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleNewData = () => {
		console.log({ priority, subValue, statusValue, decription });
	};
	return (
		<Container maxWidth="lg">
			<Grid container spacing={3} style={{ justifyContent: "center" }}>
				<Grid item xs={8}>
					<form onSubmit={handleSubmit}>
						<FormControl style={{ width: "100%" }}>
							<TextField
								type="text"
								variant="outlined"
								label="Subject"
								style={{ marginBottom: "20px" }}
								fullWidth={true}
								required
								value={subValue}
								onChange={handleSubjectValue}
								helperText={subValue ? "" : "Enter Subject"}
							/>
							<TextField
								type="text"
								variant="outlined"
								label="Status"
								style={{ marginBottom: "20px" }}
								fullWidth={true}
								required
								value={statusValue}
								onChange={handleStatusValue}
								helperText={statusValue ? "" : "Enter Status"}
							/>
							<FormLabel
								id="demo-radio-buttons-group-label"
								style={{
									marginBottom: "8px",
									color: "#000",
									fontSize: "20px",
									fontWeight: "bold",
								}}
							>
								Priority
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="yes"
								name="radio-buttons-group"
								value={priority}
								onChange={handleRadio}
								row
								style={{ justifyContent: "space-between" }}
							>
								<FormControlLabel value="yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="no" control={<Radio />} label="No" />
							</RadioGroup>
							<TextField
								type="text"
								variant="standard"
								label="Description"
								style={{ marginBottom: "8px", marginTop: "8px" }}
								fullWidth={true}
								required
								value={decription}
								onChange={handleDescriptionValue}
								helperText={decription ? "" : "Enter Description"}
								multiline={true}
							/>
						</FormControl>
						<Box
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								size="large"
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={<SendIcon />}
								onClick={handleNewData}
							>
								<Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
									Submit
								</Link>
							</Button>
						</Box>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddTicket;
