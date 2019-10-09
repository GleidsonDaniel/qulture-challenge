import React, {useState} from 'react';
import {
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';

import {editUser} from '~/actions/userActions';

import {BaseInput, ActionButton} from '~/components';
import {Container, ButtonContainer, SendButton} from './styles';

const SelectedUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto!')
    .max(100, 'Nome muito longo!')
    .required('Nome requirido'),
  email: Yup.string()
    .email('Informe um e-mail válido.')
    .required('Email Obrigatório.'),
  job_title: Yup.string()
    .min(2, 'Cargo muito curto.')
    .max(100, 'Cargo muito longo!')
    .required('Cargo requirido'),
});

export default function SelectedUser() {
  const [editButton, setEditButton] = useState(false);
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(state => state.user);
  const setUser = async user => {
    try {
      dispatch(editUser(user));
    } catch (error) {
      Alert.alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Formik
            initialValues={selectedUser}
            validationSchema={SelectedUserSchema}
            onSubmit={values => setUser(values)}>
            {({
              handleChange,
              errors,
              touched,
              handleSubmit,
              values,
              resetForm,
            }) => (
              <Container>
                <BaseInput
                  label="Nome"
                  value={values.name}
                  error={errors.name && touched.name}
                  errorMessage={errors.name}
                  onChangeText={handleChange('name')}
                />
                <BaseInput
                  label="Email"
                  value={values.email}
                  error={errors.email && touched.email}
                  errorMessage={errors.email}
                  onChangeText={handleChange('email')}
                />
                <BaseInput
                  label="Data de admissão"
                  value={values.admission_date}
                  editable={false}
                />
                <BaseInput
                  label="Cargo"
                  value={values.job_title}
                  error={errors.job_title && touched.job_title}
                  errorMessage={errors.job_title}
                  onChangeText={handleChange('job_title')}
                />
                {JSON.stringify(selectedUser) !== JSON.stringify(values) && (
                  <ButtonContainer>
                    <SendButton onPress={handleSubmit} title="Salvar" />
                  </ButtonContainer>
                )}
                <ActionButton
                  icon={editButton ? 'times' : 'pencil'}
                  onPress={() => {
                    setEditButton(!editButton);
                    if (editButton) {
                      resetForm();
                      Keyboard.dismiss();
                    }
                  }}
                />
              </Container>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
