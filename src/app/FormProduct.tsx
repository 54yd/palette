"use client";
import React, { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { Descriptions } from "antd";

type FormValues = {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
};

type MyError = {
  name: string;
  description: string;
  price: string;
  stock: string;
  categoryId: string;
};

const FormProduct = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    categoryId: "",
  });

  const [errors, setErrors] = useState<MyError>({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (values: FormValues) => {
    let errors: MyError = {} as MyError;

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (values.price <= 0) {
      errors.price = "Price must be a positive number";
    }
    if (values.stock < 0) {
      errors.stock = "Stock must be a non-negative number";
    }
    if (!values.categoryId) {
      errors.categoryId = "Category ID is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });

        if (response.ok) {
          alert("Product created successfully");
          redirect("/product");
        } else {
          alert("Failed to create product");
        }
      } catch (error) {
        console.error("Error submitting form", error);
        alert("Failed to create product");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const [productList, setProductList] = useState<
    { name: string; id: string }[]
  >([]);

  const fetchProductList = async () => {
    try {
      const response = await fetch("/api/product", {
        method: "GET",
      });

      if (response.ok) {
        const productList = await response.json();
        setProductList(productList);
      } else {
        console.error("Failed to fetch product list");
      }
    } catch (error) {
      console.error("Error fetching product list", error);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  // const fetchProductList = async () => {
  //   try {
  //     const response = await fetch("/api/product", {
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       const productList = await response.json();
  //       return productList;
  //     } else {
  //       console.error("Failed to fetch product list");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product list", error);
  //   }
  // };

  // const productList = await fetchProductList();

  const borderColoring = "border-2 border-gray-300 rounded-md p-1 w-full";

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {productList.map((product, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-center">
              <h2 className="font-bold text-xl text-gray-800 mb-2">
                {product?.name}
              </h2>
              <p className="text-sm text-gray-500">Product ID: {product?.id}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* // implement getting product list from api/product GET method // call the
      // fetchProductList function fetchProductList(); */}
      <div className="flex flex-col gap-4 border rounded-md border-gray-300 p-6 bg-white shadow-sm mb-4">
        <h1 className="font-medium text-2xl text-gray-900">Create Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className={`${borderColoring} p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            {errors?.name && (
              <div className="text-red-500 text-xs">{errors.name}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={formValues.description}
              onChange={handleChange}
              className={`${borderColoring} p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            {errors.description && (
              <div className="text-red-500 text-xs">{errors.description}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formValues.price}
              onChange={handleChange}
              className={`${borderColoring} p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            {errors.price && (
              <div className="text-red-500 text-xs">{errors.price}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="stock"
              className="text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              value={formValues.stock}
              onChange={handleChange}
              className={`${borderColoring} p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            {errors.stock && (
              <div className="text-red-500 text-xs">{errors.stock}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="categoryId"
              className="text-sm font-medium text-gray-700"
            >
              Category ID
            </label>
            <input
              id="categoryId"
              name="categoryId"
              type="text"
              value={formValues.categoryId}
              onChange={handleChange}
              className={`${borderColoring} p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            {errors.categoryId && (
              <div className="text-red-500 text-xs">{errors.categoryId}</div>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-medium rounded-md py-3 px-6 mt-4 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 self-start"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormProduct;
