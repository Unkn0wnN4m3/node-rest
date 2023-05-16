import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Task } from "./Task.js";

export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

// Many tasks can be part of one project
Project.hasMany(Task, {
  // "projectID" will be linked to "id" from Task model
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
