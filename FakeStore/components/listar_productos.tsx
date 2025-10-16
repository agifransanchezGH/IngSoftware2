import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { getProductos } from "../services/Api";

export default function ListaProductos() {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 

useEffect(() => {
    getProductos()
        .then((data) => setProducts(data)) // guardo productos en el estado
        .catch((err) => console.error(err))
        .finally(() => setLoading(false)); // dejo de cargar
}, []);
    if (loading){
    return (
        <View>
            <ActivityIndicator size="large"/>
        </View>
    )
    }
}