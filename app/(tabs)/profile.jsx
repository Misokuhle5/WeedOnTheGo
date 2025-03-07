import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function  Profile() {

    // Mock user data
    const user = {
      name: 'Misokuhle Mdlankomo',
      email: 'misokuhle@hashdata.co.za',
      profilePicture: 'https://via.placeholder.com/150',
      deliveryAddress: '54 Gie Rd, Tableview, Cape Town',
    };
  
    // Mock order history
    const orderHistory = [
      { id: '1', date: '2023-10-01', items: ['Infusion Bar - 5g', 'Gummies - 3g'], total: 'R 100' },
      { id: '2', date: '2023-09-25', items: ['HighTea - 10g'], total: 'R 600' },
      { id: '3', date: '2023-09-20', items: ['Tyson - 7g', 'Cookies - 5g'], total: 'R 80' },
    ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userAddress}>{user.deliveryAddress}</Text>
      </View>

      {/* Order History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        {orderHistory.map((order) => (
          <View key={order.id} style={styles.orderItem}>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderItems}>{order.items.join(', ')}</Text>
            <Text style={styles.orderTotal}>{order.total}</Text>
          </View>
        ))}
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="user" size={20} color="#000" />
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="bell" size={20} color="#000" />
          <Text style={styles.settingText}>Notification Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="credit-card" size={20} color="#000" />
          <Text style={styles.settingText}>Payment Methods</Text>
        </TouchableOpacity>
      </View>

      {/* Legal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="file-text" size={20} color="#000" />
          <Text style={styles.settingText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="lock" size={20} color="#000" />
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  userAddress: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItems: {
    fontSize: 14,
    color: '#666',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});