import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu';
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
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Box sx={{ my: 4 }}>
								<NavLink to="/">
									<Typography variant="h4" component="h1" gutterBottom>
										React Skills test
									</Typography>
								</NavLink>
							</Box>
						</Grid>
						<Grid item xs={4}>
							<AccountMenu onClick={handleOnClick} />
						</Grid>
						<Grid item xs={2} />
						<Grid item xs={8}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/todo" element={<Todo />} />
							</Routes>
						</Grid>
						<Grid item xs={2} />
					</Grid>
				</Box>
			</Container>
		</Router>
	);
}
