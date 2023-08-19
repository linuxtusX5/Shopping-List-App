import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Home from './src/screens/Home';
import AddItem, {IItem} from './src/screens/AddItem';
import Item from './src/components/Item';
const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Home title="Shopping List"  />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
        />
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;