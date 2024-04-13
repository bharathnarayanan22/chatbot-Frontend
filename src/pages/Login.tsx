import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import CustomizedInput from "../components/shared/CustomizedInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import Spline from '@splinetool/react-spline';

const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        console.log(email, password)
        try {
            toast.loading("Signing In", { id: "login" })
            await auth?.login(email, password)
            toast.success("Signed In Succeessfully", { id: "login" })
        } catch (error) {
            console.log(error)
            toast.error("Signing In Failed", { id: "login" })
        }
    }

    useEffect(() => {
        if(auth?.user){
            return navigate("/chat")
        }
    },[auth])
    return (
        <Box width={'100%'} height={'100%'} display={'flex'} flex={1}>
            <Box padding={8} mt={8} display={{ md: "flex"}}>
                {/* <img src="airobot.png" alt="Robot" style={{ width: "400px" }} /> */}
                <Spline scene="https://prod.spline.design/8koAhSiaurIdL1Vr/scene.splinecode" />
            </Box>
            <Box
                display={"flex"}
                flex={{ xs: 1, md: 0.5 }}
                justifyContent={"center"}
                alignItems={"center"}
                padding={2}
                ml={"auto"}
                mt={16}
            >
                <form
                onSubmit={(handleSubmit)}
                    style={{
                        margin: "auto",
                        padding: "30px",
                        boxShadow: "-5px -5px 105px #64f3d5",
                        borderRadius: "10px",
                        border: "none",
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            
                        }}>
                        <Typography
                            variant="h4"
                            textAlign="center"
                            padding={2}
                            fontWeight={600}>
                            Login
                        </Typography>
                        <CustomizedInput type="email" name="email" label="Email" />
                        <CustomizedInput type="password" name="password" label="Password" />
                        <Button type="submit" sx={{
                            px: 2,
                            py: 1,
                            mt: 2,
                            width: "400px",
                            borderRadius: 2,
                            bgcolor: "#00fffc",
                            ":hover": {
                                bgcolor: "white",
                                color: "black",
                            }
                        }}
                        endIcon={<IoIosLogIn />}>
                            LOGIN
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Login