import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import {connect} from 'react-redux'


class Product extends Component {
    render() {
        return (

            <div className='row'>
              
                 {/*SAU KHI CONNECT  */}
                {this.props.productList.filter(item => item.type === this.props.clickBtnCateList).map((item,index)=>{
                    return    <div className='col-3 ' key={index}>
                       <ProductItem item={item} />
                </div>
                })}



            </div>

        )
    }
}
// cách ghi 1 hiếu 
const mapStateToProps = state =>({
    
        productList:state.products,
        clickBtnCateList: state.clickBtnCate,
    
});

// cách ghi 2 a khải

// const mapStateToProps = (state) =>{
//     return {
//         productList:state.products
//     }
   
// };
 
export default connect(mapStateToProps)(Product) ;