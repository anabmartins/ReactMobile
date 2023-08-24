import * as React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
// Telas
import { Home } from "../../screens/Home"; 
import { Profile } from "../../screens/Profile";
import { Environments } from "../../screens/Environments"; 
import { Product } from "../../screens/Product"; 
import { ProductDetails } from "../../screens/ProductDetails"; 
import { ProductProfile } from "../../screens/ProductProfile";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName="Home">
        <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="location-pin" size={22} />,
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Ambientes"
        component={Environments}
        options={{
          drawerLabel: "Environments",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Perfil"
        component={Product}
        options={{
          drawerLabel: "Product",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          drawerLabel: "ProductDetails",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="productProfile"
        component={ProductProfile}
        options={{
          drawerLabel: "productProfile",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />
    </Navigator>
  );
}
