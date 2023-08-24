import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Drawer
import { DrawerRoutes } from '../drawer/drawer.routes';
//Telas
import { Login } from "../../screens/ScreenLogin";
import { Register } from "../../screens/ScreenRegister";
// Handle Password
import { SendEmail } from "../../screens/ScreenSEmail";
import { ForgetPassword } from "../../screens/ForgetPassword" 
// Home
import { Home } from "../../screens/Home"
import { Profile } from "../../screens/Profile"
import { Product } from "../../screens/Product"
import { Environments } from "../../screens/Environments"
import { ProductDetails } from "../../screens/ProductDetails"
import { ProductProfile } from "../../screens/ProductProfile"

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Login">
       <Screen
        name="DrawerRoutes"
        options={{
          title: "DrawerRoutes",
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Screen
        name="Login"
        options={{
          title: "Login",
          headerShown: false,
        }}
        component={Login}
      />
      <Screen
        name="ForgetPassword"
        options={{
          title: "ForgetPassword",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={ForgetPassword}
      />

      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
      />

      <Screen
        name="Register"
        options={{
          title: "Screen Register",
          headerShown: false,
        }}
        component={Register}
      />
      <Screen
        name="SendEmail"
        options={{
          title: "SendEmail",
          headerShown: false,
        }}
        component={SendEmail}
      />
      <Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
        component={Profile}
      />
      <Screen
        name="Environments"
        options={{
          title: "Environments",
          headerShown: false,
        }}
        component={Environments}
      />
      {/* <Screen
        name="Environmentsprofile"
        options={{
          title: "Environmentsprofile",
          headerShown: false,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Environmentsprofile}
      /> */}
      <Screen
        name="Product"
        options={{
          headerShown: false,
          title: "product",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Product}
      />
      <Screen
        name="Productdetails"
        options={{
          headerShown: false,
          title: "Productdetails",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={ProductDetails}
      />

      <Screen
        name="ProductProfile"
        options={{
          headerShown: false,
          title: "ProductProfile",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={ProductProfile}
      />
    </Navigator>
  );
}
