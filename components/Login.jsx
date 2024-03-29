import { Google } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { signIn } from "next-auth/react";
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function Login() {
     return (
          <>
               <Head>
                    <title>Login</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <Box
                    sx={{
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         justifyContent: "center",
                         flex: 1,
                         my: "80px",
                         mt: "40px",
                    }}
                    component="section"
               >
                    <Image
                         className=""
                         src={"https://help.twitter.com/content/dam/help-twitter/brand/logo.png"}
                         width={250}
                         height={250}
                         objectFit="cover"
                         priority
                    />
                    <Box sx={{ mt: "20px" }} >
                         {
                              /*
                              {Object.values(providers).map((provider) => (
                                   <Button
                                        key={provider.name}
                                        onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                                        variant="outlined"
                                        size='large'
                                        startIcon={<GoogleIcon />}
                                   >
                                        Sign In With {provider.name}
                                   </Button>
                              ))}
                              */
                         }
                         <Button
                              onClick={() => signIn("google", { callbackUrl: "/" })}
                              variant="outlined"
                              size='large'
                              startIcon={<Google />}
                         >
                              Sign In With Google
                         </Button>
                    </Box>
               </Box>
          </>
     )
}

export default Login;