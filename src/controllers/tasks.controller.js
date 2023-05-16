import { Task } from "../models/Task.js";

async function createTask(req, res) {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });

    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });

    if (!task)
      return res.status(404).json({ message: "Project doesn't exists" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findAll({
      where: {
        id,
      },
    });
    task.set(req.body);
    await task.save();

    return res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {}
  res.status(500).json({ message: error.message });
}

export { createTask, getTasks, getTask, updateTask, deleteTask };
