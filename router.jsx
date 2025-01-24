import { createBrowserRouter } from "react-router-dom"
import Layout from "./src/components/Layout";
import ErrorNotFoundPage from "./src/pages/ErrorNotFoundPage";
import DashboardPage from "./src/pages/DashboardPage";
import ProductPage from "./src/pages/ProductPage";
import VoucherPage from "./src/pages/VoucherPage";
import VoucherDetailPage from "./src/pages/VoucherDetailPage";
import SalePage from "./src/pages/SalePage";
import CreateProductPage from "./src/pages/CreateProductPage";
import  EditProductPage  from "./src/pages/EditProductPage";
const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <ErrorNotFoundPage/>,
        children : [
            {
                path : "/",
                element : <DashboardPage/>   
            },
            {
                path : "product",
                element : <ProductPage/>   
            },
            {
                path : "product/create",
                element : <CreateProductPage/>   
            },
            {
                path : "product/edit/:id",
                element : <EditProductPage/>   
            },
            {
                path : "voucher",
                element : <VoucherPage/>   
            },
            {
                path : "sale",
                element : <SalePage/>   
            },
            {
                path : "voucher-detail",
                element : <VoucherDetailPage/>   
            },
        ]
    }
])

export default router;