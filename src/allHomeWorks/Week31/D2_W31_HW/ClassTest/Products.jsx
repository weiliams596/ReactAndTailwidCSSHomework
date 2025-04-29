import axios from "axios";
import React, { useEffect, useReducer } from "react";


const initialState = {
  products: [],
  isLoading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "axios_start":
      return { ...initialState };
    case "axios_success":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        error: "",
      };
    case "axios_error":
      return {
        ...state,
        isLoading: false,
        error: action.err,
      };
    default:
      return state;
  }
};

export default function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "axios_start" });
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          console.log(response.data);
          dispatch({ type: "axios_success", payload: response.data });
        } else {
          dispatch({ type: "axios_error", err: "Error fetching data" });
        }
      } catch (error) {
        dispatch({ type: "axios_error", err: error.message });
      }
    }
    fetchData();
  }, []);
  return (
    <div className="products-container">
      {state.isLoading && <p>Loading...</p>}
      {!state.isLoading &&
        state.products.map((product, index) => {
          return (
            <div key={index} className="product-card">
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "300px", height: "400px", objectFit: "cover" }}
              />
              <p>Price: {product.price}$</p>
              <p>{product.description}</p>
            </div>
          );
        })}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
