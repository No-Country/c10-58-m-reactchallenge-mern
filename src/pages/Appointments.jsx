import React, { useEffect, useState } from 'react'
import { getFutureAppointments, getPastAppointments } from '../firebase/user'
import { cancelAppointment } from '../firebase/appointment'
import { useFirebaseContext } from '../context/UserContext'
import { AppointmentCard } from './../components/AppointmentCard'

export const Appointments = ({ title, pastAppointments }) => {
  const [loading, setLoading] = useState(false)
  const [appointments, setAppointments] = useState([])
  const { user } = useFirebaseContext()

  useEffect(() => {
    getAppointments()
  }, [user])

  async function getAppointments () {
    setLoading(true)
    try {
      const appointmentsFetched = pastAppointments ? await getPastAppointments() : await getFutureAppointments()
      setAppointments(appointmentsFetched)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleCancelAppointment (appointmentId) {
    console.log(appointmentId)
    setLoading(true)
    await cancelAppointment({ appointmentId })
    await getAppointments()
  }

  return (
    <>
      {(appointments && user && !loading)
        ? (
          <div className='flex flex-col items-center gap-8 p-6'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <div className='w-full grid grid-cols-newone text-center gap-4'>
              {appointments.map(app => {
                return (
                  <AppointmentCard appointment={app} key={app.appointmentId} cancelAppointment={handleCancelAppointment} />
                )
              })}
            </div>
          </div>)

        : (<h1>Loading...</h1>)}
    </>
  )
}
