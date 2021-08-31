import Head from "next/head";
import styled from "styled-components";

function Login() {
  return (
    <div>
      <Container>
        <Head>
          <title>Login</title>
        </Head>
        <LoginContainer>
          <Logo src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"/>
          <Button varient="outlined" >Sign In With Google</Button>
        </LoginContainer>
      </Container>
    </div>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;