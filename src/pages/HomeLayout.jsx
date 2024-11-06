import { Outlet, useNavigation } from 'react-router-dom';
import { Container } from '@mui/material';
import { Loading, Navbar } from '../components';

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <Container component='main' maxWidth='lg' sx={{ paddingY: 5 }}>
          <Outlet />
        </Container>
      )}
    </>
  );
}

export default HomeLayout;
