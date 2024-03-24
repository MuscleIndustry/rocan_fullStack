import { Routes } from "@generouted/react-router";
import { createRoot } from "react-dom/client";
import CustomLayout from "./layout";

createRoot(document.getElementById("root")!).render(
  <CustomLayout>
    <Routes />
  </CustomLayout>
);
