import * as React from 'react';

import {
	FormControl,
	InputLabel,
	Input,
	Button,
	makeStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { postBlog } from '../../service/apiService';

import { useForm } from 'react-hook-form';
import { addBlogData } from '../../store/actions/blog/blog';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		margin: 20,
		padding: 20,
	},
	width50: {
		width: '50%',
	},
	error: {
		color: 'rgb(248,122,122)',
	},
}));

export default function BlogPost(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onPost = () => {
		if (blogTitle === '' || blogBody === '') {
			setSuccessAlert(false);
			setErrorAlert(true);
			return;
		}

		const payload = {
			userId: 10,
			title: blogTitle,
			body: blogBody,
		};

		postBlog(payload).then((response) => {
			setBlogTitle('');
			setBlogBody('');

			setSuccessAlert(true);
			setErrorAlert(false);

			dispatch(addBlogData(response.data));
		});
	};

	const [blogTitle, setBlogTitle] = useState('');
	const [blogBody, setBlogBody] = useState('');
	const [successAlert, setSuccessAlert] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);

	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<>
			{successAlert && (
				<div className={classes.container}>
					<Alert severity="info" className={clsx(classes.width50)}>
						Blog posted!
					</Alert>
				</div>
			)}

			{errorAlert && (
				<div className={classes.container}>
					<Alert severity="error" className={clsx(classes.width50)}>
						Check the fields!
					</Alert>
				</div>
			)}

			<div className={classes.container}>
				<form
					className={classes.width50}
					onSubmit={handleSubmit(onPost)}
				>
					<FormControl margin="normal" fullWidth>
						<InputLabel htmlFor="title">Title</InputLabel>
						<Input
							id="title"
							title={'blog-title'}
							type="text"
							{...register('title', { required: true })}
							value={blogTitle}
							onChange={(event) => {
								setBlogTitle(event.target.value);
							}}
						/>
						{errors.title && (
							<p className={classes.error}>
								Blog title is required.
							</p>
						)}
					</FormControl>

					<FormControl margin="normal" fullWidth>
						<InputLabel htmlFor="body">Body</InputLabel>
						<Input
							id="body"
							title={'blog-body'}
							multiline
							rows={10}
							{...register('body', { required: true })}
							value={blogBody}
							onChange={(event) => {
								setBlogBody(event.target.value);
							}}
						/>
						{errors.body && (
							<p className={classes.error}>
								Blog Body is required.
							</p>
						)}
					</FormControl>

					<Button
						variant="contained"
						color="primary"
						size="medium"
						type={'submit'}
					>
						Post
					</Button>
				</form>
			</div>
		</>
	);
}
