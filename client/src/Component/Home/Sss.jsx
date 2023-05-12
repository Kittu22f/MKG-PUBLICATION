
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 export const SSS =({products})=>{
     return (
 <Carousel
 responsive={responsive}>
 {
 products?.map((product)=>{
 return <img src = {product.url}   alt ="product"/>       
  })
 }
 </Carousel>
    )
 }
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
