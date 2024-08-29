import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/products', component: ProductList, name: 'ProductList' },
    { path: '/product/:id', component: ProductDetail, name: 'ProductDetail', props: true },
    { path: '/cart', component: ShoppingCart, name: 'ShoppingCart' },
    { path: '/checkout', component: CheckoutPage, name: 'CheckoutPage' }
  ]
})

export default router
