import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography color="textSecondary">{product.company}</Typography>
        <Typography color="textPrimary">Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
        <Button onClick={() => navigate(`/product/${product.id}`)}>View Details</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
