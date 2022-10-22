
import  Prisma from "@prisma/client";
import { prisma } from "../prisma.js"
import { compareSync } from "bcrypt"
import jwt  from "jsonwebtoken"
import cryptojs from "crypto-js"



export class UsuarioService{
    
    static async accederUsuario(correo, password){
        
        
        const usuarioEncontrado = await prisma.usuario.findFirst({
          where :  {correo},
          select : { password: true, usuario: true, tipoUsuario:true, id:true, correo:true},
          rejectOnNotFound: false
        });
        
            if (usuarioEncontrado)      {  

                //desencriptamos clave 
                const passwordesencriptado = cryptojs.AES.decrypt(usuarioEncontrado.password, process.env.JWT_SECRET).toString(cryptojs.enc.Utf8)
                
        
                if(password === passwordesencriptado) {
                //  const resultado = compareSync(password,usuarioEncontrado.password)
        
        
                    const id = +usuarioEncontrado.id
                    const usuario = usuarioEncontrado.usuario
                    const tipousuario = usuarioEncontrado.tipoUsuario
                    const correo = usuarioEncontrado.correo
                    const password = passwordesencriptado
       
                        // if (resultado) {             
                    const token = jwt.sign({id:usuarioEncontrado.id, mensaje_oculto:"Hola soy un mensaje" }, process.env.JWT_SECRET,
                    {expiresIn: "4h"} )    
             
                        /*await prisma.usuario.update({
                        where: {id: id, 
                        },              
                        data:{
                        hashgen: token,
                        },
                        })*/
                        actualizartoken(token,id)
             
                        return{message: "BIENVENIDO", id, usuario , tipousuario,  token,correo, password} 
                }else{
                    return({ message: "PASSWORD INCORRECTO" })
                }        
        }else{
            return({ message: "CORREO NO EXISTE" })
        }
      }  

    static async obtenerUsuarioEmail(){
        const correo = data.correo
        const usuarioEncontrado = await prisma.usuario.findFirst({
            where :  { correo },            
            select : { id: true},
            rejectOnNotFound: false
          });

          
        if (usuarioEncontrado){            
            //para devolver mensaje y datos
            //return{message: "CORREO EXISTE PERTENECE AL USUARIO" , usuarioEncontrado } 
            return usuarioEncontrado  
        }else{

        const content   = await prisma.usuario.create({data});  
        return content
        }


    }
    
    static async buscarUsuario(correo){ 
        
        
    
         const usuarioEncontrado = await prisma.usuario.findFirst({
             where :  { correo },            
             select : { id: true },
             rejectOnNotFound: false
           }); 
         
             return usuarioEncontrado  
         }
           
     

    static async crearUsuario(data){ 
        
       
        const correo = data.correo
        
        const usuarioEncontrado = await prisma.usuario.findFirst({
            where :  { correo },            
            select : { usuario: true , id: true},
            rejectOnNotFound: false
          });

        if (usuarioEncontrado){            
            return{message: "CORREO EXISTE PERTENECE AL USUARIO" , usuarioEncontrado } 
        }else{
                console.log("hola");
        const content   = await prisma.usuario.create({data});  
             return  content
        }
          
        
        
        
    }

    static async listaUsuario(){
        const lista  =  await  prisma.usuario.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        })       
        return lista;
    }

    static async listaUsuarioPorId(id){
        const lista  =  await  prisma.usuario.findFirst  ({
            where : {id: +id },            
            orderBy :[
                {
                usuario : 'asc',
                }
            ]
        })       
        
        const passworddesencriptado = cryptojs.AES.decrypt(lista.password, process.env.JWT_SECRET).toString(cryptojs.enc.Utf8)                                      
        //console.log(passworddesencriptado)
        lista.password = passworddesencriptado
        return lista 
    }

    static async eliminarUsuario(id){
    
        const eliminar  = await prisma.usuario.delete ({            
            where: {id: Number(id)},                        
            })
            return {content: eliminar};    
    }

    static async actualizarUsuario(id, correo,password,usuario,tipousuario){
            
        try{
            
            const  actualizar = await prisma.usuario.update({
                where: {id: id} ,        
                data: {
                    correo : correo,
                    password: password,
                    usuario: usuario,                                    
                },
            })
                    
            return  {content : actualizar};
        }catch(error){
            //    if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                return {
                    message: "Error al Actualizar Usuario",
                    content: error.message,
              //  }
            }
        }
    }
}

export const actualizartoken =  async(token,id) =>{
    
    try {
        const actualizatoken = await prisma.usuario.update({
            where: {id: +id, 
            },              
            data:{
              hashgen: token,
            },
        })
      
    
    return ({
        content: actualizatoken,
	    });

    } catch (error) {
        return ({
            message: "error al actualziar",
        }); 
    }
}
