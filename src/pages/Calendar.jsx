import { Link, useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import { useEffect, useState } from 'react'
import {
  createAppointment,
  getOneWeekAppointments,
} from '../firebase/appointment'
import { format, parseISO } from 'date-fns'
import styled from 'styled-components'

//card
const Card = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 30px;

  h1 {
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    color: #44803f;
  }
`

const Calendar = () => {
  const [dateSelected, setDateSelected] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [message, setMessage] = useState(null)

  const {
    medicId,
    data: {
      profilePhoto,
      nombre,
      apellido,
      direccion,
      telefono,
      especialidades,
    },
  } = useLoaderData()

  useEffect(() => {
    const fetchApps = async () => {
      const appsFetched = await getOneWeekAppointments({
        medicId,
        date: dateSelected,
      })
      setAppointments(appsFetched)
    }
    fetchApps()
  }, [dateSelected, message])

  function handleChange(event) {
    const date = event.target.value
    setDateSelected(date)
  }

  async function handleClickHour(valuesArr) {
    const [date, hour] = valuesArr
    const [day, month] = date.split('/')
    const dateFormatted = `2023-${month}-${day}`
    const hourFormatted = hour.split(':')[0]
    const appointment = await createAppointment({
      date: dateFormatted,
      hour: hourFormatted,
      medicId,
    })
    setMessage(`La cita ha sido creada el dia ${day} a las ${hour}`)
    return appointment
  }

  return (
    <Card className="flex flex-col items-center gap-4  justify-center ">
      <div className="flex h-10 items-center gap-4 mx-4">
        <h1 className="font-semibold text-center">
          Agenda de {nombre} {apellido}
        </h1>
        <img className="h-10 rounded-full" src={profilePhoto} />
      </div>
      <div className="self-start">
        <h2 className="text-[#44803f]">Especialidades: </h2>
        <p className="whitespace-pre ml-6 text-sm espec">
          {especialidades.map((especialidad) => especialidad).join('\n')}.
        </p>
      </div>
      <div className="flex">
        <label className="flex flex-col items-center gap-2">
          <p className="text-sm text-center">
            Elige el dia y la hora en la que quieres tu cita
          </p>
          <input
            type="date"
            name="dateSelected"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <div className="flex mx-auto gap-2 items-center text-center justify-center h-full">
        {appointments ? (
          Object.keys(appointments).map((day) => (
            <div key={day} className="flex flex-col gap-2">
              <p className="text-lg font-bold">{day}</p>
              {Object.keys(appointments[day]).map((hour) => {
                const keyValue = `${appointments[day]}${hour}`
                const keyCheck = appointments[day][hour]
                const clickValues = [day, hour]
                return keyCheck ? (
                  <p key={keyValue}>---</p>
                ) : (
                  <button
                    key={keyValue}
                    onClick={(e) => handleClickHour(clickValues)}
                  >
                    {hour}
                  </button>
                )
              })}
            </div>
          ))
        ) : (
          <p className="font-bold">
            Elija un dia para ver las citas disponibles
          </p>
        )}
      </div>
      {message && <h4>{message}</h4>}
    </Card>
  )
}

export default Calendar
