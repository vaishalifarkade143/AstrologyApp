// src/components/CustomAppbar.js
import * as React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppbar = ({ navigation, title, subtitle }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default CustomAppbar;
