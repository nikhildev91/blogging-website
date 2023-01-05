import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Button, Link } from '@mui/material';
const LoginFrom = ({ usertype }) => {
    const handleAdminLogin = () => {
        console.log("Admin Login");
    }

    const handleAuthorLogin = () => {
        console.log("Author Login");
    }
    return(
        <Card sx={{ minWidth: 100 }}>
        <CardContent>
        <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '15ch' },
                }}
            >
               <h1>Login</h1>
            </Box>
       
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Username" variant="outlined" />
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '15ch' },
                }}
        
            >
                <Link style={{ marginTop : "20px"}} href="/author/signup">Haven't An Account ? Sign Up</Link>
                <Button variant="contained" color="inherit" style={{ float : "right"}} onClick={() => usertype == "admin" ? handleAdminLogin() : usertype === "author" ? handleAuthorLogin() : ''}>
                    Sign Up
                </Button>
            </Box>
        </CardContent>
    </Card>
    )
}

export default LoginFrom