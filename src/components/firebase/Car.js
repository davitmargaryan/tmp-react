import { useState } from "react";
import {
  CircularProgress,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import SaveIcon from "@mui/icons-material/Save";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Car = ({ car, getCars }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [color, setColor] = useState(car.data.color);
  const [year, setYear] = useState(car.data.year);
  const [brand, setBrand] = useState(car.data.brand);
  const [isLoading, setIsLoading] = useState(false);

  const onEditCarClick = async () => {
    setIsEditMode(true);
  };

  const onDeleteCarClick = async () => {
    setIsLoading(true);
    await deleteDoc(doc(db, "car", car.id));
    getCars();
    setIsLoading(false);
  };

  const onSaveButtonClick = async () => {
    setIsLoading(true);
    await setDoc(doc(db, "car", car.id), {
      color,
      year: +year,
      brand,
    });
    getCars();
    setIsEditMode(false);
    setIsLoading(false);
  };

  return (
    <TableRow
      component="div"
      key={car.id}
      sx={{ "&:last-child div, &:last-child div": { border: 0 } }}
    >
      <TableCell component="div" scope="row">
        {isEditMode ? (
          <TextField
            size="small"
            label="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        ) : (
          car.data.color
        )}
      </TableCell>
      <TableCell>
        {isEditMode ? (
          <TextField
            size="small"
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        ) : (
          car.data.year
        )}
      </TableCell>
      <TableCell>
        {isEditMode ? (
          <TextField
            size="small"
            label="Year"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        ) : (
          car.data.brand
        )}
      </TableCell>
      <TableCell>
        {isEditMode ? (
          <>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <IconButton aria-label="edit" onClick={onSaveButtonClick}>
                <SaveIcon />
              </IconButton>
            )}
          </>
        ) : (
          <>
            <IconButton aria-label="edit" onClick={onEditCarClick}>
              <ModeEditOutlineIcon />
            </IconButton>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <IconButton aria-label="delete" onClick={onDeleteCarClick}>
                <DeleteOutlineIcon />
              </IconButton>
            )}
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default Car;
