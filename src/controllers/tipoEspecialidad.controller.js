
import { TipoEspecialidadService  } from "../services/tipoEspecialidad.service.js"
import { tipoEspecialidaddto } from "../services/dtos/request/tipoEspecialidad.dto.js"


export async function crearTipoEspecialidad(req, res) {
  //console.log(req.headers);
  try {
    const data  =   req.body
    
    console.log(data);
    const resultado = await TipoEspecialidadService.crearTipoEspecialidad (
        data    );
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : "ES"  + error.message, 
    });
}
}

export async function listaTipoEspecialidad(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await TipoEspecialidadService.listaTipoEspecialidad  ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaTipoEspecialidadId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await TipoEspecialidadService.listaTipoEspecialidadId(id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}

export async function listaTipoEspecialidadNombre(req,res) {

  
  const  params   = req.query
  
  


  try {
    const resultado = await TipoEspecialidadService.listaTipoEspecialidadPorNombre  (params.nombre);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarTipoEspecialidad(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await TipoEspecialidadService.eliminarTipoEspecialidad (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarTipoEspecialidad(req, res) {
      

 
   
  try {
    /*const data = tipoEspecialidaddto (req.body)*/
    const data = req.body
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await TipoEspecialidadService.actualizarTipoEspecialidad (id,data.nombre, data.descripcion) ;
   // return res.status(201).json({
    //  content: resultado});
    //return resultado;
    return res.status(201).json(resultado)
}catch(error){
  return res.status(400).json({
      message : error.message,  
  });
}

}



