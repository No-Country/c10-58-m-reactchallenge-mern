import { useLoaderData } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import { useEffect, useState } from 'react'
import { createAppointment, getOneWeekAppointments } from '../firebase/appointment'
import { CalendarButton, CalendarCol, CalendarDay, CalendarDisabled, CalendarDiv, CalendarLabel, MedicImg, TitleDiv } from '../components/MicroComponents/Calendar'
import { MainDivText } from '../components/MicroComponents/Text'
import { Container } from '../components/MicroComponents/Containers'
import { MedicProfileImg } from '../components/MicroComponents/ProfileImages'

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
    <Container>
      <TitleDiv>
        <MainDivText>
          Agenda de {nombre} {apellido}, {formacion_profesional}
        </MainDivText>
        <MedicImg className='h-10 rounded-full' src={profilePhoto} />
      </TitleDiv>
      <CalendarLabel>Fecha:
        <input type='date' name='dateSelected' onChange={event => handleChange(event)} />
      </CalendarLabel>
      <CalendarDiv>
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
    </Container>
  )
}

export default Calendar
