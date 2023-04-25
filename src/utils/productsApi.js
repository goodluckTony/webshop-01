import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4040';

export const getProducts = () => 
  // fetch('http://localhost:4040/products', {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // .then(res => res.json());
  axios
    .get('/products')
    .then(({data}) => data);
  

export const addProduct = (payload) => 
  axios
    .post('/products', payload)
    .then(({data}) => data);

export const deleteProduct = (id) => 
  axios
    .delete(`/products/${id}`)
    .then(({data}) => data);

export const getCart = () => 
  axios
    .get('/cart')
    .then(({data}) => data);