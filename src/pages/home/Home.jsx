import { useState } from "react";
import ProductsApi from "../../api/ProductsApi";
import { useEffect } from "react";
import Search from "../../components/search/Search";
import Categories from "../../components/categories/Categories";
import ProductList from "../../components/products/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchProducts() {
    await ProductsApi.fetchDatas().then((resp) => setProducts(resp));
  }

  const getCategories = () => {
    let categoryList = [];
    if (products) {
      products.forEach((product) => {
        if (!categoryList.includes(product.productCategory)) {
          categoryList.push(product.productCategory);
        }
      });
    }

    return categoryList;
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    setCategories(getCategories());
  }, [products]);

  return (
    <div className="bg-slate-300 h-full">
      <Search />
      <div className="container mx-auto">
        <Categories categories={categories} />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
