import {Routes, Route} from "react-router-dom"
import {Navbar} from "./Pages/Navbar"
import { Products } from "./Pages/Products";
import { Aboutus } from "./Pages/Aboutus";
import { Contactus } from "./Pages/Contactus";
import { Faq } from "./Pages/Faq";
import { Cart } from "./Pages/Cart";
import { Male } from "./Products/Male";
import { Female } from "./Products/Female";
import { Children } from "./Products/Children";
import { SingleProduct } from "./Products/SingleProduct";
import { Login } from "./Pages/Login";
import { RequiredAuth } from "./Component/RequiredAuth";


function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Navbar/>
      <Routes>
        <Route path="product/*" element={<Products />}>
          <Route path="male" element={<Male />} />
          <Route path="female" element={<Female />} />
          <Route path="children" element={<Children />} />
        </Route>
        //single
        <Route path="/s/:idd" element={<SingleProduct />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
// https://movie-fake-server.herokuapp.com/products
