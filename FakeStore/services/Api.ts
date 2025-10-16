const API_URL = "https:fakestoreapi.com/products"

export const getProductos = () => { 
    return fetch(API_URL).then(res => res.json())
}

export const getProducto = (id: number) => {
    return fetch(`${API_URL}/${id}`).then(res => res.json())
}

export const crearProducto = (Data: any)  => {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(Data)
    }).then(res => res.json())
}

export const editarProducto = (id: number, Data: any) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(Data)
    }).then(res => res.json())
}

export const eliminarProducto = (id: number) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json())
}
