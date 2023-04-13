import { Link, useParams } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import { useEffect, useState } from 'react'
import { createAppointment, getOneWeekAppointments } from '../firebase/appointment'
import { format, parseISO } from 'date-fns'

const Calendar = () => {
  const [dateSelected, setDateSelected] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [message, setMessage] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    console.log({ id, dateSelected })
    const fetchApps = async () => {
      const appsFetched = await getOneWeekAppointments({ medicId: id, date: dateSelected })
      setAppointments(appsFetched)
    }
    fetchApps()
  }, [dateSelected])

  function handleChange (event) {
    const date = event.target.value
    console.log(date)
    setDateSelected(date)
  }

  async function handleClickHour (valuesArr) {
    console.log(valuesArr)
    const [date, hour] = valuesArr
    const [day, month] = date.split('/')
    const dateFormatted = `2023-${month}-${day}`
    const hourFormatted = hour.slice(0, 1)
    console.log(dateFormatted, hourFormatted)
    const appointment = await createAppointment({ date: dateFormatted, hour: hourFormatted, medicId: id })
    console.log(appointment)
    return appointment
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <Link to='/'>
        <img src='/registerarrowback.png' alt='Arrow' />
      </Link>
      <h2 className='text-lg font-semibold text-center'>
        Agenda de Laura Jiménez, psicóloga
      </h2>
      <p className='text-sm text-center'>
        Elige el dia y la hora en la que quieres tu cita
      </p>
      <div className='flex'>
        <input type='date' name='dateSelected' onChange={event => handleChange(event)} />
      </div>
      <div className='flex mx-auto gap-2 items-center text-center justify-center'>
        {appointments
			  ? (
              Object.keys(appointments).map(day => (
                <div key={day} className='flex flex-col gap-1'>
                  {day}
                  {Object.keys(appointments[day]).map(hour => {
                    const keyValue = `${appointments[day]}${hour}`
                    const keyCheck = appointments[day][hour]
                    const clickValues = [day, hour]
                    return (keyCheck ? <p key={keyValue}>---</p> : <button key={keyValue} onClick={e => handleClickHour(clickValues)}>{hour}</button>)
                  })}
                </div>
			      )
			      )
            )
          : <p>Please pick a date</p>}
      </div>
      {/* <Btn $margin>Agendar cita</Btn> */}
      {message && <h4>La cita ha sido agendada</h4>}

    </div>
  )
}

export default Calendar
