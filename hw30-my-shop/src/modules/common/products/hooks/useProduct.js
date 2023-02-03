import { useEffect, useState } from 'react';

import api from '../../../../api';

const EMPTY_PRODUCT = {
    title: '',
    price: '',
    description: '',
    categoryId: 0,
};
export default function useProduct(id) {
    const [product, setProduct] = useState(EMPTY_PRODUCT);

    function fetchProduct() {
        return api.get('products/' + id).then(({ data }) => setProduct(data));
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return product;
}
