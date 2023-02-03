import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

import CategoryName from '../../../common/categories/components/CategoryName';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import React from 'react';
import useProducts from '../../../common/products/hooks/useProducts';
import useProductsList from '../../../common/products/hooks/useProductsList';

function ProductsList() {
    const { remove } = useProducts();
    const products = useProductsList();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                            {item.id}
                        </TableCell>
                        <TableCell align="right">{item.title}</TableCell>
                        <TableCell align="right">
                            <CategoryName id={item.categoryId} />
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">
                            <IconButton component={NavLink} to={'./' + item.id}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => remove(item.id)}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ProductsList;
