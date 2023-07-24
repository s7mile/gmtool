import { Box, Button, Container, Grid, TextField, Typography, styled } from '@mui/material';

import Link from 'src/components/Link';

const LabelWrapper = styled(Box)(
	({ theme }) => `
		background-color: ${theme.colors.success.main};
		color: ${theme.palette.success.contrastText};
		font-weight: bold;
		border-radius: 30px;
		display: inline-block;
		font-size: ${theme.typography.pxToRem(11)};
		padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
		margin-bottom: ${theme.spacing(2)};
`
);

const ButtonWrap = styled(Box)(
	() => `
		flex-shrink: 0;
		display: flex;
		align-items: right;
		justify-content: right;
`
);

const LoginTextField = styled(TextField)(
	() => `
		width: 100%;
		margin-bottom: 10px;
`
);

const Form = () => {
	return (
		<Container maxWidth="lg" sx={{ textAlign: 'center' }}>
			<Grid
				spacing={{ xs: 6, md: 10 }}
				justifyContent="center"
				alignItems="center"
				container
			>
				<Grid item mx="auto">
					<LabelWrapper color="success">FriendsTown Admin</LabelWrapper>
					<Typography>게임 운영을 위해 권한이 필요합니다.</Typography>
					<Typography>담당자를 통해 계정 등록 및 권한 요청을 해주세요.</Typography>
					<Box>
						<LoginTextField id="outlined-basic" label="ID" variant="outlined" />
					</Box>
					<Box>
						<LoginTextField id="outlined-basic" label="PASSWORD" variant="outlined" />
					</Box>
					<ButtonWrap>
						<Button
							component={Link}
							href="/admin/user"
							size="large"
							variant="contained"
						>
							Login
						</Button>
					</ButtonWrap>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Form;
