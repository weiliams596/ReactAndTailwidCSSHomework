import React, { useEffect, useState } from "react";

export default function useFilter({ orders, keyName }) {
  const [searcher, setSearcher] = useState("");
  let filterOrders = [];
  useEffect(() => {
    filterOrders =
      filterOrders.length &&
      orders.filter((order) =>
        order[keyName].value.toLowerCase().includes(searcher.toLowerCase())
      );
  }, [orders, searcher]);
  return { searcher, setSearcher, filterOrders };
}
