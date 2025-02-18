import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const menuItems = [
  { id: '1', title: '☕ Espresso', description: 'A strong and rich shot of coffee.' },
  { id: '2', title: '🍵 Cappuccino', description: 'A perfect blend of espresso, steamed milk, and foam.' },
  { id: '3', title: '🥐 Croissant', description: 'A flaky, buttery French pastry.' },
  { id: '4', title: '🍰 Cheesecake', description: 'A creamy and sweet dessert with a crunchy base.' },
  { id: '5', title: '🥤 Iced Latte', description: 'A refreshing iced coffee with milk.' },
  { id: '6', title: '🍩 Donut', description: 'A soft and sweet ring-shaped treat.' },
];

const Menu = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Menu List */}
      <FlatList
      style={{padding:2}}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </View>
        )}
      />

      {/* Back Button */}
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  menuDescription: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
