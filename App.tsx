import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/rootNavigator';
import { QueryClient, QueryClientProvider, } from 'react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/presentaion/screens/Splash/Splash';

export default function App() {
  const routeNameRef = React.useRef();
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <NavigationContainer
        ref={navigationRef}
        onReady={async () => { routeNameRef.current = await navigationRef.current?.getCurrentRoute().name }}
        onStateChange={async () => { }}>
        <QueryClientProvider client={queryClient}>
          <Splash />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
