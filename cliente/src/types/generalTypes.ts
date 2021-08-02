



export interface ApiResponse<T> {
     "exito": number,
     "mensaje": null | string
     "ls": T
}

export interface Vacunado {
     "id": number,
     "cedula": string,
     "nombre": string,
     "apellido": string,
     "telefono": string,
     "email": string,
     "fechaNac": string,
     "tipoSangre": string,
     "direccion": string,
     "latitud": string,
     "longitud": string,
     "positivo": boolean,
     "justificacion": string,
     "provincia": string
}