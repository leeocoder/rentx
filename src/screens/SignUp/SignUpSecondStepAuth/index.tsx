import BackButton from '@components/BackButton';
import Bullet from '@components/Bullet';
import Button from '@components/Button';
import InputPassword from '@components/InputPassword';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';

import { SignUpSecondStepAuthNavigationProp } from '../../../routes/routes-types';
import {
  Container,
  Form,
  FormTitle,
  Header,
  InputWrapper,
  Steps,
  Subtitle,
  Title,
} from './style';

import * as yup from 'yup';
import { UserSignUpFirstStep } from '../SignUpFirstStepData';

type Params = {
  user: UserSignUpFirstStep;
};

const SignUpSecondStepAuth = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const route = useRoute();
  const { user } = route.params as Params;

  async function handleCreateAccount(): Promise<void> {
    try {
      const schema = yup.object().shape({
        password: yup.string().required('Senha é obrigatório'),
        confirmPassword: yup.string().required('Confirmar Senha é obrigatório'),
      });

      if (password !== confirmPassword) {
        return Alert.alert('As senha devem ser iguais');
      }

      await schema.validate({ password, confirmPassword });
      navigation.navigate('Confirmation', {
        title: 'Conta criada!',
        message: `Agora é só fazer login \ne aproveitar!`,
        confirmationRoute: 'SignIn',
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert(error.message);
      } else {
        return Alert.alert('error na autenticação');
      }
    }

    // navigation.navigate('SignUpSecondStepAuth', {
    //   user: { pas },
    // });
  }

  const navigation = useNavigation<SignUpSecondStepAuthNavigationProp>();
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={() => navigation.goBack()} />
            <Steps>
              <Bullet active />
              <Bullet active={false} />
            </Steps>
          </Header>
          <Title>
            Crie sua {'\n'}
            conta
          </Title>
          <Subtitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil.
          </Subtitle>
          <Form>
            <FormTitle>02. Senha</FormTitle>
            <InputWrapper>
              <InputPassword
                iconName='lock'
                placeholder='Senha'
                placeholderTextColor={theme.colors.text_details}
                onChangeText={(value) => setPassword(value)}
                value={password}
              />

              <InputPassword
                iconName='lock'
                placeholder='Repetir senha'
                placeholderTextColor={theme.colors.text_details}
                onChangeText={(value) => setConfirmPassword(value)}
                value={confirmPassword}
              />
            </InputWrapper>
          </Form>
          <Button
            title='Cadastrar'
            color={theme.colors.success}
            onPress={handleCreateAccount}
            enable={Boolean(
              password && confirmPassword && password === confirmPassword
            )}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpSecondStepAuth;
