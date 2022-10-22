import validator  from "validator"


export function tipoUsuariodto({correo, password, usuario }){ 

    if (!validator.isEmail(correo)){
        throw Error('El correo debe ser un correo valido') 
    }    
    if (!validator.isStrongPassword(password)){
        throw Error('La contraseña no es segura')
    }
    
    if (validator.isEmpty(usuario)){
        throw Error("MODO CREACION - Usuario No puede ser Vacio")

    }






    return {correo, password,usuario}
}
              
