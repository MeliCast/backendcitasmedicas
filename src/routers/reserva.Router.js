import express, { Router } from "express";
import {crearReserva, listarReserva, listarReservaPorId , eliminarReserva,  listarReservaPorIdMedico} from "../controllers/reserva.controller.js"


export const  reservaRouter = Router()

reservaRouter.route("/reserva").post(crearReserva).get(listarReserva)
reservaRouter.route("/reserva/:id").get(listarReservaPorId)
reservaRouter.route("/reserva/:id").delete(eliminarReserva)
reservaRouter.route("/reservaidmedico/:id").get(listarReservaPorIdMedico)



