import { Autocomplete, Grid, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import PositionButton from "/components/PositionButton.jsx";
import OptionButtons from "/components/OptionButtons.jsx";
import ItineraireButton from "/components/ItineraireButton.jsx";
import GroupButton from "/components/GroupButton.jsx";


export default function Home() {
  const Maps = dynamic(() => import("../components/Maps"), {
    ssr: false,
  });
  const menuOpen = false;



  return (
    <Grid container sx={{ height: "100vh", width: "100%" }}>
      <Grid item xs={12} container sx={{ height: "12%", width: "100%" }}>
        <Grid item xs={12}>
          {/* Title */}
        </Grid>
        <Grid item xs={10}>
          {/* Search bar */}
        </Grid>
        <Grid item xs={2}>
          {/* Position Button */}
          <PositionButton />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ height: menuOpen ? "38%" : "67%", width: "100%" }}
      >
        
        <Maps />
      </Grid>
        <OptionButtons />
        <ItineraireButton />
        <GroupButton />
      <Grid
        item
        xs={12}
        container
        sx={{ height: menuOpen ? "54%" : "21%", width: "100%" }}
      >

        <Footer></Footer>
        
      </Grid>
    </Grid>
  );
}
