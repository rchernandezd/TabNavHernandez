import { FlatList, StyleSheet } from 'react-native';

import { PRODUCTOSDATA } from '../data/ProductosData';
import ProductosComp from '../components/ProductosComp';
import React from 'react';

function ProductosScreen({ navigation, route }) {


    const Productos = PRODUCTOSDATA.filter(Producto => Producto.idCategoria === route.params.categoriaID);
    
    const handleSelectedProducto = (item) => {
        navigation.navigate('DetalleProducto', {
            productoID: item.id,
            nombre: item.nombreProducto,
        });
    }

    const renderProductosItem = ({ item }) => (
        <ProductosComp item={item} onSelected={handleSelectedProducto}/>
    );

    return (
        <FlatList
            data={Productos}
            keyExtractor={item => item.id}
            renderItem={renderProductosItem}
            numColumns={2}
        />
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 5,
        flexDirection: 'row',
    }
});

export default ProductosScreen;