import { Router } from "express";
import { crearTipoEspecialidad, listaTipoEspecialidad, eliminarTipoEspecialidad, listaTipoEspecialidadId,actualizarTipoEspecialidad, listaTipoEspecialidadNombre } from "../controllers/TipoEspecialidad.controller.js";
export  const  tipoEspecialidadRouter = Router()

tipoEspecialidadRouter.route("/tipoespecialidad").post(crearTipoEspecialidad).get(listaTipoEspecialidad);
tipoEspecialidadRouter.route("/tipoespecialidad/:id").delete(eliminarTipoEspecialidad);
tipoEspecialidadRouter.route("/tipoespecialidad/:id").get(listaTipoEspecialidadId);
tipoEspecialidadRouter.route("/tipoespecialidad/:id").put(actualizarTipoEspecialidad);
tipoEspecialidadRouter.route("/tipoespecialidad").get(listaTipoEspecialidadNombre);


