import { styled } from '@material-ui/styles';

const Row = styled('div')({
	marginBottom: 20,

	'& .info': {
		color: '#999',
		backgroundColor: '#222',
		padding: 20,
		borderRadius: 3,

		'&.spaced': {
			marginTop: 10,
		},
	},
});

export const RowLite = styled(Row)({
	'& .info': {
		backgroundColor: '#303030',
	},
});

export const RowDark = styled(Row)({
	'& .info': {
		backgroundColor: '#181818',
	},
});

export default Row;
