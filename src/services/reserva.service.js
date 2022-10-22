
import {prisma} from "../prisma.js"
import Prisma from  "@prisma/client"

export class  ReservaService{

    static async creaReserva(data) {

           const contentreserva   = await prisma.reservas.create  ({data})
             
                          
        return contentreserva;
    } 
   
    static async listarReserva(){
      
        const lista = await prisma.reservas.findMany  ({            
        include: {   
          
                medico:{ select : {               
                    nombre: true
                },
                },
                especialidad:{   
                  select : {               
                    nombre: true
                },                
                },
                
            },
          });
      
        return lista;

    }

    static async listarReservaPorId(id){
                
        const lista = await prisma.reservas.findUnique({            
        where : { id: Number(id)},
        include: {                
            medico:{ select : {               
                nombre: true
              },
            },
            especialidad:{   
            select : {               
                nombre: true
            },                                  
            },
          },
          });

         
        return lista;

    }

    static async listarReservaPorIdMedico(id){
                
      const lista = await prisma.reservas.findMany({            
      where : { medicoId: Number(id)},
      include: {
        
                 
          medico:{ select : {               
              nombre: true
            },
          },
          especialidad:{   
          select : {               
              nombre: true
          },                                  
          },
        },
      
      
        });

       
      return lista;

  }



    
   
    
    static async eliminarReserva(id){
        
        
          const lista = await prisma.reservas.delete({            
            where : { id: Number(id)},
        
          });
      
        return lista;

    }


    }

