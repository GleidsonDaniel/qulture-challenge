import React, {useState, useEffect} from 'react';
import {
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {editUser} from '~/actions/userActions';
import {setPhoto} from '~/actions/cameraActions';
import collaboratorImageVerify from '~/functions/collaboratorImageVerify';

import {
  BaseInput,
  ActionButton,
  FeedbackModal,
  DatePickerInput,
} from '~/components';
import {Container, ButtonContainer, SendButton, UserImage} from './styles';

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
  const [editable, setEditable] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const dispatch = useDispatch();
  const {selectedUser, processingUsers} = useSelector(state => state.user);
  const {photo} = useSelector(state => state.camera);
  const {navigate, goBack} = useNavigation();

  useEffect(() => {
    dispatch(setPhoto([]));
  }, []);

  const setUser = async user => {
    const editedUser = photo.uri
      ? {...user, photo_url: `data:image/png;base64,${photo.base64}`}
      : user;
    try {
      setmodalVisible(true);
      dispatch(editUser(editedUser));
    } catch (error) {
      Alert.alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          {modalVisible && (
            <FeedbackModal
              loading={processingUsers}
              finalMessage="Usuario alterado com sucesso!"
              setModal={() => {
                setmodalVisible(false);
              }}
              okClick={() => {
                setmodalVisible(false);
                goBack();
              }}
            />
          )}
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
                <TouchableOpacity
                  disabled={!editable}
                  style={{alignItems: 'center'}}
                  onPress={() => navigate('Camera')}>
                  <UserImage
                    source={
                      photo.uri
                        ? {uri: photo.uri}
                        : collaboratorImageVerify(values.photo_url)
                    }
                  />
                </TouchableOpacity>
                <BaseInput
                  label="Nome"
                  value={values.name}
                  error={errors.name && touched.name}
                  errorMessage={errors.name}
                  onChangeText={handleChange('name')}
                  editable={!!editable}
                />
                <BaseInput
                  label="Email"
                  value={values.email}
                  error={errors.email && touched.email}
                  errorMessage={errors.email}
                  onChangeText={handleChange('email')}
                  editable={!!editable}
                />
                <DatePickerInput
                  label="Data de admissão"
                  editable={!editable}
                  value={values.admission_date}
                  error={errors.admission_date && touched.admission_date}
                  errorMessage={errors.admission_date}
                  selectDate={handleChange('admission_date')}
                />
                <BaseInput
                  label="Cargo"
                  value={values.job_title}
                  error={errors.job_title && touched.job_title}
                  errorMessage={errors.job_title}
                  onChangeText={handleChange('job_title')}
                  editable={!!editable}
                />
                {(JSON.stringify(selectedUser) !== JSON.stringify(values) ||
                  photo.uri) && (
                  <ButtonContainer>
                    <SendButton onPress={handleSubmit} title="Salvar" />
                  </ButtonContainer>
                )}
                <ActionButton
                  icon={editable ? 'times' : 'pencil'}
                  onPress={() => {
                    setEditable(!editable);
                    if (editable) {
                      resetForm();
                      dispatch(setPhoto([]));
                      Keyboard.dismiss();
                    }
                  }}
                />
              </Container>
            )}
          </Formik>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
