import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";


export class MedicoService{
    
    static async crearMedico(data){
   
    const content   = await prisma.medicos.create({data});            
    return content;
    }

    

    //endpoint para cargar el front

    static async listaMedicoFE(){
        const lista  = await prisma.medicos.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        })
        
        return lista;

    }

    
    static async listaMedico(){
        
        const lista = await prisma.medicos.findMany({
            // Returns all user fields
            include: {
                especialidadMed  : {
                select: {
                    nombre: true,
                },
            },
                
        },        
          })



            console.log(lista);
        return lista;

    }



    static async listaMedicoId(id){

        
        
     /*const lista  = await prisma.Medico.findUnique({            
            where : { id : id  },
            
            rejectOnNotFound: false,
        
        
        });      */

        const lista  = await prisma.medicos.findUnique({
        where : { id: id  },
        include: {
            especialidadMed: {
            select: {
                nombre: true,
            },
        },  
         
    },        
        rejectOnNotFound: false,
      })
  
    if (lista  === undefined){
        return {
        message : "no existe el Medico"
        };
    }
    

    
     return lista
     
    
  
  
     
    }

    static async listaMedicoPorNombre(nombre){
       
        
        const lista  = await prisma.medicos.findMany ({            
            where : { nombre: nombre },
            select : { nombre: true,   especialidadMed: {
                  select: {
                    descripcion: true,
                  },
                },                 
            },
            rejectOnNotFound: false
        });      
        

        
        return lista;
    }

    static async eliminarMedico(id){
    
                
        
        const  eliminar = await prisma.medicos.delete({ where :{ id: Number(id) }}); 
         
        return eliminar;    

            
    }
    
    static async actualizarMedico(id,nombre,email){
            
        try{
            
           
                
                const  actualizar = await prisma.medicos.update({
                    where: {id: +id},        
                    data: { nombre: nombre, email: email
                            },                    
                })  
                        
                return  {content : actualizar};
            }catch(error){
                    //if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                    return {
                        message: "Error al Actualizar Medico",
                        content: error.message,
                    //}
                }
            }
          
    }
}

