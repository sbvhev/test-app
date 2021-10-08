import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import BlogCard from '../components/blogs/blogCard';

const useStyles = makeStyles((theme) => ({
	overflowY: {
		overflowY: 'auto',
		height: '70vh',
		paddingTop: 10,
	},
}));

const List = () => {
	const classes = useStyles();

	const { blogData } = useSelector((state) => state.blog);

	return (
		<div>
			<Box pt={10} pb={5} textAlign="center">
				<Typography variant="h2">Blog List</Typography>
			</Box>

			<div className={classes.overflowY}>
				{blogData.map((data, index) => {
					return <BlogCard key={`card-${index}`} blogData={data} />;
				})}
			</div>
		</div>
	);
};
export default List;
