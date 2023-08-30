import React, { useState } from 'react';
import productIcon from '../../Assets/icon/product.png'
import priceIcon from '../../Assets/icon/price.png'
import quantityIcon from '../../Assets/icon/quantity.png'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', quantity: '' });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleQuantityIncrease = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const handleQuantityDecrease = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <table className='table raduis'>
        <thead>
          <tr>
            <th className='th'>Product</th>
            <th className='th'>Price</th>
            <th className='th'>Quantity</th>
            <th className='th'>Action</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {products.map((product, index) => (
            <tr key={index}>
              
              <td className='td'>{product.name}</td>
              <td className='td'>{product.price * product.quantity}</td>
              <td className='td'>
                <button className='delete' onClick={() => handleQuantityDecrease(index)}>-</button>
                <label className='wid'>{product.quantity}</label> 
                <button className='add' onClick={() => handleQuantityIncrease(index)}>+</button>
              </td>
              <td className='td'>
                <button className='delete' onClick={() => handleDeleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td className='td'>
            <img src={productIcon} alt="" />
        <input type="text" name="name" placeholder='Product'  value={newProduct.name} onChange={handleInputChange} required/>
            </td>
            <td className='td'>
            <img src={priceIcon} alt="" />
        <input type="number" name="price" placeholder='Price' value={newProduct.price} onChange={handleInputChange} required/>
            </td>
            <td className='td'>
            <img src={quantityIcon} alt="" />
        <input
        placeholder='Quantity'
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          required/>
            </td>
            <td className='td'>
            <button className='add' onClick={handleAddProduct}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      
     
      
    </div>
  );
};

export default ProductList;