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
                    return (keyCheck ? <p key={keyValue}>---</p> : <button key={keyValue}>{hour}</button>)
                  })}
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
