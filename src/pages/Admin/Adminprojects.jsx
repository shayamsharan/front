import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Adminprojects = () => {
  const [projects, setProjects] = useState([
    { id: '1', name: 'Website Redesign', dueDate: '2024-09-30' }
  ]);
  const [newProject, setNewProject] = useState({ id: '', name: '', dueDate: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ id: '', name: '', dueDate: '' });
  };

  const handleDelete = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const handleEdit = (projectId) => {
    // Handle edit action
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Project
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Project</SheetTitle>
              <SheetDescription>
                Fill in the details of the new project and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    Project Id
                  </Label>
                  <Input
                    id="id"
                    name="id"
                    value={newProject.id}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Project Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={newProject.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dueDate" className="text-right">
                    Due Date
                  </Label>
                  <Input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    value={newProject.dueDate}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Project
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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Project Id</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Project Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-900">{project.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{project.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{project.dueDate}</td>
                <td className="px-6 py-4 text-sm text-gray-900 flex items-center space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(project.id)}
                    className="text-blue-500 border-blue-500 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors flex items-center"
                  >
                    <FiEdit2 className="mr-1" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(project.id)}
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

export default Adminprojects;
