import React, { Component } from 'react'
import { DataConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
export default class ItemDetails extends Component {
    render() {
        return (
            <DataConsumer>
                {value => {
                    const { id, company, img, title, info, price, inCart } = value.detailProduct
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* Product */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className='img-fluid' alt="phoneDetail" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mb-0 mt-3">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer >
                                                Back to Products
                                        </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer

                                                cart
                                                disabled={
                                                    inCart ? "inCart" : "add to cart"
                                                }
                                                onClick={
                                                    () => {
                                                        value.addToCart(id);
                                                        value.openModal(id);
                                                    }
                                                }
                                            >
                                                {
                                                    inCart ? "inCart" : "add to cart"
                                                }
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </DataConsumer>
        )
    }
}
