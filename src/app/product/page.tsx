"use server";
import React from "react";
import prisma from "@/common/lib/prisma";

const ProductPage = async () => {
  const fetchData = async () => {
    try {
      const res = await prisma.product.findMany({
        include: {
          category: true,
        },
      });
      //const json = await res.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const products = await fetchData();

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h1>{product?.name}</h1>
          <p>{product?.id}</p>
          <p>{product?.description}</p>
          <p>Price: ${product?.price}</p>
          <p>Stock: {product?.stock}</p>
          <p>Category: {product?.category?.name}</p>
        </div>
      ))}
      {/* <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <p>Stock: {product?.stock}</p>
      <p>Category: {product?.category?.name}</p> */}
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
