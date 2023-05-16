import { Project } from "../models/Project.js";

async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getProject(req, res) {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });

    if (!project)
      return res.status(404).json({ message: "Project doesn't exists" });

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createProject(req, res) {
  const { name, priority, description } = req.body;

  try {
    // Don't need to insert key: value
    // just put the value
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteProject(req, res) {
  const { id } = req.params;
  await Project.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(204);
}

export { getProjects, getProject, createProject, updateProject, deleteProject };
