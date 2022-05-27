import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const profileImage = 'https://avatars.githubusercontent.com/u/79475372?v=4';

const urlGithub = 'https://github.com/rathlucas';

const App = () => {
  const handlePressGoToGithub = async () => {
    const response = await Linking.canOpenURL(urlGithub);

    if (response) {
      await Linking.openURL(urlGithub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{uri: profileImage}}
          accessibilityLabel="Lucas Santiago Santana no quarto com fundo branco"></Image>
        <Text
          style={[styles.defaultName, styles.name]}
          accessibilityLabel="Nome Lucas Santiago Santana">
          Lucas Santiago Santana
        </Text>
        <Text
          style={[styles.defaultName, styles.nickname]}
          accessibilityLabel="Nickname rathlucas">
          rathlucas
        </Text>
        <Text
          style={[styles.defaultName, styles.description]}
          accessibilityLabel="Descrição Fullstack Developer | Javascript | HTML | CSS | Node.js | React Native">
          Fullstack Developer | Javascript | HTML | CSS | Node.js | React Native
        </Text>
      </View>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Open in Github</Text>
        </View>
      </Pressable>
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
  defaultName: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 25,
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 25,
    fontWeight: 'bold',
  },
  button: {
    color: colorFontGithub,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 14,
    padding: 18,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default App;
