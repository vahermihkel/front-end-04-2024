import React, { useEffect, useState } from "react";
// import productsFromFile from "./../../data/products.json";
// import cart from "./../../data/cart.json";
import styles from "../../css/HomePage.module.css";
import Button from "@mui/material/Button";
import CarouselGallery from "../../components/CarouselGallery";
import { Spinner } from "react-bootstrap";
import SortButtons from "../../components/home/SortButtons";
import Product from "../../components/home/Product";
import Card from "../../components/Card";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 
function HomePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

  const [categoriesFromProducts, setCategoriesFromProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProductsFromDb(json);
        findCategoriesByProduct(json);
      })
  }, [url]);

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json)
      })
  }, [categoriesUrl]);

  const setProductsFromDb = (json) => {
    setProducts(json);
    setDbProducts(json);
    setLoading(false);
  }

  const findCategoriesByProduct = (json) => {
    const result = [...new Set(json.map(product => product.category))];
      setCategoriesFromProducts(result);
  }
 
 
  function filterByCategory(categoryClicked) {
    // reset();
    // console.log(products);
    // setProducts(dbProducts); // muudab alles funktsiooni lõpus
    // console.log(products);
    const result = dbProducts.filter((p) => p.category === categoryClicked);
    setProducts(result); 
  }

  // const filterMens = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("men's"));
  //   setProducts(ansver);
  // }
 
  // const filterWomen = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("women's"));
  //   setProducts(ansver);
  // }
 
  // const filterJewel = () => {
  //   const ansver = productsFromFile.filter(t => t.category === "jewelery");
  //   setProducts(ansver);
  // }
 
  // const filterElectronic = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("electronic"));
  //   setProducts(ansver);
  // }
 
  // function reset() {
  //   setProducts(productsFromFile);
  // }

  
 
  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>


      <CarouselGallery />

      <Card 
        headerText={"Uuskasutatud seadmed"} 
        contentText={"Vali targalt: uue ringi seade töötab nagu uus, aga säästab raha ja keskkonda."}
        buttonText={"Vaatan lähemalt"} />

      <SortButtons 
        products={products} 
        setProducts={setProducts} />

      <br /><br />

      {categories.map(category => 
        <Button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </Button>
      )}

      <br /><br />

      {categoriesFromProducts.map(category => 
        <Button key={category} onClick={() => filterByCategory(category)}>
          {category}
        </Button>
      )}

      {/* <Button onClick={() => filterByCategory("men's clothing")}>men's clothing</Button>
      <Button onClick={() => filterByCategory("jewelery")}>jewelery</Button>
      <Button onClick={() => filterByCategory("electronics")}>electronics</Button> */}

      <div>Total products: {products.length}</div>

      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
 
export default HomePage;