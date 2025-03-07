import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function orders() {

  // Mock data for current and past orders
  const [currentOrders, setCurrentOrders] = useState([
    {
      id: '1',
      status: 'Preparing',
      items: ['Blue Dream - 5g', 'OG Kush - 3g'],
      total: 'R 450',
      estimatedDelivery: '30 mins',
    },
    {
      id: '2',
      status: 'Out for Delivery',
      items: ['Sour Diesel - 10g'],
      total: 'R 600',
      estimatedDelivery: '15 mins',
    },
  ]);

  const [pastOrders, setPastOrders] = useState([
    {
      id: '3',
      date: '2023-10-01',
      items: ['Pineapple Express - 7g', 'Green Crack - 5g'],
      total: 'R 800',
      status: 'Delivered',
    },
    {
      id: '4',
      date: '2023-09-25',
      items: ['Girl Scout Cookies - 10g'],
      total: 'R 700',
      status: 'Delivered',
    },
  ]);

  // Function to reorder a past order
  const handleReorder = (order) => {
    console.log('Reorder:', order);
    // Add logic to reorder (e.g., add items to cart)
  };

  // Function to leave a review for a past order
  const handleLeaveReview = (order) => {
    console.log('Leave Review:', order);
    // Add logic to navigate to a review screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Current Orders */}
      <Text style={styles.sectionTitle}>Current Orders</Text>
      {currentOrders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.orderStatus}>{order.status}</Text>
          <Text style={styles.orderItems}>{order.items.join(', ')}</Text>
          <Text style={styles.orderTotal}>Total: {order.total}</Text>
          <Text style={styles.estimatedDelivery}>
            Estimated Delivery: {order.estimatedDelivery}
          </Text>
        </View>
      ))}

      {/* Past Orders */}
      <Text style={styles.sectionTitle}>Past Orders</Text>
      {pastOrders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.orderDate}>{order.date}</Text>
          <Text style={styles.orderItems}>{order.items.join(', ')}</Text>
          <Text style={styles.orderTotal}>Total: {order.total}</Text>
          <Text style={styles.orderStatus}>Status: {order.status}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleReorder(order)}
            >
              <Icon name="repeat" size={20} color="#4CAF50" />
              <Text style={styles.actionButtonText}>Reorder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleLeaveReview(order)}
            >
              <Icon name="star" size={20} color="#FFC107" />
              <Text style={styles.actionButtonText}>Leave Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  orderStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderItems: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    marginLeft: 5,
  },
});