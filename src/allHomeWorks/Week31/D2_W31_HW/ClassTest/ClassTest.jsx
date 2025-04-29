import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  books: [],
  isLoading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "axios_start":
      return {...initialState };
    case "axios_success":
      return {
        ...state,
        books: action.payload,
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

export default function ClassTest() {
  // let [books,setBooks] = useState([]);
  // let [isLoading,setIsLoading] = useState(true);
  // let [error,setError] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "axios_start" });
        const response = await axios.get(
          "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books"
        );
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
    <div>
      {state.isLoading && <p>Loading...</p>}
      {!state.isLoading &&
        state.books.map((book, index) => {
          return (
            <div key={index} className="product-card">
              <h2>{book.title}</h2>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "300px", height: "400px", objectFit: "cover" }}
              />
              <p>{book.author}</p>
              <p>{book.description}</p>
            </div>
          );
        })}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
