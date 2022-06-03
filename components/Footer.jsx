import { Grid } from "@mui/material";
import { useState } from "react";
import ItemSwiper from "../components/ItemSwiper";
import SearchBar from "../components/searchBar";

export default function Footer() {

    const [search, setSearch] = useState("");

    const searchItemHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <Grid item xs={12} container>
                <Grid item xs={4}>
                    {/* SubTitle */}
                </Grid>
                <Grid item xs={4}>
                    {/* All No Button */}
                </Grid>
                <Grid item xs={4}>
                    <SearchBar updateSearch={searchItemHandler}></SearchBar>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ItemSwiper search={search}></ItemSwiper>
            </Grid>
            <Grid item xs={12}>
                {/* Sport markers */}
            </Grid>
            <Grid item xs={12}>
                {/* Adresse */}
            </Grid>
            <Grid item xs={12}>
                {/* Options */}
            </Grid>
            <Grid item xs={12}>
                {/* Itinerary Button */}
            </Grid>
        </>
    );



}