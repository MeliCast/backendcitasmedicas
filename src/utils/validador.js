import { prisma } from "../prisma.js"
//import jwt  from "jsonwebtoken"

export async function validarUsuario(req,res,next){
    
    

    const id  = +req.params.id
    const usuario  = await prisma.usuario.findUnique({
        where: {id: Number(id)},
        select: { correo:true,  usuario:true, id:true},
         rejectOnNotFound: true
    })
    

    const tipousuario = usuario.usuario
    if (tipousuario === "Melisa Morales") {
        return res.status(401).json({
            message: "USTED ES ADMIN Y NO PUEDE BORRARSE ASI MISMO",            
        })   
    }
    req.user  = usuario
    next();
}


