import React from 'react';
import ProductDetails from '../../components/ProductComponents/ProductDetails/ProductDetails';
import ProductDetailsTabs from '../../components/ProductComponents/ProductDetailsTabs/ProductDetailsTabs';
import RelatedProducts from '../../components/ProductComponents/RelatedProducts/RelatedProducts';

const SingleProduct = () => {
  return (
    <>
      <ProductDetails />
      <ProductDetailsTabs />
      <RelatedProducts/>
    </>
  );
}

export default SingleProduct