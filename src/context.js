import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const DataContext = React.createContext()
// Provider


// Consumer


class DataProvider extends Component {
    state = {
        products: [],
        detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.storeProducts()
    }

    storeProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem]
        });
        this.setState(() => {
            return { products }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] }
        }, () => { console.log(this.state) })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    increment = (id) => {
        console.log('This is increment Method')
    }
    decrement = (id) => {
        console.log('This is Decrement Method')
    }
    removeItem = (id) => {
        console.log('this is item removed Method')
    }
    clearCart = () => {
        console.log('Clearing Cart Method')
    }

    render() {
        return (
            <DataContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {
                    this.props.children
                }
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;


export {
    DataProvider, DataConsumer
}