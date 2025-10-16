import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";

export default function ListaProductos() {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())      // convierto la respuesta a JSON
        .then((data) => setProducts(data)) // guardo productos en el estado
        .catch((err) => console.error(err))
        .finally(() => setLoading(false)); // dejo de cargar
}, []);

}
