import { useNavigate } from 'react-router-dom'
/* eslint-disable */
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5'
import CardContainer from '../components/CardContainer'
import { Search } from '../components/MicroComponents/Search'
import { useFirebaseContext } from '../context/UserContext'
import { fetchCollection } from '../firebase/fetchCollection'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const List = () => {
  const [listMedics, setListMedics] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(false)
  const navigate = useNavigate()

  const { showAllMedics } = useFirebaseContext()
  useEffect(() => {
    fetchCollection({ collectionName: 'medicos' }).then((medicos) => {
      setLoading(true)
      setListMedics(medicos)
      setLoading(false)
    })
  }, [])

  const handleChangeSearch = async (e) => {
    const input = e.target.value
    if (input.length > 0) {
      setSearch(true)
      const newList = listMedics.filter((medico) =>
        medico.nombre.toLowerCase().includes(input.toLowerCase())
      )
      setListMedics(newList)
    } else if (input === '') {
      const medicos = await fetchCollection({ collectionName: 'medicos' })
      setListMedics(medicos)
      setSearch(false)
    }
  }

  if (!showAllMedics)
    return (
      <main className="w-full h-screen flex flex-col items-center">
        <section className="w-full flex flex-col items-center justify-center gap-5 mt-5">
          <div className="w-full h-[40px] flex items-center justify-evenly relative mr-5">
            <IoArrowBack
              size={20}
              className="cursor-pointer"
              onClick={() => navigate('/')}
            />
            <Search onChange={handleChangeSearch} />
            <IoSearchOutline className="absolute top-2.5 right-12" size={20} />
          </div>
          {!search && (
            <p className="opacity-60 italic text-md mt-5">
              Busca tu médico favorito por su nombre.
            </p>
          )}
        </section>
        <section className="mt-5">
          {search && <CardContainer medicos={listMedics} />}
        </section>
      </main>
    )

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex flex-col items-center gap-5 my-5">
          <section className="w-full flex justify-center gap-5">
            <div className="w-full h-[40px] flex items-center justify-evenly relative mr-5">
              <IoArrowBack
                size={20}
                className="cursor-pointer"
                onClick={() => navigate('/')}
              />
              <Search onChange={handleChangeSearch} />
              <IoSearchOutline
                className="absolute top-2.5 right-10  "
                size={20}
              />
            </div>
          </section>
          <CardContainer medicos={listMedics} />
        </main>
      )}
    </>
  )
}

export default List
