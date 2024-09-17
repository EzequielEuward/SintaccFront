import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const PatientTable = ({ patients, onEdit, onDelete, onView }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Identificación</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.nombre}</TableCell>
              <TableCell>{patient.apellido}</TableCell>
              <TableCell>{patient.edad}</TableCell>
              <TableCell>{patient.identificacion}</TableCell>
              <TableCell>
                <IconButton onClick={() => onView(patient)}><VisibilityIcon /></IconButton>
                <IconButton onClick={() => onEdit(patient.id)}><EditIcon /></IconButton>
                <IconButton onClick={() => onDelete(patient)}><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientTable;
