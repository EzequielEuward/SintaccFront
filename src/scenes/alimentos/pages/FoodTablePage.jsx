import React, { useState, useMemo } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TableSortLabel,
  Paper,
  IconButton,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { DashboardLayout } from '../../dashboard/layout';

const initialFoods = [
  { id: 1, name: 'Manzana', category: 'Frutas', calories: 52, protein: 0.3, fat: 0.2, carbs: 14, isFavorite: false },
  { id: 2, name: 'Pollo a la parrilla', category: 'Carnes', calories: 165, protein: 31, fat: 3.6, carbs: 0, isFavorite: false },
  { id: 3, name: 'Arroz integral', category: 'Granos', calories: 216, protein: 4.5, fat: 1.6, carbs: 45, isFavorite: false },
  { id: 4, name: 'Brócoli', category: 'Verduras', calories: 31, protein: 2.5, fat: 0.4, carbs: 6, isFavorite: false },
  { id: 5, name: 'Salmón', category: 'Pescados', calories: 208, protein: 20, fat: 13, carbs: 0, isFavorite: false },
];

export const FoodTablePage = () => {
  const [foods, setFoods] = useState(initialFoods);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const categories = useMemo(() => Array.from(new Set(foods.map(food => food.category))), [foods]);

  const filteredFoods = useMemo(() => {
    return foods
      .filter(food =>
        (food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          food.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === '' || food.category === categoryFilter)
      )
      .sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [foods, searchTerm, categoryFilter, sortConfig]);

  const paginatedFoods = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return filteredFoods.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFoods, currentPage]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const toggleFavorite = (id) => {
    setFoods(prevFoods =>
      prevFoods.map(food =>
        food.id === id ? { ...food, isFavorite: !food.isFavorite } : food
      )
    );
  };

  return (
    <DashboardLayout>
      <Paper style={{ padding: 16 }}>
        <h2>Tabla de Alimentos</h2>
        <div style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <TextField
              variant="outlined"
              placeholder="Buscar alimentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon style={{ marginRight: 8 }} />,
              }}
              fullWidth
            />
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              displayEmpty
              variant="outlined"
              style={{ minWidth: 180 }}
            >
              <MenuItem value="">Todas las categorías</MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Agregar Alimento
            </Button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={sortConfig.key === 'name'}
                    direction={sortConfig.key === 'name' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('name')}
                  >
                    Nombre del Alimento
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortConfig.key === 'category'}
                    direction={sortConfig.key === 'category' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('category')}
                  >
                    Categoría
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={sortConfig.key === 'calories'}
                    direction={sortConfig.key === 'calories' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('calories')}
                  >
                    Calorías
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={sortConfig.key === 'protein'}
                    direction={sortConfig.key === 'protein' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('protein')}
                  >
                    Proteínas (g)
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={sortConfig.key === 'fat'}
                    direction={sortConfig.key === 'fat' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('fat')}
                  >
                    Grasas (g)
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={sortConfig.key === 'carbs'}
                    direction={sortConfig.key === 'carbs' ? sortConfig.direction : 'asc'}
                    onClick={() => handleSort('carbs')}
                  >
                    Carbohidratos (g)
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedFoods.map((food, index) => (
                <TableRow key={food.id} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f5f5f5' }}>
                  <TableCell>{food.name}</TableCell>
                  <TableCell>{food.category}</TableCell>
                  <TableCell align="right">{food.calories}</TableCell>
                  <TableCell align="right">{food.protein}</TableCell>
                  <TableCell align="right">{food.fat}</TableCell>
                  <TableCell align="right">{food.carbs}</TableCell>
                  <TableCell align="center">
                    <IconButton color="default" onClick={() => toggleFavorite(food.id)}>
                      {food.isFavorite ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </IconButton>
                    <IconButton color="default">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <TablePagination
            rowsPerPageOptions={[itemsPerPage]}
            component="div"
            count={filteredFoods.length}
            rowsPerPage={itemsPerPage}
            page={currentPage}
            onPageChange={(event, newPage) => setCurrentPage(newPage)}
          />
        </div>
      </Paper>
    </DashboardLayout>
  );
}

export default FoodTablePage;