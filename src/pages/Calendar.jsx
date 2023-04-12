import { Link } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import { useEffect, useState } from 'react'
import { getOneWeekAppointments } from '../firebase/appointment'

const Calendar = () => {
  const [dateSelected, setDateSelected] = useState(null)
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    console.log('Llamado a getOneWeekApps')
    const fetchApps = async () => {
      const appsFetched = await getOneWeekAppointments(dateSelected)
      console.log(appsFetched)
      setAppointments(appsFetched)
    }
    fetchApps()
  }, [dateSelected])

  function handleChange (event) {
    const date = event.target.value
    console.log(date)
    setDateSelected(date)
  }

  return (
    <div>
      <Link to='/'>
        <img src='/registerarrowback.png' alt='Arrow' />
      </Link>
      <h2 className='text-xs font-semibold text-center'>
        Agenda de Laura Jiménez, psicóloga
      </h2>
      <p className='text-xs text-center my-4'>
        Elige el dia y la hora en la que quieres tu cita
      </p>
      <div className='max-w-sm mx-auto p-4 mb-12 flex justify-between'>
        <input type='date' name='dateSelected' onChange={event => handleChange(event)} />

        <p className='px-4 text-2xl text-right'>{'>'}</p>
        {appointments
          ? (
              Object.keys(appointments).map(day => (
                <div key={day}>
                  {day}
                  {Object.keys(appointments[day]).map(hour => <p key={`${appointments}${day}${hour}`}>{appointments[day][hour] ? '---' : 'Age'}</p>)}
                </div>
              )
              )
            )
          : <p>Please pick a date</p>}
      </div>
      <Btn $margin>Agendar cita</Btn>
    </div>
  )
}

export default Calendar
