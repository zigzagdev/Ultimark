import { Grid} from "@mui/material";
import Header from "./Header";

export default function App() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}></Grid>
                <Grid item xs={false} sm={8}>
                </Grid>
                <Grid item xs={false} sm={2}></Grid>
            </Grid>
        </Grid>
    );
}