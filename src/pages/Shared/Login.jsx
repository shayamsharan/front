import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ripple from '@/components/magicui/ripple';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Meteors from '@/components/magicui/meteors';
import { authService } from '@/services/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    const checkRedirect = async () => {
        if (authService.getToken() != null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                if (userRole === "PROJECTMANAGER") {
                    navigate('/admin/members');
                } else if (userRole === 'TEAMMEMBER') {
                    navigate('/task');
                } else {
                    toast.error("Something went wrong")
                }
            }
        }
    }
    useEffect(() => {
        checkRedirect();
    }, []);

    const email = useRef(null);
    const password = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await authService.SignIn(email.current.value, password.current.value);
            if (res.status === 200) {
                authService.setToken(res.data);
                toast.success("Hello again!!");
                setTimeout(() => {
                    checkRedirect();
                }, 3000);
            } else {
                toast.error('Invalid email or password');
            }
        } catch (error) {
            console.error('Login Error:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                toast.error(`Login failed: ${error.response.data.message || 'An error occurred'}`);
            } else if (error.request) {
                console.error('Request data:', error.request);
                toast.error('No response from server');
            } else {
                console.error('Error message:', error.message);
                toast.error('Error in setting up request');
            }
        }
    };

    return (
        <div className='h-full w-full flex justify-center items-center bg-gray-100'>
            <Card className="w-1/4 p-4 border-2 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            ref={email} // Attach ref to Input
                            placeholder="Enter Your Email Here"
                            className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            ref={password} // Attach ref to Input
                            placeholder="Enter Your Password Here"
                            className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
