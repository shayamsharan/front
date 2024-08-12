import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpManager, SignUpMember } from '@/services/api'; // Adjust import based on your file structure

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    role: 'Team Member' // Default role set to 'Team Member'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      toast.error('Please select a role');
      return;
    }

    try {
      let res;
      if (formData.role === "Project Manager") {
        res = await SignUpManager(
          formData.name,
          formData.email,
          formData.contact,
          formData.password,
          "PROJECTMANAGER"
        );
      } else if (formData.role === "Team Member") {
        res = await SignUpMember(
          formData.name,
          formData.email,
          formData.contact,
          formData.password,
          "TEAMMEMBER"
        );
      }

      if (res.data.includes('registered successfully')) {
        toast.success('Registration successful');
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center bg-gray-100'>
      <Card className="w-1/4 p-4 border-2 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-gray-800">Register</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Your Name Here"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email Here"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                placeholder="Enter Your Password Here"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact" className="text-gray-700">Contact</Label>
              <Input
                id="contact"
                type="text"
                placeholder="Enter Your Contact Here"
                value={formData.contact}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role" className="text-gray-700">Role</Label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              >
                <option value="Team Member">Team Member</option>
                <option value="Project Manager">Project Manager</option>
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Register;
