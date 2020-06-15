import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '40px',
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 360,
	},
	title: {
		marginBottom: '20px',
	},
	paperMini: {
		padding: '12px',
		marginBottom: '20px',
	},
}));

export default useStyles;
