
import { MedicoService } from "../services/medico.service.js"
//import { tipoUnidMedDto } from "../services/dtos/request/tipoUnidMed.dto.js"


export async function crearMedico (req, res) {
  
  try {
    //const data  =   tipoUnidMedDto(req.body)
    const data  =   req.body
    
    const resultado = await  MedicoService.crearMedico (data);
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : error.message, 
    });
}
}

export async function listaMedico(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await MedicoService.listaMedico ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaMedicoId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await  MedicoService.listaMedicoId  (id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}

export async function listaMedicoNombre(req,res) {

  
  const  params   = req.query
  
  try {
    const resultado = await MedicoService.listaMedicoPorNombre (params.razonsocial);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}


export async function eliminarMedico(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await   MedicoService.eliminarMedico (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarMedico(req, res) {
      

 
   
  try {
    //const data = tipoUnidMedDto (req.body)
    const data = req.body
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await MedicoService.actualizarMedico (id,data.nombre, data.email) ;
   // return res.status(201).json({
    //  content: resultado});
    //return resultado;
    console.log(resultado);
    return res.status(201).json(resultado)
}catch(error){
  return res.status(400).json({
      message : error.message,  
  });
}

}



