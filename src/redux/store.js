import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';


const persistConfig = {
  key: 'root', //root anahtarında stateleri saklıyor
  storage: AsyncStorage, //verilerin saklanacağı yer 
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //rootReduceri persistconfig ile sarmalar

const store = createStore(persistedReducer); //persistedReducer kullanılarak yeni bir Redux store oluşturur. 
const persistor = persistStore(store); //Uygulama başlatıldığında veya sayfa yenilendiğinde, persistor, saklanan veriyi alır ve Redux store’unuza geri yükler.

export { store, persistor };
