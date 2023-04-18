import React, { useEffect, useState } from 'react'
import { getFutureAppointments, getPastAppointments } from '../firebase/user'
import { cancelAppointment } from '../firebase/appointment'
import { useFirebaseContext } from '../context/UserContext'
import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'

export const Appointments = () => {
  const [futureAppointments, setFutureAppointments] = useState(null)
  const [pastAppointments, setPastAppointments] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user } = useFirebaseContext()
  const location = useLocation()

  async function getAppointments () {
    setLoading(true)
    const [pastAppointmentsFetched, futureAppointmentsFetched] = await Promise.all([getPastAppointments(), getFutureAppointments()])
    setFutureAppointments(futureAppointmentsFetched)
    setPastAppointments(pastAppointmentsFetched)
    setLoading(false)
  }

  useEffect(() => {
    getAppointments()
    console.log(location.pathname.split('/'))
  }, [user])

  async function handleCancelAppointment (appointmentId) {
    await cancelAppointment({ appointmentId })
    await getAppointments()
  }

  return (
    <>
      {pastAppointments && !loading
        ? (
          <div className='w-full flex flex-col text-center gap-4'>
            <h1 className='font-bold text-xl'>Citas pasadas</h1>
            <table className='mx-2 table-auto border-black border-4'>
              <thead className='border-b-2 border-slate-600'>
                <th>Medico</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Especialidad</th>
                <th>Telefono</th>
              </thead>
              <tbody>
                {pastAppointments.map(app => {
                  return (
                    <tr className='border-b border-slate-400' key={app.appointmentId}>
                      <td>{app.medicData.nombre} {app.medicData.apellido}</td>
                      <td>{format(app.date.seconds * 1000, 'dd/MM/yyyy H:mm')}</td>
                      <td>{format(app.date.seconds * 1000, 'H:mm')}</td>
                      <td>{app.medicData.direccion}</td>
                      <td>{app.medicData.telefono}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>)
        : (<h1>Loading...</h1>)}
      {futureAppointments && !loading
        ? (
          <div className='w-full flex flex-col text-center justify-center gap-6 p-2'>
            <h1 className='font-bold text-xl'>Futuras citas</h1>
            <table className='mx-2 table-auto border-black border-4'>
              <thead className='border-b-2 border-slate-600'>
                <th>Medico</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Especialidad</th>
                <th>Telefono</th>
                <th>Cancelar</th>
              </thead>
              <tbody>
                {futureAppointments.map(app => {
                  return (
                    <tr className='border-b border-slate-400' key={app.appointmentId}>
                      <td>{app.medicData.nombre} {app.medicData.apellido}</td>
                      <td>{format(app.date.seconds * 1000, 'dd/MM/yyyy H:m')}</td>
                      <td>{format(app.date.seconds * 1000, 'H:m')}</td>
                      <td>{app.medicData.direccion}</td>
                      <td>{app.medicData.telefono}</td>
                      <td><button onClick={() => handleCancelAppointment(app.appointmentId)}>X</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>)
        : (<h1>Loading...</h1>)}
    </>
  )
}
