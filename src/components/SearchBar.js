  
import React from 'react';
import {View, TextInput} from 'react-native';
import {searchbarStyle} from '../styles';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <TextInput 
        placeholder= "Selarch a city"
      />
    </View>
  );
};

export {SearchBar};