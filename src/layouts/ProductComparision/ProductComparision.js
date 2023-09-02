import React from 'react'
import ComparisonHeader from '../../components/ComparisionComponents/ComparisonHeader/ComparisonHeader'
import General from '../../components/ComparisionComponents/General/General';
import Product from '../../components/ComparisionComponents/Product/Product';
import Dimensions from '../../components/ComparisionComponents/Dimensions/Dimensions';
import BeforeFooter from '../../components/ShopComponents/BeforeFooter/BeforeFooter';

const ProductComparision = () => {
  return (
    <>
      <ComparisonHeader />
      <General />
      <Product/>
      <Dimensions/>
      <BeforeFooter/>
    </>
  );
}

export default ProductComparision