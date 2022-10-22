import { ReservaService } from "../services/reserva.service.js"


export async function  crearReserva(req,res){
    
 try {
     
    const data = req.body
    
    console.log("es", data)
           
           


            const resultado = await ReservaService.creaReserva(data);
            return res.status(201).json(resultado)
      
    
    }catch(error){
        return res.status(400).json({
        message : error.message, 
    });
    }
}


export async function  listarReserva(req,res){
    try {
        const resultado = await ReservaService.listarReserva ({      
        });
        
        return res.json(resultado);
      } catch (error) {
        console.log( error);
      }



    
}


export async function  listarReservaPorIdMedico(req,res){
  const id = +req.params.id
  try {
      const resultado = await ReservaService.listarReservaPorIdMedico (id);
      
      
      
      return res.json(resultado);
    } catch (error) {
      console.log( error);
    }

}
export async function  listarReservaPorId(req,res){
    const id = +req.params.id
    try {
        const resultado = await  ReservaService.listarReservaPorId (id);
        
        
        
        return res.json(resultado);
      } catch (error) {
        console.log( error);
      }
  
}

export async function  eliminarReserva(req,res){
    
    try {
        const id  = req.params.id
        
        const resultado = await ReservaService.eliminarReserva  (id);
            
        return res.json(resultado);
      } catch (error) {
        console.log("es", error);
      }
    return
}
