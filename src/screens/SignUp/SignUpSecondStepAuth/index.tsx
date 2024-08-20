import BackButton from '@components/BackButton';
import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
  InputWrapper,
} from './style';
import { useNavigation } from '@react-navigation/native';
import { SignUpFirstStepDataNavigationProp } from '../../../routes/routes-types';
import Bullet from '@components/Bullet';
import Input from '@components/Input';
import Button from '@components/Button';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const SignUpFirstStepData = () => {
  const navigation = useNavigation<SignUpFirstStepDataNavigationProp>();

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
              />
              <Input
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
              />
              <Input
                iconName='credit-card'
                placeholder='CNH'
                keyboardType='numeric'
              />
            </InputWrapper>
          </Form>
          <Button title='Próximo' />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpFirstStepData;
