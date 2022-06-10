// prettier-ignore
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { TopHeader } from "../components/TopHeader";
import { MRegister } from "../models/MRegister";
import DashbordRoutes from "../routes/dashbord/DashbordRoutes";

interface Props { };

export function Dashbord(props: Props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <TopHeader />
      <Header setOpen={setOpen} />
      <NavBar />
      <MRegister open={open} setOpen={setOpen} />
      <DashbordRoutes />
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '1990px',
    backgroundColor: '#f6f9fc',
  }
}));