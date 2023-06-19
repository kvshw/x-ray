"use client";

import Header from "@/components/Header/page";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { Button, Input, StyledEngineProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import Autocomplete from "@mui/material";
import { TextField, Avatar } from "@mui/material";

export default function Home() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <main className="bg-white">
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              className="bg-[#3AD8CA]  h-[100vmin] flex flex-col space-y-4 "
            >
              <Image
                src="/x-ray-logo.png"
                alt="logo"
                width="140"
                height="140"
                className="px-4 pt-4"
              />
              <MoreVertIcon className="absolute top-8 left-44 " />
              <h2 className="text-lg font-bold pl-4">Doctor</h2>
              <Grid
                container
                spacing={2}
                className=" gap-2 flex items-center pl-8"
              >
                <Grid>
                  <DashboardIcon className="w-10" />
                </Grid>
                <Grid>Dashboard</Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                className=" gap-2 flex items-center pl-8"
              >
                <Grid>
                  <DescriptionIcon className="w-10" />
                </Grid>
                <Grid>Prescription</Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                className=" gap-2 flex items-center pl-8"
              >
                <Grid>
                  <ScheduleIcon className="w-10" />
                </Grid>
                <Grid>Appointments</Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                className=" gap-2 flex items-center pl-8"
              >
                <Grid>
                  <CreateIcon className="w-10" />
                </Grid>
                <Grid>Templates</Grid>
              </Grid>
              <h2 className="text-lg font-bold pl-4">Patients</h2>
              <Grid className="pl-4">All Patients</Grid>
              <Grid className="pl-4">History</Grid>
              <Grid className="pl-4">Reports</Grid>
            </Grid>

            <Grid item xs={10}>
              <Grid
                container
                spacing={4}
                className="box-shadow-nav w-[95%] h-16 ml-6 my-6 bg-white rounded-xl flex items-center p-0"
              >
                <Grid item xs={5} className="p-0">
                  <TextField
                    label="Type here to search"
                    size="small"
                    sx={{
                      width: "500px",
                      bgcolor: "#ceebee",
                      borderRadius: "12px",
                      outline: "none",
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: "14px", borderRadius: "50px" },
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  1
                </Grid>
                <Grid item xs={4}>
                  1
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="flex items-center text-black gap-4"
                >
                  <Grid>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className="w-10 h-10"
                    />
                  </Grid>
                  <Grid>
                    <Grid className="text-[16px]">Kavishwa</Grid>
                    <Grid className="text-[12px] text-green-400">Online</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </StyledEngineProvider>
    </>
  );
}
