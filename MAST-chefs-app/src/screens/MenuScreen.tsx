import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MenuItem } from '../types';
import MenuItemCard from '../components/MenuItemCard';

type Props = {
  menuItems: MenuItem[];
  onRemoveItem: (id: string) => void;
};

export default function MenuScreen({ menuItems, onRemoveItem }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onRemove={() => onRemoveItem(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1f2937',
  },
});