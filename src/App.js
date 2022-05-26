import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, StatusBar} from 'react-native';

const colorGithub = '#010409';

const profileImage = 'https://avatars.githubusercontent.com/u/79475372?v=4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
      <View>
        <Image style={styles.avatar} source={{uri: profileImage}}></Image>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorGithub,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default App;
