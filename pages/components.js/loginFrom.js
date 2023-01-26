import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Button, Link } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
const LoginFrom = ({ usertype }) => {

    const [ username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const router = useRouter()
    const handleAdminLogin = () => {
        console.log("Admin Login");
    }

    const handleAuthorLogin = async () => {
       const response = await fetch('/api/login', {
        body : JSON.stringify({ username, usertype, password}),
        method : "POST"
       })
       const data = await response.json()
       const { message, status, result} = data
       if(status){
        router.push('/author')
       }else{
        setIsError(true)
        setErrorMsg(message)
       }
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
       {
        isError === true && <Box
        sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
    >

        <p style={{ color : "red"}}>{errorMsg}</p>
    </Box>
       }
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" error={isError && true} helperText={isError && "Invalid Username."} value={username} onChange={(e) => setUsername(e.target.value)} label="Username" variant="outlined" />
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" error={isError && true} helperText={isError && "Invalid Password"} value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" variant="outlined" />
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '15ch' },
                }}
        
            >
                <Link style={{ marginTop : "20px"}} href="/author/signup">Haven't An Account ? Sign Up</Link>
                <Button variant="contained" color="inherit" style={{ float : "right"}} onClick={() => usertype == "admin" ? handleAdminLogin() : usertype === "author" ? handleAuthorLogin() : ''}>
                    Login
                </Button>
            </Box>
        </CardContent>
    </Card>
    )
}

export default LoginFrom