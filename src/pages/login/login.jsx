import React, { useState, useEffect } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './login.styles';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8000/api/admin/';
const httpClient = fetchUtils.fetchJson;

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				EasyGO Ecommerce
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const MyLoginPage = ({ theme }) => {
	const classes = useStyles();

	const login = useLogin();
	const notify = useNotify();
	const [exist, setExist] = useState(null);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordconf, setPasswordConf] = useState('');

	useEffect(() => {
		httpClient(`${apiUrl}auth/adminsexist`).then(({ json }) => {
			setExist(json.exist);
		});
	}, []);

	const submit = (e) => {
		e.preventDefault();
		login({ username: email, password, passwordconf }).catch((e) => {
			notify('Invalid email or password', 'warning');
		});
	};

	return (
		<>
			<Grid container component='main' className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							EasyGO Ecommerce Admin
						</Typography>
						<form className={classes.form} onSubmit={submit}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{exist === false && (
								<TextField
									margin='normal'
									required
									fullWidth
									name='passwordconf'
									label='Confirm password'
									type='password'
									id='passwordconf'
									value={passwordconf}
									onChange={(e) => setPasswordConf(e.target.value)}
								/>
							)}
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={`${classes.submit} ${classes.customButtonContainer}`}
							>
								{exist !== null && (exist ? 'Sign In' : 'Create first account')}
							</Button>

							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
			<Notification />
		</>
	);
};

export default connect(undefined, { userLogin })(MyLoginPage);
