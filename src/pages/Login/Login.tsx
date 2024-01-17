import { Container } from '@mui/material';
import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { Logo } from '../../components/Common/Logo/Logo';
import { AuthContainer } from '../../components/Auth/Common/AuthContainer.styled';

export const Login = () => {
  return (
    <Container sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <AuthContainer>
        <Logo />
        <LoginForm />
      </AuthContainer>
    </Container>
  );
};
