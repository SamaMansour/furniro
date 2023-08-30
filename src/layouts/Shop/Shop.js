import React from 'react';
import ShopHeader from '../../components/ShopComponents/ShopHeader/ShopHeader';
import FilterBar from '../../components/ShopComponents/FilterBar/FilterBar';
import OurProducts from '../../components/ShopComponents/OurProducts/OurProducts';
const Shop = () => {
  return (
    <>
      <ShopHeader />
      <FilterBar />
      <OurProducts/>
    </>
  );
}

export default Shop