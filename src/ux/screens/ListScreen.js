import React, { useEffect, useState, useContext } from 'react';
import { FlatList, RefreshControl, TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { getItems } from '../../application/services/itemService';

const ListScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems(); 
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchItems().then(() => setRefreshing(false));
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
            <View style={styles.itemContainer}>
              <Text style={[styles.itemText, { color: theme.text }]}>{item.description}</Text>
              <Text style={[styles.amountText, { color: theme.text }]}>
                {item.amount < 0 ? `- $${Math.abs(item.amount)}` : `+ $${item.amount}`} 
              </Text>
              <Text style={[styles.dateText, { color: theme.text }]}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListScreen;
