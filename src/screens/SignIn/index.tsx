import React from 'react';
import { Footer, Container, Header, Subtitle, Title } from './style';
import Button from '@components/Button';
import { useTheme } from 'styled-components';

const SignIn = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Title>
          Estamos {'\n'}
          quase lá.
        </Title>
        <Subtitle>
          Faça seu login para começar {'\n'}
          uma experiência incrível.
        </Subtitle>
      </Header>
      <Footer>
        <Button
          title='Login'
          onPress={() => {}}
          enable={false}
          isLoading={false}
        />

        <Button
          title='Criar conta gratuita'
          onPress={() => {}}
          enable={false}
          isLoading={false}
          color={theme.colors.shape}
          light
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
