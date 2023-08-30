import React from "react";

// Assuming you have an image in the public folder or imported as a module.
// Replace './furniroImage.jpg' with the path to your desired image.

const ShopHeader = () => {
  return (
    <div className="shop-header">
      <img
        src={"../../assets/images/furniroImage.png"}
        alt="Furniro Shop"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ShopHeader;
