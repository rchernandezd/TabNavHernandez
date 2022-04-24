import BusquedasPorCategoriaScreen from '../../screens/BusquedasPorCategoriaScreen';
import DetalleProductoScreen from '../../screens/DetalleProductoScreen';
import EmprendedoresScreen from '../../screens/EmprendedoresScreen';
import HomeScreen from '../../screens/HomeScreen';
import { Platform } from 'react-native';
import ProductosScreen from '../../screens/ProductosScreen';
import color from '../../constants/color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from 'react';

const Stack = createNativeStackNavigator();

const ShopNavigatorStack =  () => {
    return  (
    //<NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                //headerShown: false,
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? color.Primario : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : color.Primario,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    title: 'Tu Almacén en casa'
                }}    
            />
            <Stack.Screen 
                name='BusquedasPorCategoria'
                component={BusquedasPorCategoriaScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='Productos'
                component={ProductosScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='Emprendedores'
                component={EmprendedoresScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='DetalleProducto'
                component={DetalleProductoScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
        </Stack.Navigator>
    //</NavigationContainer>
    )
}

export default ShopNavigatorStack;