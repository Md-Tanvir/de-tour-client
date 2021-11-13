import "./App.css";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import MyOrders from "./components/MyOrders/MyOrders";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddServices from "./components/AddServices/AddServices";
import Error from "./components/Error/Error";
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
             <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
