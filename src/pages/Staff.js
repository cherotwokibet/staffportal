import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import axios from "axios";

function Staff() {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/employees/", {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const y = res.data;
        console.log(y);
        setEmployees(y);
      })
      .catch((err) => {
        console.log("kuna error");
        console.error(err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Staff Members">
        <TableHead>
          <TableRow>
            <TableCell>Staff No</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees !== null
            ? employees.map((emp) => (
                <TableRow
                  key={emp["staff_no"]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {emp["staff_no"]}
                  </TableCell>
                  <TableCell align="right">{emp["first_name"]}</TableCell>
                  <TableCell align="right">{emp["gender"]}</TableCell>
                  <TableCell align="right">{emp["job_title"]}</TableCell>
                  <TableCell align="right">{emp["grade"]}</TableCell>
                  <TableCell align="right">{emp["dimension_code_1"]}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Staff;
