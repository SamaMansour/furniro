import React from 'react';
import ShopHeader from '../../components/ShopComponents/ShopHeader/ShopHeader';
import FilterBar from '../../components/ShopComponents/FilterBar/FilterBar';
import OurProducts from '../../components/ShopComponents/OurProducts/OurProducts';
import BeforeFooter from '../../components/ShopComponents/BeforeFooter/BeforeFooter';
const Shop = () => {
  return (
    <>
      <ShopHeader />
      <FilterBar />
      <OurProducts/>
      <BeforeFooter/>
    </>
  );
}

export default Shop