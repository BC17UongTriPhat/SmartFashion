import React, { Component } from 'react'
import { connect, Connect } from 'react-redux';

class ProductItem extends Component {
    render() {
        // cách khải
        // let { item } = this.props;
        const { name, imgSrc_jpg } = this.props.item;

        return (
            <div className='card '>
                <img src={imgSrc_jpg} alt="img" />
                <p>{name}</p>
                <button className='btn btn-success' onClick={ () => this._clickAo(this.props.item)}> Thử đồ </button>
            </div>


        )
    }
    _clickAo = (Ao) =>{
        this.props.dispatch({
          type: 'SET_AO',
          payload:{
            type:Ao.type,
            img:Ao.imgSrc_png
          }
        })
      }
}



export default connect()(ProductItem);

{/* <div className='card '>
<img src="https://picsum.photos/150/200"  alt="" />
<p>Tên sản phẩm</p>
<button className='btn btn-success'> Thử đồ </button>
</div> */}