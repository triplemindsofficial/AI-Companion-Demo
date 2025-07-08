import { React, useState } from "react";
import { Grid, Container, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useAppSelector, useAppDispatch } from "../../Hooks/index";
import {
  loginRequest,
  loginFailure,
  loginSuccess,
  logout,
} from "../../Reducers/Auth";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import "../Forms/signin.css";

function SignInForm() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();
  const URL = process.env.REACT_APP_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email", email, "password", password);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginRequest());

       const bodyData = {email: email,password: password};
        try {
            const response = await axios.post(`${URL}/auth/login`, bodyData,{
                headers: {'Content-Type': 'application/json'},
            });
            dispatch(loginSuccess({ token: response.data.access_token}));
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
            dispatch(loginFailure({ error: error.message }));
        }



};

  return (
    <Card className="signInCard">
      <CardContent>
        <Typography component={"h2"} sx={{ marginBottom: 4 }}>
          <LockPersonIcon/> Login to your account
        </Typography>
        <Box container spacing={6} className="signInForm" component="form">
          <Box size={{ xs: 12 }} className="formSect" sx={{ marginBottom: 2 }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Box>
          <Grid size={{ xs: 12 }} className="formSect" sx={{ marginBottom: 2 }}>
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            </Grid>
            <Grid size={{ xs: 12 }} className="formSect" sx={{ marginTop: 2,textAlign: "center" }}>
              <Button
                variant="contained"
                className="btn signIn"
                onClick={handleLogin}
                // disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </Button>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
export default SignInForm;
