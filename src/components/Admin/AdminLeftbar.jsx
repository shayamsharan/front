import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Clipboard } from 'lucide-react';
import { authService } from '@/services/auth';

const Adminleftbar = () => {
    const navigate = useNavigate();

    const AdminLinks = [
        {
            title: 'Projects',
            link: 'admin/projects',
            icon: LayoutDashboard,
        },
        {
            title: 'Tasks',
            link: 'admin/tasks',
            icon: Clipboard,
        },
        {
            title: 'Members',
            link: 'admin/members',
            icon: Users,
        },
    ];

    const handleLogout = () => {
        authService.SignOut(); 
        navigate('/');
    };

    return (
        <div className='h-screen w-1/6 flex flex-col bg-gray-100 pt-10'>
            <div className='w-full flex justify-start pl-5'>
                <h1 className='text-xl font-bold'>Admin</h1>
            </div>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4 mt-4'>
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className='p-5 border-b-4 border-gray-300 hover:border-primary font-bold mt-2 w-full'
                    >
                        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            {data.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className='h-1/6 w-full flex flex-col justify-center items-center'>
                <button
                    className='text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg transition-all duration-200'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Adminleftbar;