import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import Counters from "../pages/Counters";
import LifeCycleTest from "../pages/LifeCycleTest";
import MovieSearch from "../pages/MovieSearch";

      /* <a href="/products">Products</a>
      <a href="/products/3456">Product Detail</a>
      <a href="/cart">Cart</a>
      <a href="/order">Order</a>
      <a href="/profile">Order</a>
      <a href="/contacts">Contacts</a>
      <a href="/counters">Counters</a> */

export const routes = [
  {
    path: '/products',
    label: 'Products',
    component: Products
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters
  },
  {
    path: '/life-cycle-test',
    label: 'Life-cycle-test',
    component: LifeCycleTest
  },
  {
    path: '/MovieSearch',
    label: 'Movie-Search',
    component: MovieSearch
  },
];