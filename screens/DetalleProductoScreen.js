import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { PRODUCTODETALLEDATA } from '../data/ProductoDetalleData';
import ProductoDetalleComp from '../components/ProductoDetalleComp';
import React from 'react';

function DetalleProductoScreen({ navigation, route }) {

    const Productos = PRODUCTODETALLEDATA.filter(Producto => Producto.id === route.params.productoID);

    const handleSelectedProductoDetalle = (item) => {
        navigation.navigate('DetalleProducto', {
            productoID: item.id,
            nombre: item.nombreProducto,
        });
    }

    const renderProductoDetalleItem = ({ item }) => (
        <ProductoDetalleComp item={item} onSelected={handleSelectedProductoDetalle}/>
    );

    return (
        <FlatList
            data={Productos}
            keyExtractor={item => item.id}
            renderItem={renderProductoDetalleItem}
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

export default DetalleProductoScreen;