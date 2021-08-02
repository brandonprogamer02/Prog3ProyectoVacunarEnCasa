import React, { useEffect, useState } from 'react'
import s from './CentralContainer.module.css'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import VacunadosView from '../VacunadosView/VacunadosView'

function CentralContainer() {
     const { pathname } = useLocation()
     const [state, setState] = useState({
          isVacunadosThePath: '',
          isAboutThePath: ''
     })

     useEffect(() => {
          let isVacunadosThePath = pathname == '/vacunados' ? s['seleccionado'] : pathname == '/' ? s['seleccionado'] : ''
          let isAboutThePath = pathname == '/about' ? s['seleccionado'] : ''
          setState({ isVacunadosThePath, isAboutThePath })

     }, [pathname])

     return (
          <div className={`${s['central-container']}`}>
               <div className={`${s['target-views']}`}>
                    <Link to='/vacunados'>
                         <label className={state.isVacunadosThePath}>Vacunados</label>
                    </Link>
                    <Link to='/about'>
                         <label className={state.isAboutThePath}>Acerca de</label>
                    </Link>
               </div>
               <div className={`${s['contain-views']}`}>
                    < Switch >
                         <Route exact path='/'>
                              <VacunadosView />
                         </Route>
                         <Route exact path='/vacunados'>
                              <VacunadosView />
                         </Route>
                         <Route exact path='/about'>
                              <About />
                         </Route>
                    </Switch>
               </div>
          </div >
     )
}


function About() {

     return (
          <div>
               <h5>PROGRAMACION 3 CON AMADIS</h5> <br />
               <p>
                    <strong>[BRANDOX] Brandon Fernandez Mejia: </strong>hizo el frontend completo(react,redux,typescript,bootstrap) y la base de datos
               </p>
               <p>
                    <strong>Jefferson Payano</strong>: hizo el backend (api con asp net core) junto con diogenes
               </p>
               <p>
                    <strong>Diogenes Ulloa</strong>: ayudo a hacer el backend y la base de datos
               </p>
          </div>
     )
}
export default CentralContainer