import Header from './components/header';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';
import { Paper, Container } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getBlogList } from './service/apiService';

import { green, orange } from '@material-ui/core/colors';
import { useEffect } from 'react';
import { updateBlogData } from './store/actions/blog/blog';

const theme = createMuiTheme({
	typography: {
		h1: {
			fontSize: '3rem',
		},
	},
	palette: {
		type: 'dark',
		primary: {
			main: green[600],
		},
		secondary: {
			main: orange[400],
		},
	},
});

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		getBlogList().then((response) => {
			dispatch(updateBlogData(response.data));
		});
		// eslint-disable-next-line
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Paper style={{ height: '100vh' }}>
				<Container>
					<Header />
				</Container>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
