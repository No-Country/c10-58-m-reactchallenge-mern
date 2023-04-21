import CardContainer from '../components/CardContainer'
import { PageTitle } from '../components/MicroComponents/Text'
import { Search } from '../components/MicroComponents/Search'
import { fetchCollection } from '../firebase/fetchCollection'
import { useState, useEffect } from 'react'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'

const List = () => {
  const [listMedics, setListMedics] = useState([])
  const [medicsToShow, setMedicsToShow] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchCollection({ collectionName: 'medicos' }).then((medicos) => {
      setListMedics(medicos)
      setMedicsToShow(medicos)
      setLoading(false)
    })
  }, [])

  const handleChangeSearch = async (e) => {
    const input = e.target.value
    const newList = listMedics.filter((medico) =>
      medico.especialidades.find((value) =>
        value.toLowerCase().includes(input.toLowerCase())
      )
    )
    setMedicsToShow(newList)
  }
  return (
    <>
      <PageTitle className='font-bold text-xl'>Lista de medicos</PageTitle>
      {!loading
        ? (
          <>
            <label className='self-center flex gap-4 items-center'>
              Especialidad:
              <Search
                onChange={handleChangeSearch}
                type='search'
                placeholder='psiquiatria, psicologia infantil, ...'

              />
            </label>
            <CardContainer medicos={medicsToShow} />
          </>
          )
        : (<SpinnerComponent />)}
    </>
  )
}

export default List
