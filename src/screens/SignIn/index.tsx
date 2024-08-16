import React, { useState } from 'react';
import { Footer, Container, Header, Subtitle, Title, Content } from './style';
import Button from '@components/Button';
import { useTheme } from 'styled-components';
import Input from '@components/Input';
import InputPassword from '@components/InputPassword';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const SignIn = () => {
  const theme = useTheme();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Input
              iconName='mail'
              placeholder='E-mail'
              placeholderTextColor={theme.colors.text_details}
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            <InputPassword
              iconName='lock'
              placeholder='Senha'
              placeholderTextColor={theme.colors.text_details}
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
