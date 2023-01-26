
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from "@mui/material";

import { DrawerHeader } from '../components.js/sidebar';
import SideBar from '../components.js/sidebar';
import Cards from '../components.js/Cards';
import { useRouter } from 'next/router';

export default function Posts() {

    let router = useRouter()
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar header="My Posts"/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid
                    align="center"
                    alignItems="center"
                    justify="center"
                >
                    <Grid style={{ margin: 20 }}>
                    <Typography variant="h4">
                            <strong style={{ float: "left" }}>My Posts</strong>
                        </Typography>
                       
                        <Typography>
                            <Button onClick={() => router.push('/author/createpost')} style={{ float : "right"}}>New Post</Button>
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} alignItems="center" justify="center">
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: 25 }}>
                            <Cards />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: 25 }}>
                            <Cards />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: 25 }}>
                            <Cards />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: 25 }}>
                            <Cards />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginBottom: 25 }}>
                            <Cards />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
