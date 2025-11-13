import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuItemCard from '../components/MenuItemCard';
import { MenuItem } from '../types';

const sampleMenuItems: MenuItem[] = [
  { id: '1', name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', price: 12.99, course: 'Main' },
  { id: '2', name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing', price: 8.99, course: 'Starter' },
  // Add more sample items as needed
];

export default function HomeScreen() {
  const handleRemove = (id: string) => {
    console.log(`Remove item with id: ${id}`);
    // Logic to remove the item from the list
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleMenuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onRemove={() => handleRemove(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f3f4f6' },
});