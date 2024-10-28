"use server";
import { PrismaClient, Prisma } from "@prisma/client";
import React from "react";
import prisma from "@/common/lib/prisma";

/* params is array [a,b,c,...] , each object is a string. define them */
const ProductPage = async ({ params }: { params: { id: string[] } }) => {
  const fetchData = async () => {
    try {
      const productId = await params.id.at(0); // Assuming the ID is stored in the 'id' property of the 'params' object
      const res = await prisma.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          category: true,
        },
      });

      // });
      // const res = await prisma.product.findMany({
      //   include: {
      //     category: true,
      //   },
      // });
      //const json = await res.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const product = await fetchData();

  return (
    // <div>
    //   {products?.map((product) => (
    //     <div key={product.id}>
    //       <h1>{product?.name}</h1>
    //       <p>{product?.id}</p>
    //       <p>{product?.description}</p>
    //       <p>Price: ${product?.price}</p>
    //       <p>Stock: {product?.stock}</p>
    //       <p>Category: {product?.category?.name}</p>
    //     </div>
    //   ))}
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <p>Stock: {product?.stock}</p>
      <p>Category: {product?.category?.name}</p>

      {/* <div>
        <h2>Reviews</h2>
        <ul>
          {product.reviews.map((review) => (
            <li key={review.id}>
              {review.rating} stars - {review.comment}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ProductPage;
