
import Box from '@mui/material/Box';

import { DrawerHeader } from '../components.js/sidebar';
import SideBar from '../components.js/sidebar';

export default function AuthorDashboard() {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar header = "Dashboard" text = "Employees"/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <h1>Author Dashboard</h1>
            </Box>
        </Box>
    );
}
