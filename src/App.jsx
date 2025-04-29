import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import Layout from "./shared/components/layout";
import Authenticate from "./shared/components/authenticate-button";
import { SidebarProvider } from "./contexts/sidebar-context";
import Places from "./places/pages/Places";

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<User />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/:userId/places" element={<Places/>}/>
            <Route path="/authenticate" element={<Authenticate />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
};

export default App;
