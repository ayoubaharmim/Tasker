 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors
 } from 'react-native/Libraries/NewAppScreen';
import { Category } from './src/components';

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </SafeAreaView>
      <View style={{flex: 1}}>
        <Category 
          title="Shopping"
          numberOfTasks="12 Tasks"/>
      </View>
     </>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
