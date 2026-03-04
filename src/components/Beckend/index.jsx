import React, { useState, useEffect } from "react";

function Beckend() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(6);
  const limit = 6;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [page]);

  return (
    <div className="container">
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.thumbnail} />
            <h3>{p.title}</h3>
            <b>
              <p>${p.price}</p>
            </b>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
          {" "}
          &lt;{" "}
        </button>

        {[0, 1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={page === num ? "active" : ""}
          >
            {num + 1}
          </button>
        ))}

        <button onClick={() => setPage((p) => p + 1)} disabled={page === 5}>
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
}

export default Beckend;
