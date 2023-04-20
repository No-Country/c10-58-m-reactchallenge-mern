import { useLoaderData } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import { useEffect, useState } from 'react'
import { createAppointment, getOneWeekAppointments } from '../firebase/appointment'
<<<<<<< HEAD
import { CalendarButton, CalendarCol, CalendarDay, CalendarDisabled, CalendarDiv, CalendarLabel, MedicImg, TitleDiv } from '../components/MicroComponents/Calendar'
import { MainDivText } from '../components/MicroComponents/Text'
import { Container } from '../components/MicroComponents/Containers'
import { MedicProfileImg } from '../components/MicroComponents/ProfileImages'
=======
import { format, parseISO } from 'date-fns'
import styled from 'styled-components'

//card
const Card = styled.div`

width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 30px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color:  #44803F;  ;
  }
  
 
  
`
>>>>>>> b84c3aeb5e97a861a44e28182b7dcff7f5a87f99

const Calendar = () => {
  const [dateSelected, setDateSelected] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [message, setMessage] = useState(null)

  const {
    medicId,
    data: { profilePhoto, nombre, apellido, formacion_profesional }
  } = useLoaderData()

  useEffect(() => {
    const fetchApps = async () => {
      const appsFetched = await getOneWeekAppointments({ medicId, date: dateSelected })
      setAppointments(appsFetched)
    }
    fetchApps()
  }, [dateSelected, message])

  function handleChange (event) {
    const date = event.target.value
    setDateSelected(date)
  }

  async function handleClickHour (valuesArr) {
    const [date, hour] = valuesArr
    const [day, month] = date.split('/')
    const dateFormatted = `2023-${month}-${day}`
    const hourFormatted = hour.split(':')[0]
    const appointment = await createAppointment({ date: dateFormatted, hour: hourFormatted, medicId })
    setMessage(`La cita ha sido creada el dia ${day} a las ${hour}`)
    return appointment
  }

  return (
    <Card className='flex flex-col items-center gap-4 justify-center'>
      <div className='flex h-10 items-center gap-4'>
        <h2 className='text-lg font-semibold text-center'>
          Agenda de {nombre} {apellido}
        </h2>
        <img className='h-10 rounded-full' src={profilePhoto} />
      </div>
      <h3>Especialidades: {especialidades.map(especialidad => especialidad).join(', ')}.</h3>
      <div className='flex'>
        <label className='flex flex-col items-center gap-2'>
          <p className='text-sm text-center'>
            Elige el dia y la hora en la que quieres tu cita
          </p>
          <input type='date' name='dateSelected' onChange={event => handleChange(event)} />
        </label>
      </div>
      <div className='flex mx-auto gap-2 items-center text-center justify-center h-full'>
        {appointments
			  ? (
              Object.keys(appointments).map(day => (
                <CalendarCol key={day}>
                  <CalendarDay>{day}</CalendarDay>
                  {Object.keys(appointments[day]).map(hour => {
                    const keyValue = `${appointments[day]}${hour}`
                    const keyCheck = appointments[day][hour]
                    const clickValues = [day, hour]
                    return (keyCheck ? <CalendarDisabled key={keyValue}>---</CalendarDisabled> : <CalendarButton key={keyValue} onClick={e => handleClickHour(clickValues)}>{hour}</CalendarButton>)
                  })}
                </CalendarCol>
			      )
			      )
            )
          : <MainDivText className='font-bold'>Elija un dia para ver las citas disponibles</MainDivText>}
      </CalendarDiv>
      {message && <h4>{message}</h4>}
<<<<<<< HEAD
    </Container>
=======

    </Card>
>>>>>>> b84c3aeb5e97a861a44e28182b7dcff7f5a87f99
  )
}

export default Calendar
