import React from 'react';
import { useQuery } from 'react-query';

import Product from '../components/Product';
function Home(props) {
  const { isLoading, error, data } = useQuery('productsListData', () =>
    fetch('http://localhost:8000/products/api/products/').then((res) =>
      res.json()
    )
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const { onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {data.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
export default Home;
