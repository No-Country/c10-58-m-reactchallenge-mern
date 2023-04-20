import React from 'react'
import { format } from 'date-fns'
import { Btn } from './MicroComponents/Btn'
import { MedicProfileImg } from './MicroComponents/ProfileImages'
import { CardContainer } from './MicroComponents/Cards'

export const AppointmentCard = ({ appointment, cancelAppointment }) => {
  const { medicData, date } = appointment
  console.log('appointment: ', appointment)
  return (
    <CardContainer>
      <MedicProfileImg src={medicData.profilePhoto} />
      <div className='flex flex-col items-start p-0'>
        <p>Medico: {medicData.nombre} {medicData.apellido}</p>
        <p>Fecha: {format(date.seconds * 1000, 'dd/MM/yyyy')}</p>
        <p>Hora: {format(date.seconds * 1000, 'H:mm')}</p>
        <p>Telefono: {medicData.telefono}</p>
        {cancelAppointment && <Btn className='my-1 w-full' $dark onClick={() => cancelAppointment(appointment.appointmentId)}>Cancelar cita</Btn>}
      </div>
    </CardContainer>
  )
}
