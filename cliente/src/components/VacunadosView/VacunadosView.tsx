import React, { useEffect, useState } from 'react'
import { Vacunado } from '../../types/generalTypes'
import { getTiposSangre } from '../../utils'
import VacunadoService from '../../services/vacunadoServices'
import s from './VacunadosView.module.css'

export default function VacunadosView() {

     // input handlers
     const [txtCedula, setTxtCedula] = useState('')
     const [txtNombre, setTxtNombre] = useState('')
     const [txtApellido, setTxtApellido] = useState('')
     const [txtTelefono, setTxtTelefono] = useState('')
     const [txtCorreo, setTxtCorreo] = useState('')
     const [txtFechaNac, setTxtFechaNac] = useState('')
     const [selectTipoSangre, setSelectTipoSangre] = useState('')
     const [txtProvincia, setTxtProvincia] = useState('')
     const [txtDireccion, setTxtDireccion] = useState('')
     const [txtLatitud, setTxtLatitud] = useState('')
     const [txtLongitud, setTxtLongitud] = useState('')
     const [hasCovid, sethasCovid] = useState(false)
     const [txtJustification, setTxtJustification] = useState('')

     async function saveVacunado(e: React.FormEvent) {
          e.preventDefault()
          const obj: Vacunado = {
               id: Math.trunc(Math.random() * 10000000),
               apellido: txtApellido,
               cedula: txtCedula,
               direccion: txtDireccion,
               email: txtCorreo,
               fechaNac: txtFechaNac,
               justificacion: txtJustification,
               latitud: txtLatitud,
               longitud: txtLongitud,
               nombre: txtNombre,
               positivo: hasCovid,
               provincia: txtProvincia,
               telefono: txtTelefono,
               tipoSangre: selectTipoSangre == '' ? getTiposSangre()[0] : selectTipoSangre
          }

          VacunadoService.insertVacunado(obj, (data) => {

               alert('Informacion guardada')
               limpiar()
          })
     }

     function limpiar() {
          setTxtCedula('')
          setTxtNombre('')
          setTxtApellido('')
          setTxtCorreo('')
          setTxtFechaNac('')
          setSelectTipoSangre('')
          setTxtProvincia('')
          setTxtDireccion('')
          setTxtJustification('')
          sethasCovid(false)
          setTxtTelefono('')
     }

     useEffect(() => {
          navigator.geolocation.getCurrentPosition((position) => {
               setTxtLatitud(position.coords.latitude.toString())
               setTxtLongitud(position.coords.longitude.toString())
          })
     }, [])

     return (
          <div className={s['_container']}>
               <form className={s['form-container']}>
                    <div>
                         <label className='my-2 '>Cedula</label>
                         <label className='my-2 px-2'>{txtCedula}</label> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Nombre</label>
                         <input className='my-2 px-2' type="text"
                              value={txtNombre} onChange={e => setTxtNombre(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Apellido</label>
                         <input className='my-2 px-2' type="text"
                              value={txtApellido} onChange={e => setTxtApellido(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Telefono</label>
                         <input className='my-2 px-2' type="number"
                              value={txtTelefono} onChange={e => setTxtTelefono(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Fecha de Nacimiento</label>
                         <input type="date" className='my-2 px-2'
                              value={txtFechaNac} onChange={e => setTxtFechaNac(e.currentTarget.value)}
                              min="1920-01-01" max="2018-12-31" /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Correo Electronico</label>
                         <input type="txt" className='my-2 px-2'
                              value={txtCorreo} onChange={e => setTxtCorreo(e.currentTarget.value)}
                         />
                    </div>

                    <div>
                         <label className='my-2 '>Tipo De Sangre</label>
                         <select value={selectTipoSangre} onChange={e => setSelectTipoSangre(e.currentTarget.value)}>
                              {getTiposSangre().map((tipoSangre, index) => <option key={index}>{tipoSangre}</option>)}
                         </select>
                    </div>
                    <div>
                         <label className='my-2 '>Provincia</label>
                         <input type="text" className='my-2 px-2'
                              value={txtProvincia} onChange={e => setTxtProvincia(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Direccion</label>
                         <input type="txt" className='my-2 px-2'
                              value={txtDireccion} onChange={e => setTxtDireccion(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Latitud</label>

                         <input type="text" className='my-2 px-2'
                              value={txtLatitud} onChange={e => setTxtLatitud(e.currentTarget.value)}
                              disabled 
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Longitud</label>

                         <input type="text" className='my-2 px-2'
                              value={txtLongitud} onChange={e => setTxtLongitud(e.currentTarget.value)}
                              disabled 
                         /> <br />
                    </div>
                    <div>
                         <label className='my-2 '>Has tenido covid antes?</label>
                         <div>
                              <label>Si</label>
                              <input type="radio" name='hadCovid' checked={hasCovid} onChange={() => sethasCovid(true)} />
                         </div>
                         <div>
                              <label>No</label>
                              <input type="radio" name='hadCovid' checked={!hasCovid} onChange={() => sethasCovid(false)} />
                         </div>
                         <br />
                    </div>
                    <div>
                         <label className='my-2 '>Justifique porque deben vacunarlo en su casa</label>

                         <input type="txt" className='my-2 px-2'
                              value={txtJustification} onChange={e => setTxtJustification(e.currentTarget.value)}
                         /> <br />
                    </div>
                    <br />
                    <div>

                         <button className='my-2 p-2 btn btn-danger' style={{ color: 'white', margin: 10 }}
                              onClick={e => {
                                   e.preventDefault()
                                   limpiar()
                              }}
                         > limpiar</button>
                         <button className='my-2 p-2 btn btn-success' style={{ color: 'white' }}
                              onClick={saveVacunado}
                         > Guardar Vacunado</button>
                    </div>
               </form >

          </div>
     )
}
