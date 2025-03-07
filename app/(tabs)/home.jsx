import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Mock data for products
const mockProducts = [
  { id: '1', name: 'Cape Weed Lovers Market', image: 'https://pbs.twimg.com/profile_images/1526974925856292864/ZTfhMgoo_400x400.jpg' },
  { id: '2', name: 'Mr Weed CPT', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDU59U3zOsFGgSq0qD8CcXF5oBW0y8q7oDw&s' },
  { id: '3', name: 'Cannablis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlC4tk9BILq9D76AxLfPq4_UPTRgrl-UbzQ&s' },
  { id: '4', name: 'Tyson CPT', image: 'https://tysoncoffeeshop.co.za/cdn/shop/files/Tyson_CPT-22.jpg?v=1738680477&width=1000' },
  { id: '5', name: 'Cannibisters', image: 'https://cannibisters.com/cdn/shop/files/BASE_2f9153b7-47ce-4bee-a333-c1ce4d99e16c.png?v=1711726975' },
  { id: '6', name: 'Infusion bar', image: 'https://www.capetownetc.com/wp-content/uploads/2021/04/20210408_190248-600x450.jpg' },
  { id: '7', name: 'The Dope Warehouse', image: 'https://dopewarehouse.co.za/wp-content/uploads/2020/10/logo_unique_type_3.png' },
  { id: '8', name: 'Cannabis Kiosk', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqFMDFCaEoFHt8VHEIUDhHknk_EwOM-FjVQ&s' },
  { id: '9', name: 'HighTea CBD', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFonsRsC6za7F581xXnk_A7G2ckj2KluwqOw&s' },
  { id: '10', name: 'The Alibi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUXzJFuTVyKigiinI98h7qu_0ztHFxzhN5g&s' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter products based on the search query
    const filtered = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleProductPress = (product) => {
    console.log('Product Pressed:', product.name);
    // Add your logic here (e.g., navigate to a product detail screen)
  };

  const handleCartPress = () => {
    console.log('Cart Pressed');
    // Add your logic here (e.g., navigate to the cart screen)
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleCartPress} style={styles.cartIcon}>
        <Icon name="shopping-cart" size={24} color="#000" />
      </TouchableOpacity>

      {/* "Let's get high" Text */}
     <Text style={styles.letsGetHighText}>Let's get high</Text>

      {/*search bar*/}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a product..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
       
       <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>

      {/* Vertical Scrollable Tabs/Buttons */}
      <ScrollView style={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productButton}
            onPress={() => handleProductPress(product)}
          >
            {/* Placeholder for product image */}
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productText}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartIcon: {
    position: 'absolute', 
    top: 50, 
    right: 40, 
    zIndex: 1,
    marginTop: 20,
  },
  letsGetHighText: {
    position: 'absolute', 
    top: 50, 
    left: 20, 
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#4CAF50', 
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop:90,
    marginBottom: 16
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    padding: 10,
  },
  productsContainer: {
    flex: 1,
  },
  productButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});