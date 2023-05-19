import {  Box, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import getAllProduct from "../../service/api";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },

 
};
const Image = styled('img')({
  width: 'auto',
  height: 150
})

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px
`
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;
export const SSS = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();
      setproduct(data);
    };
    fetchData();
  }, []);
  return (
    <Component>
    <Carousel swipeable={false}
    draggable={false}
    responsive={responsive}
    centerMode={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={10000}
    keyBoardControl={true}
    showDots={false}
    containerClass="carousel-container"
    // removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
>
      {product.map((data) => (
        <>
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <div key={data.id}></div>
            <Image src={data.url} alt="banner" />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {data.title.shortTitle}
             </Text>
            <Text style={{ color: "green" }}>{data.discount}</Text>
            <Text style={{ color: "#212121", opacity: ".6" }}>
              {data.tagline}
            </Text>
          </Box>
        </>
      ))}
    </Carousel>
    </Component>
  );
};
// export const SSS = ({ products }) => {
//   const productsArray = Array.isArray(products) ? products : Array.from(products);

//   if (productsArray.length === 0) {
//     return <div>No products found</div>;
//   }

//   return (
//     <Carousel responsive={responsive}>
//       {productsArray.map((product) => (
//         <>
//           <div key={product.id}></div>
//         <img src={product.url} {...product} alt="product" />
//         </>
//       ))}
//     </Carousel>
//   );
// };
