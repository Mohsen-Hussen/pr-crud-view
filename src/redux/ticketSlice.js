import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTickets = createAsyncThunk(
	"ticketInfo/fetchTickets",
	async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/comments"
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

const initState = { ticketData: [], status: null };

const ticketSlice = createSlice({
	name: "ticketInfo",
	initialState: initState,
	reducers: {
		deleteTicket: (state, action) => {
			state.ticketData = state.ticketData.filter(
				(ticket) => ticket.id !== action.payload.id
			);
		},
	},
	extraReducers: {
		[fetchTickets.fulfilled]: (state, action) => {
			state.ticketData = action.payload;
			state.status = "success";
		},
		[fetchTickets.pending]: (state) => {
			state.status = "loading";
		},
		[fetchTickets.rejected]: (state) => {
			state.status = "failed";
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTicket, deleteTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
