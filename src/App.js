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
		<Grid container spacing={2}>
			<Grid item xs={8}>
				title
			</Grid>
			<Grid item xs={4}>
				menu
			</Grid>
			<Grid item xs={2} />
			<Grid item xs={8}>
				todo stuff
			</Grid>
			<Grid item xs={2} />
		</Grid>
	);
}
