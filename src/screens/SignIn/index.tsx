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
  Alert,
} from 'react-native';

import * as yup from 'yup';
import { SignInNavigationProp } from '../../routes/routes-types';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@hooks/auth';

const SignIn = () => {
  const theme = useTheme();
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigation = useNavigation<SignInNavigationProp>();

  async function handleSignIn(): Promise<void> {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Digite um e-mail válido')
          .required('E-mail é obrigatório'),
        password: yup.string().required('Senha é obrigatório'),
      });

      await schema.validate({ email, password });
      if (email && password) {
        signIn({ email, password });
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert(error.message);
      } else {
        return Alert.alert('error na autenticação');
      }
    }
  }

  function handleCreateAccount(): void {
    navigation.navigate('SignUpFirstStepData');
  }

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
              onPress={handleSignIn}
              enable={true}
              isLoading={false}
            />

            <Button
              title='Criar conta gratuita'
              onPress={handleCreateAccount}
              enable
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
