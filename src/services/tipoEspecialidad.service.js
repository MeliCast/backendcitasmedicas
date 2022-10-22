import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";


export class TipoEspecialidadService{
    
    static async crearTipoEspecialidad(data){
    
    const content   = await prisma.especialidad.create({data});            
    return content;
    }

    static async listaTipoEspecialidad(){
        const lista  = await prisma.especialidad.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        }) 
      
        return lista;

    }

    static async listaTipoEspecialidadId(id){

        
        
        const lista  = await prisma.especialidad.findUnique ({            
            where : { id : id  },
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async listaTipoEspecialidadPorNombre(nombre){
       
        const lista  = await prisma.especialidad.findMany ({            
            where : { nombre: nombre },
            select : { nombre: true, id: true},
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async eliminarTipoEspecialidad(id){
        
       'buscamos el id tipo de producto en la tabla productos'
       try{
        const catidencontrado  = await prisma.medicos.findFirst({
            where: {  EspecialidadId : Number(id) },                        
            rejectOnNotFound: false,
        }) 
        //console.log(catidencontrado)
        if (catidencontrado) {
            return{ message: `CON MOVIMIENTOS`}
        }
        
        else{
            const eliminar  = await prisma.especialidad.delete ({            
                where: { id: Number(id)},                        
            })    
            return eliminar            
        }

        
    }catch(error){
        return {
            
            message: "Error al eliminar TipoEspecialidad",
            content: error.message,
        //}
    }

    }
    }
    
    static async actualizarTipoEspecialidad(id, nombre,descripcion){
               
            try{
            
                const  actualizar = await prisma.especialidad.update ({
                    where: {id: +id} ,        
                    data: {
                        nombre : nombre,
                        descripcion : descripcion,
                        
                    },
                })
                        
                return  {content : actualizar};
            }catch(error){
                    //if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                    return {
                        message: "Error al Actualizar TipoEspecialidad",
                        content: error.message,
                    //}
                }
            }
          
    }
}

