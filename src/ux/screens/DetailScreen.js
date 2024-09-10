import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const DetailScreen = ({ route }) => {
  const { theme } = useContext(ThemeContext);
  const { item } = route.params; 

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.title, { color: theme.text }]}>{item.description}</Text>
        <Text style={[styles.amount, { color: item.amount < 0 ? 'red' : 'green' }]}>
          {item.amount < 0 ? `- $${Math.abs(item.amount)}` : `+ $${item.amount}`}
        </Text>
        <Text style={[styles.date, { color: theme.text }]}>Date: {item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 15, 
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: '100%', 
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailScreen;
