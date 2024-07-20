import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <Provider store={store}> 
    {/* // Redux store'unun tüm bileşenler için erişilebilir olmasını sağlar. */}
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
