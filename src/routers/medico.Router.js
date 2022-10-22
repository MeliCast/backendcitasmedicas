import { Router } from "express";
import {  crearMedico ,  listaMedico , eliminarMedico, listaMedicoId,   actualizarMedico,  listaMedicoNombre } from "../controllers/medico.controller.js"
export  const  medicoRouter = Router()

medicoRouter.route("/medicos").post(crearMedico).get(listaMedico);
medicoRouter.route("/medicos/:id").delete(eliminarMedico);
medicoRouter.route("/medicos/:id").get(listaMedicoId);
medicoRouter.route("/medicos/:id").put(actualizarMedico);
medicoRouter.route("/medicosbuscarnombre").get(listaMedicoNombre);
