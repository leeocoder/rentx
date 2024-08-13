import React from 'react';
import { Footer, Container, Header, Subtitle, Title, Content } from './style';
import Button from '@components/Button';
import { useTheme } from 'styled-components';
import Input from '@components/Input';

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
      <Content>
        <Input iconName='mail' />
        <Input iconName='lock' />
      </Content>
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
