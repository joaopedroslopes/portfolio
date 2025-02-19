import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

	return (
		<div class="flex flex-col min-h-screen bg-dark-purple">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default App
