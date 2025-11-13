import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types';

type Props = { item: MenuItem; onRemove: () => void };

export default function MenuItemCard({ item, onRemove }: Props) {
  return (
    <View style={styles.card}>
      <View style={{flex:1}}>
        <Text style={styles.name}>{item.name} — {item.course}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.remove}>
        <Text style={{color:'#fff'}}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111827', padding: 12, marginBottom: 8, borderRadius: 8, flexDirection: 'row', alignItems: 'center' },
  name: { color: '#fff', fontWeight: '700', marginBottom: 4 },
  desc: { color: '#94a3b8', marginBottom: 4 },
  price: { color: '#10b981' },
  remove: { padding: 8, backgroundColor: '#ef4444', borderRadius: 6, marginLeft: 8 }
});