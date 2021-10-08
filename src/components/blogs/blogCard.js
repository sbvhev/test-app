import React from 'react';

import {
	Card,
	CardContent,
	Typography,
	CardActionArea,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mb20: {
		marginBottom: 20,
	},
	colorGray: {
		color: 'gray',
	},
	colorBlack: {
		color: 'black',
	},
}));

export default function BlogCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.mb20}>
			<CardActionArea>
				<CardContent style={{ backgroundColor: 'white' }}>
					<Typography variant="body2" className={classes.colorGray}>
						Id:{props.blogData.id} userId: {props.blogData.userId}
					</Typography>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						className={classes.colorBlack}
						title={'blog-title'}
					>
						{props.blogData.title}
					</Typography>
					<Typography
						variant="body2"
						className={classes.colorGray}
						title={'blog-body'}
					>
						{props.blogData.body}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
