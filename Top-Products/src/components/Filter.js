import React from 'react';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Price Range"
        name="priceRange"
        value={filters.priceRange}
        onChange={handleFilterChange}
      />
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
          <MenuItem value="home">Home</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="amazon">Amazon</MenuItem>
          <MenuItem value="ebay">eBay</MenuItem>
          <MenuItem value="walmart">Walmart</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Rating"
        name="rating"
        value={filters.rating}
        onChange={handleFilterChange}
      />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select
          name="availability"
          value={filters.availability}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="inStock">In Stock</MenuItem>
          <MenuItem value="outOfStock">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
