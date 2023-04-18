import React from 'react'
import { format } from 'date-fns'
import { Btn } from './MicroComponents/Btn'

export const AppointmentCard = ({ appointment, cancelAppointment }) => {
  const { medicData, date } = appointment
  return (
    <div className='w-72 p-2 flex justify-evenly items-center border border-green-800 rounded-md'>
      <div className='flex flex-col items-start'>
        <p>Medico: {medicData.nombre} {medicData.apellido}</p>
        <p>Fecha: {format(date.seconds * 1000, 'dd/MM/yyyy')}</p>
        <p>Hora: {format(date.seconds * 1000, 'H:mm')}</p>
        <p>Telefono: {medicData.telefono}</p>
        {cancelAppointment && <Btn className='my-2' onClick={() => cancelAppointment(appointment.appointmentId)}>Cancelar cita</Btn>}
      </div>
      <img src={medicData.profilePhoto} className='h-14 w-14 rounded-full object-cover' />
    </div>
  )
}
