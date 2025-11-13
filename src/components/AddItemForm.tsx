import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Picker } from 'react-native';
import { MenuItem, Course } from '../types';

type Props = { onAdd: (item: MenuItem) => void };

const COURSES: Course[] = ['Starter','Main','Dessert','Wine Pairing'];

export default function AddItemForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Starter');
  const [price, setPrice] = useState('');

  function validateAndSubmit() {
    // Example "if" checks
    if (!name.trim()) { Alert.alert('Validation', 'Dish name is required'); return; }
    if (!description.trim()) { Alert.alert('Validation', 'Description is required'); return; }
    const parsed = Number(price);
    if (isNaN(parsed) || parsed <= 0) { Alert.alert('Validation', 'Enter a valid price'); return; }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      course,
      price: parsed,
    };
    onAdd(newItem);
    // clear inputs
    setName(''); setDescription(''); setPrice(''); setCourse('Starter');
  }

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Dish name" value={name} onChangeText={setName} placeholderTextColor="#99a" />
      <TextInput style={[styles.input, {height: 80}]} placeholder="Description" value={description} onChangeText={setDescription} multiline placeholderTextColor="#99a" />
      {/* For cross-platform Picker you can use @react-native-picker/picker; use simple select for now */}
      <View style={styles.row}>
        <Text style={styles.label}>Course:</Text>
        <Picker selectedValue={course} style={{flex:1}} onValueChange={(val) => setCourse(val as Course)}>
          {COURSES.map(c => <Picker.Item key={c} label={c} value={c} />)}
        </Picker>
      </View>

      <TextInput style={styles.input} placeholder="Price (e.g. 120.00)" value={price} onChangeText={setPrice} keyboardType="numeric" placeholderTextColor="#99a" />

      <Button title="Add Menu Item" onPress={validateAndSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginBottom: 16, backgroundColor: '#0b1220', padding: 12, borderRadius: 8 },
  input: { borderWidth: 1, borderColor: '#24303a', color: '#fff', padding: 8, borderRadius: 6, marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  label: { color: '#cbd5e1', marginRight: 8 }
});
