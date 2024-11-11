import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://acadicronbackend.educron.com/member-login`, { email, password });
      const result = response.data;
      setUserInfo(result);
      setUserToken(result.data.token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(result));
      await AsyncStorage.setItem('userToken', result.data.token);
      Alert.alert('Success!', 'User has successfully signed in!');
    } catch (error) {
      Alert.alert('Login Failed', 'Email and Password don\'t match!');
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('userInfo');
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
    setUserInfo(null);
    setIsLoading(false);
    Alert.alert('Logged Out', 'User has logged out successfully!');
  };
  const isLoggedIn = async () => {
    setIsLoading(true);
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        setUserToken(storedToken);
      }
    } catch (e) {
      console.log(`isLoggedIn error: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoading, userInfo, userToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
