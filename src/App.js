import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu';
import BasicForm from './components/BasicForm'
import Home from './pages/home';
import Todo from './pages/todo';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	return (



		<Router>
			<Container maxWidth="sm">
				<Box sx={{ my: 4 }}>
					<NavLink to="/">
						<Typography variant="h4" component="h1" gutterBottom>
							React Skills test
						</Typography>
					</NavLink>
				</Box>
				<AccountMenu onClick={handleOnClick} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<Todo />} />
				</Routes>
			</Container>
		</Router>




	);
}
