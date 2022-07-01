import React from "react";
// import { Link } from "react-router-dom";
import {
  Avatar,
  Container,
  CssBaseline,
  Grid,
  createTheme,
  Typography,
  List,
} from "@mui/material";

import profile_img from "../images/male.png";

const theme = createTheme();

function MyAccount() {
  return (
    <div>
      <Container>
        <CssBaseline />
        <Grid
          container
          flex={1}
          direction="row"
          alignItems="flex-start"
          // justifyContent="space-between"
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          <Grid
            item
            xs={12}
            flex={1}
            // sx={{
            //   flexDirection: "row",
            //   alignItems: "flex-start",
            //   justifyContent: "flex-start",
            // }}
          >
            <Avatar
              alt="prof_pic"
              src={profile_img}
              sx={{
                border: `3px solid white`,
                width: theme.spacing(13),
                height: theme.spacing(13),
                boxShadow: theme.shadows[3],
              }}
            />
          </Grid>
          <Grid item flex={1} alignItems="flex-start" justifyItems="flex-start">
            <List>
              <Typography>Staff No : 200100 </Typography>
              <Typography>Name: </Typography>
              <Typography>Role: </Typography>
              <Typography>Department : </Typography>
              <Typography>Email: </Typography>
              <Typography>Gender: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Marital Status: </Typography>
              <Typography>No of Children: </Typography>
              <Typography>Next of Kin: </Typography>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MyAccount;
