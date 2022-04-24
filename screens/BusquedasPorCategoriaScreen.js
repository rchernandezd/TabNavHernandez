import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { CATEGORIASEMPRENDEDORDATA } from '../data/CategoriasEmprendedorData';
import { CATEGORIASPRODUCTODATA } from '../data/CategoriasProductoData';
import CategoriasComp from '../components/CategoriasComp.js';
import CategoriasEmprendedorComp from '../components/CategoriasEmprendedorComp';
import React from 'react';
import color from '../constants/color.js';

function BusquedasPorCategoriaScreen({navigation}) {

    const handleSelectedProductos = () => {
        navigation.navigate('Productos', {
            nombre: 'Almacen Vecino',
        });
    }

    const handleSelectedCategoria = (item) => {
        navigation.navigate('Productos', {
            categoriaID: item.idCategoria,
            nombre: item.nombreCategoria,
        });
    }

    const handleSelectedCategoriaEmprendedor = (item) => {
        navigation.navigate('Emprendedores', {
            categoriaID: item.idCategoria,
            nombre: item.nombreCategoria,
        });
    }

    const renderCategoriasItem = ({ item }) => (
        <CategoriasComp item={item} onSelected={handleSelectedCategoria}/>
    );

    const renderCategoriasEmprendedorItem = ({ item }) => (
        <CategoriasEmprendedorComp item={item} onSelected={handleSelectedCategoriaEmprendedor}/>
    );

  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <Text>LOGO</Text>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar productos....'/>
            <FlatList
                data={CATEGORIASPRODUCTODATA}
                keyExtractor={item => item.idCategoria}
                renderItem={renderCategoriasItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar almacenes....'/>
            <FlatList
                data={CATEGORIASEMPRENDEDORDATA}
                keyExtractor={item => item.idCategoria}
                renderItem={renderCategoriasEmprendedorItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
         <View style={styles.container}>
        {/*    <Button title='Ir a Productos' onPress={handleSelectedProductos}/>*/}
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 5,
        //flexDirection: "column",
    },
    input: {
        width: 300,
        height: 35,
        backgroundColor: "#EEF3F4",
        padding: 2,
    },
});


export default BusquedasPorCategoriaScreen;