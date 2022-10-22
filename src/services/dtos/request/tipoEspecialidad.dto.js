import validator  from "validator"


export function tipoEspecialidaddto({nombre, descripcion}){ 

    
if (validator.isEmpty(nombre)){
        throw Error("NO PUEDE SER VACIO")
}
if (validator.isEmpty(descripcion)){
    throw Error("NO PUEDE SER VACIO")
}

    return {nombre, descripcion}
}
              
