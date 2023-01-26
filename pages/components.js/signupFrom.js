import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Button, Link } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
const SignupForm = ({ usertype }) => {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const handleAdminSignup = () => {
        console.log("Admin Login");
    }

    const handleAuthorSignup = async () => {
        if(password === confirmPassword){
            const response = await fetch(`/api/signup`, {
                body: JSON.stringify({firstName, lastName, username, email, password, usertype}),
                method: "POST"
            })
            const data = await response.json()
            if(data.message === 'Successfullty SignUp'){
                router.push('/author')
            }

        }else{
            setIsError(true)
        }
    }
    return (
        <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <Box
                    // sx={{
                    //     '& > :not(style)': { width: '20ch' },
                    // }}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <h1>Sign Up</h1>
                </Box>

                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined" />
                </Box>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" variant="outlined" />
                    <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                </Box>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" helperText={isError && "Not Match Password and Confirm Password."} error={isError ? true : false} value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" variant="outlined" />
                    <TextField id="outlined-basic" helperText={isError && "Not Match Password and Confirm Password."} error={isError ? true : false}  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" label="Confirm Password" variant="outlined" />
                </Box>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '15ch' },
                    }}

                >
                    <Link style={{ marginTop: "20px" }} href="/author/login">Have An Account ? Login</Link>
                    <Button variant="contained" color="inherit" style={{ float: "right" }} onClick={() => usertype == "admin" ? handleAdminSignup() : usertype === "author" ? handleAuthorSignup() : ''}>
                        Sign Up
                    </Button>
                </Box>

            </CardContent>
        </Card>
    )
}

export default SignupForm