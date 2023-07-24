import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';

import Footer from 'src/components/Footer';

import Search from 'src/content/user/search';

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
        <Grid item xs={12}>
          <Search />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

User.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default User;
