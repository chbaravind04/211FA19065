import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { Container, TextField, Button } from '@mui/material';

const AllProducts = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    // Add filter logic here
  };

  return (
    <Container>
      <TextField name="category" label="Category" onChange={handleFilterChange} />
      <TextField name="company" label="Company" onChange={handleFilterChange} />
      <TextField name="rating" label="Rating" onChange={handleFilterChange} />
      <TextField name="priceRange" label="Price Range" onChange={handleFilterChange} />
      <TextField name="availability" label="Availability" onChange={handleFilterChange} />
      <Button onClick={applyFilters}>Apply Filters</Button>
      <ProductList filters={filters} />
    </Container>
  );
};

export default AllProducts;
