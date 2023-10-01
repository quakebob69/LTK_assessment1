import * as React from 'react';
import { BrowserRouter as Router, Link as RouterLink, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
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
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/todo" element={<Todo />} />
			</Routes>
		</Router>
	);
}
