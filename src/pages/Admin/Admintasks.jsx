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

const Admintasks = () => {
  const [tasks, setTasks] = useState([
    { id: '1', taskName: 'Draft Project Proposal', description: 'Draft a proposal for the upcoming project.', priority: 'High', status: 'Pending', assignedTo: 'User 1', projectName: 'Website Redesign' }
  ]);
  const [newTask, setNewTask] = useState({
    id: '',
    taskName: '',
    description: '',
    priority: 'High',
    status: 'Pending',
    assignedTo: '',
    projectName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({
      id: '',
      taskName: '',
      description: '',
      priority: 'High',
      status: 'Pending',
      assignedTo: '',
      projectName: ''
    });
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEdit = (taskId) => {
    // Handle edit action
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Task
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Task</SheetTitle>
              <SheetDescription>
                Fill in the details of the new task and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    Task ID
                  </Label>
                  <Input
                    id="id"
                    name="id"
                    value={newTask.id}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="taskName" className="text-right">
                    Task Name
                  </Label>
                  <Input
                    id="taskName"
                    name="taskName"
                    value={newTask.taskName}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <select
                    id="priority"
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border rounded-lg"
                    required
                  >
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <select
                    id="status"
                    name="status"
                    value={newTask.status}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border rounded-lg"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="assignedTo" className="text-right">
                    Assigned To
                  </Label>
                  <Input
                    id="assignedTo"
                    name="assignedTo"
                    value={newTask.assignedTo}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="projectName" className="text-right">
                    Project Name
                  </Label>
                  <Input
                    id="projectName"
                    name="projectName"
                    value={newTask.projectName}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Task
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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Task ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Task Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Priority</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Assigned To</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Project Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-900">{task.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.taskName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.description}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.priority}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.status}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.assignedTo}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{task.projectName}</td>
                <td className="px-6 py-4 text-sm text-gray-900 flex items-center space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(task.id)}
                    className="text-blue-500 border-blue-500 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors flex items-center"
                  >
                    <FiEdit2 className="mr-1" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(task.id)}
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

export default Admintasks;
