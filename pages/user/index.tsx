import Head from 'next/head';

import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
	Container,
	Grid
} from '@mui/material';
import Footer from 'src/components/Footer';

const User = () => {
	return (
		<>
			<Head>
				<title>프렌즈타운 Admin</title>
			</Head>
			<PageTitleWrapper>
				<PageTitle
					heading="유저 정보 조회"
					subHeading="유저 기본 정보를 조회 & 관리합니다."
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}
				>
				</Grid>
			</Container>
			<Footer />
		</>
	);
}

export default User;