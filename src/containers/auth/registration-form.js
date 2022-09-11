import React, { useState } from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { TabView } from '../../components/tab-view';
import { useSecureStorage } from '../../hooks/use-secure-storage';
import { setUserData } from '../../stores/user';
import { getUserData } from '../../utils/user';
import { styles } from './auth.style';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setItem } = useSecureStorage();

  const handleRegistration = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(setUserData(getUserData(user)));

        return setItem('user-data', user);
      })
      .catch(err => {
        Alert.alert(err.message);
        console.error(err);
      });
  };

  return (
    <TabView style={styles.formContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formWidth}>
          <View style={styles.formElement}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              placeholder="user@test.com"
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={email}
              style={styles.input}
            />
          </View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              placeholder="******"
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry
              value={password}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              style={styles.input}
            />
          </View>
          <Pressable style={styles.button} onPress={handleRegistration}>
            <Text style={styles.label}>Sign Up</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </TabView>
  );
};
