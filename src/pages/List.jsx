import CardContainer from '../components/CardContainer'
import { PageTitle } from '../components/MicroComponents/Text'
import { Search } from '../components/MicroComponents/Search'
import { fetchCollection } from '../firebase/fetchCollection'
import { useState, useEffect } from 'react'

const List = () => {
  const [listMedics, setListMedics] = useState([])

  useEffect(() => {
    fetchCollection({ collectionName: 'medicos' }).then((medicos) => {
      setListMedics(medicos)
    })
  }, [])

  const handleChangeSearch = async (e) => {
    const input = e.target.value
    if (input.length > 0) {
      const newList = listMedics.filter((medico) =>
        medico.especialidades.find((value) =>
          value.toLowerCase().includes(input.toLowerCase())
        )
      )
      setListMedics(newList)
    } else if (input === '') {
      const medicos = await fetchCollection({ collectionName: 'medicos' })
      setListMedics(medicos)
    }
  }
  return (
    <>
      <PageTitle className="font-bold text-xl">Lista de medicos</PageTitle>
      <Search
        onChange={handleChangeSearch}
        type="search"
        placeholder="Buscar medicos"
        className="self-center"
      />
      <CardContainer medicos={listMedics} />
    </>
  )
}

export default List
