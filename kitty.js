import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>IM A KITTY</Text>
      <View>
        <Text>I make ur Heart comfy!</Text>
        <Image
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIP.JRmB6GTnC5IswCmJUt00iAHaHa&pid=Api&P=0&h=180',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue=" Purrfect just the way you are!!"
      />
    </ScrollView>
  );
};

export default App;
