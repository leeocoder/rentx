import BackButton from '@components/BackButton';
import Bullet from '@components/Bullet';
import Button from '@components/Button';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { SignUpFirstStepDataNavigationProp } from '../../../routes/routes-types';
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
import { useState } from 'react';

import * as yup from 'yup';

export type UserSignUpFirstStep = {
  name: string;
  email: string;
  driverLicense: string;
};

const SignUpFirstStepData = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [driverLicense, setDriverLicense] = useState<string>('');

  const navigation = useNavigation<SignUpFirstStepDataNavigationProp>();

  async function handleNextStep(): Promise<void> {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup
          .string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        driverLicense: yup.string().required('CNH é obrigatório'),
      });
      await schema.validate({ name, email, driverLicense });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert(error.message);
      } else {
        return Alert.alert('error na autenticação');
      }
    }
    navigation.navigate('SignUpSecondStepAuth', {
      user: { name, email, driverLicense },
    });
  }

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
            <FormTitle>1. Dados</FormTitle>
            <InputWrapper>
              <Input
                iconName='user'
                placeholder='Nome'
                onChangeText={(value) => setName(value)}
                value={name}
              />
              <Input
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
                onChangeText={(value) => setEmail(value)}
                value={email}
              />
              <Input
                iconName='credit-card'
                placeholder='CNH'
                keyboardType='numeric'
                onChangeText={(value) => setDriverLicense(value)}
                value={driverLicense}
              />
            </InputWrapper>
          </Form>
          <Button
            title='Próximo'
            enable={Boolean(name && email && driverLicense)}
            onPress={handleNextStep}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpFirstStepData;
