import React from 'react';
import './productNew.css';
import { MdPublish } from 'react-icons/md';
const ProductNew = () => {
    return (
        <div className='productNew'>
            <h1 className="productNewTitle">New Product</h1>
            <form className="productNewForm">
                <div className="addProductItem">
                    <label htmlFor="file" className='addProductItemFlex'>
                        Image
                    <MdPublish className='productNewICon'/>
                    </label>
                    <input type="file" id='file' style={{display:"none"}} />
                </div>
                <div className="addProductItem">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                </div>
                <div className="addProductItem">
                    <label htmlFor="stockId">Stock</label>
                    <input type="text" id='stockId' />
                </div>
                <div className="addProductItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default ProductNew