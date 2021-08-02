import axios, { AxiosResponse } from 'axios';
import baseAxios from '../baseAxios'
import { ApiResponse, Vacunado } from '../types/generalTypes';


class VacunadoService {

     async insertVacunado(vacunado: Vacunado, callback: (data: Vacunado) => void) {
          const body = vacunado
          // const example = {
          //      apellido: "UN BOBO",
          //      cedula: "2020432",
          //      direccion: "ffsdfdfsdfd",
          //      email: "ffsfs@gmail.com",
          //      fechaNac: "2018-12-12",
          //      id: Math.trunc(Math.random() * 10000000),
          //      justificacion: "fdsfsdfsdfsd",
          //      latitud: "12098090",
          //      longitud: "21213",
          //      nombre: "UN BOBO",
          //      positivo: true,
          //      provincia: "FSFSD",
          //      telefono: "234",
          //      tipoSangre: "AB+",
          // }

          baseAxios.post('/Pacientes', body)
               .then(response => {

                    callback(response.data)
               })
     }
     async isRegistered(cedula: string, callback: (data: boolean) => void): Promise<void> {
          
          baseAxios.get('/Pacientes')
          .then((response: AxiosResponse<ApiResponse<Vacunado[]>>) => {
               let data: Vacunado[] = response.data.ls
               const isRegistered = data.some(data => data.cedula == cedula)
               callback(isRegistered)
          })
          
     }
}



export default new VacunadoService
