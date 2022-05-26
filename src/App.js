import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditTicket from "./components/EditTicket";
import AddTicket from "./components/AddTicket";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="edit-ticket" element={<EditTicket />} />
				<Route path="add-ticket" element={<AddTicket />} />
			</Routes>
		</div>
	);
}

export default App;
