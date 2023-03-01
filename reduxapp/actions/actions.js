// 1. define an acrtion type
export const ADD_PRODUCT = "ADD_PRODUCT";

// 2. Action Creator
export function addProduct(product){
  console.log(`Add Product Dispatched ${JSON.stringify(product)}`);
  // Your Logic Here 
  //product.ProductName =  product.ProductName.toUpper();
  return {
    type: ADD_PRODUCT,
    product // payload
  }
}

