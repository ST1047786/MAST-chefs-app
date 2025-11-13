import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, LayoutAnimation, UIManager, Platform } from 'react-native';
import { MenuItem } from '../types';
import AddItemForm from '../components/AddItemForm';
import MenuItemCard from '../components/MenuItemCard';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  function handleAddItem(item: MenuItem) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMenuItems(prev => [item, ...prev]);
  }

  function handleRemoveItem(id: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMenuItems(prev => prev.filter(i => i.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ChefMenu</Text>
      <Text style={styles.subtitle}>Dynamic Menu Management</Text>

      <Text style={styles.count}>Total Items: {menuItems.length}</Text>

      <AddItemForm onAdd={handleAddItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onRemove={() => handleRemoveItem(item.id)} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No menu items yet.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f1720' },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  subtitle: { color: '#cbd5e1', textAlign: 'center', marginBottom: 20 },
  count: { color: 'white', marginBottom: 10 },
  empty: { color: '#9ca3af', marginTop: 40, textAlign: 'center' },
});
