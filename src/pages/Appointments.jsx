import React, { useEffect, useState } from 'react'
import { getFutureAppointments, getPastAppointments } from '../firebase/user'
import { cancelAppointment } from '../firebase/appointment'
import { useFirebaseContext } from '../context/UserContext'
import { AppointmentCard } from './../components/AppointmentCard'
import { CardsContainer, Container } from '../components/MicroComponents/Containers'
import { PageTitle } from '../components/MicroComponents/Text'

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

  const handleCancelAppointment = pastAppointments
    ? null
    : async (appointmentId) => {
      setLoading(true)
      await cancelAppointment({ appointmentId })
      await getAppointments()
    }

  return (
    <>
      {(user && !loading)
        ? (
          <Container>
            <PageTitle className='font-bold text-xl'>{title}</PageTitle>
            {appointments.length > 0
              ? (
                <CardsContainer>
                  {appointments.map(app => {
                    return (
                      <AppointmentCard appointment={app} key={app.appointmentId} cancelAppointment={handleCancelAppointment} />
                    )
                  })}
                </CardsContainer>)
              : (<PageTitle>No tienes citas actualmente, puedes solicitar una con nuestros medicos en el inicio</PageTitle>)}
          </Container>)

        : (<h1>Loading...</h1>)}
    </>
  )
}
