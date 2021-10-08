import { Box, Typography } from '@material-ui/core';
import React from 'react';
import BlogPost from '../components/blogs/blogPost';

const Post = () => {
	return (
		<div>
			<Box pt={10} pb={5} textAlign="center">
				<Typography variant="h2">Post Blog</Typography>
			</Box>

			<BlogPost />
		</div>
	);
};
export default Post;
