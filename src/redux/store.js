import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticketSlice";

const store = configureStore({
	reducer: {
		ticketInfo: ticketReducer,
	},
});

export default store;
