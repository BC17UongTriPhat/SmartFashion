import React, { Component } from 'react'
import Catelogies from '../../Component/Catelogies/Catelogies'
import Model from '../../Component/Model/Model'
import Product from '../../Component/Product/Product'
import Footer from '../../Layout/Footer/Footer'
import HeaderComponent from '../../Layout/Header/Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className='container-fluid text-center'>

                    <div className='row '>
                        <div className='col-8'>
                            <Catelogies />
                            <Product />
                        </div>
                        <div className='col-4'>
                            <Model />
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}
