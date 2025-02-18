import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import coffee from "@/assets/images/coffee.png";
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffee} style={styles.image}>
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>

        {/* <Link href="/explore" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link> */}
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 60,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 7,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
});
