import {
	Box,
	Card,
	Container,
	styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';

import Form from '@/content/Login/LoginForm';
import FriendsFace from '@/content/Login/FriendsFace';

const Wrapper = styled(Box)(
	() => `
		overflow: auto;
		flex: 1;
		overflow-x: hidden;
		align-items: center;
`
);

const Login = () => {
	return (
		<Wrapper>
			<Head>
				<title>프렌즈타운 Admin</title>
			</Head>
			<Container maxWidth="sm">
				<Box display="flex" justifyContent="center" py={5} alignItems="center">
					<FriendsFace />
				</Box>
				<Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
					<Form />
				</Card>
			</Container>
		</Wrapper>
	);
}

Login.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>;
};

export default Login;