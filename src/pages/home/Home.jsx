/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProductsApi from "../../api/ProductsApi";
import { useEffect } from "react";
import Search from "../../components/search/Search";
import Categories from "../../components/categories/Categories";
import ProductList from "../../components/products/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

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

  const filteredProductsByName = products.filter((p) => {
    const containsProducts = p.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return containsProducts;
  });

  const filteredProductsByCategory = products.filter((p) => {
    const containsProducts = p.productCategory
      .toLowerCase()
      .includes(searchCategory.toLowerCase());

    return containsProducts;
  });

  return (
    <div className="bg-slate-300 h-full">
      <Search products={products} setSearchText={setSearchText} />
      <div className="container mx-auto">
        <Categories
          categories={categories}
          setSearchCategory={setSearchCategory}
        />
      </div>
      <ProductList products={filteredProductsByName} />
    </div>
  );
};

export default Home;
