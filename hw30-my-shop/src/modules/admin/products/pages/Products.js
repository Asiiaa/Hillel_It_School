import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
import { Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';
import ProductsProvider from '../../../common/products/providers/ProductsProvider';
import React from 'react';

function Products() {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <Paper
                    sx={{
                        p: 4,
                        mt: 10,
                    }}
                >
                    <Outlet />
                </Paper>
            </ProductsProvider>
        </CategoriesProvider>
    );
}

export default Products;
