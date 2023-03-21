import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const livro = "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Livros</Text>
      <View style={styles.conteudo}>
        <View style={styles.card}>
          <Image style={{ resideMode: 'stretch', height: 200}} source={{uri:livro}} />
          <Text>Título</Text>
          <Text>Preço</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '40%',
    height: 240,
    backgroundColor: '#7fa331',
    borderRadius: 10,
  },
});
