import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FiTrash2 } from 'react-icons/fi';

const AdminMembers = () => {
  const [users, setUsers] = useState([
    { userId: '1', name: 'Gokul', role: 'Developer', email: 'gokul@example.com', contact: '1234567890' },
    { userId: '2', name: 'Harish', role: 'Designer', email: 'harish@example.com', contact: '0987654321' },
    { userId: '3', name: 'Karan', role: 'Manager', email: 'karan@example.com', contact: '1122334455' },
    { userId: '4', name: 'Anitha', role: 'Analyst', email: 'anitha@example.com', contact: '5566778899' },
    { userId: '5', name: 'Deepika', role: 'Tester', email: 'deepika@example.com', contact: '9988776655' },
  ]);

  const [newUser, setNewUser] = useState({
    userId: '',
    name: '',
    role: '',
    email: '',
    contact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, userId: (users.length + 1).toString() }]);
    setNewUser({ userId: '', name: '', role: '', email: '', contact: '' });
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.userId !== userId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Members</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Member
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Member</SheetTitle>
              <SheetDescription>
                Fill in the details of the new member and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="contact" className="text-right">
                    Contact
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={newUser.contact}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Member
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">User ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Contact</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-900">{user.userId}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.contact}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <Button
                    variant="outline"
                    onClick={() => deleteUser(user.userId)}
                    className="text-red-500 border-red-500 px-2 py-1 rounded-full hover:bg-red-100 transition-colors flex items-center"
                  >
                    <FiTrash2 className="mr-1" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMembers;
