import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Catelogies extends Component {
  render() {
    return (
      //     SAU KHI CONNECT  
      <div className='btn-group'>
           {this.props.categoriList.map((item,index)=>(
              <button 
              key={index}
              onClick={()=>
                this._clickbtnCategory(item.type)}
               className={this.props.clickBtnCateList === item.type ? 'btn btn-secondary' : 'btn btn-success'} >{item.showName}</button>
            ))}
   
  
        {/* <button className='btn btn-primary '>
                 Phụ kiện
        </button> */}
      </div>
    )
  }
  _clickbtnCategory = (payload) =>{
    this.props.dispatch({
      type: 'SET_CATEGORY',
      payload
    })
  }
}

// cách ghi 1 hiếu 
const mapStateToProps = state =>({
    
  categoriList: state.categories,
  clickBtnCateList: state.clickBtnCate,

});


export default connect(mapStateToProps)(Catelogies);

// cách ghi 2 a khải

// const mapStateToProps = (state) =>{
//     return {
//         productList:state.products
//     }

// };