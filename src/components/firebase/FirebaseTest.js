import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

import Car from "./Car";

const FirebaseTest = () => {
  const [cars, setCars] = useState([]);
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCars = async function () {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, "car"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setCars(arr);
    setIsLoading(false);
  };

  useEffect(() => {
    getCars();
  }, []);

  const onAddCarClick = async () => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, "car"), {
        color: color,
        year: +year,
      });
      setColor("");
      setYear("");
      getCars();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ margin: 1, alignItems: "center" }}>
        <Grid item xs={4}>
          <TextField
            label="Color"
            variant="outlined"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Year"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button size="small" variant="outlined" onClick={onAddCarClick}>
            Add car
          </Button>
        </Grid>
      </Grid>

      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          {!cars.length ? (
            <Typography>No cars created yet</Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table
                component="div"
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead component="div">
                  <TableRow component="div">
                    <TableCell component="div">
                      <Typography variant="h5">Color</Typography>
                    </TableCell>
                    <TableCell component="div">
                      <Typography variant="h5">Year</Typography>
                    </TableCell>
                    <TableCell component="div">
                      <Typography variant="h5">Brand</Typography>
                    </TableCell>
                    <TableCell component="div">
                      <Typography variant="h5">Actions</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody component="div">
                  {cars.map((car) => (
                    <Car car={car} getCars={getCars} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </div>
  );
};

export default FirebaseTest;
