import Logo from '../../public/logo.svg'
import Wave from '../../public/wave.svg'
import Wave2 from '../../public/wave_2.svg'

const Loader = () => {
  return (
    <main className="w-full h-screen relative overflow-hidden z-0">
      <div className="w-[380px] h-[240px] absolute top-0 left-0">
        <img className="w-full h-full" src={Wave} alt="" />
      </div>
      <div className="w-[380px] h-[180px] absolute top-1/3 flex flex-col items-center gap-3">
        <img className="w-full h-full" src={Logo} alt="" />
        <h1 className="text-[#44803F] text-3xl font-bold tracking-wide">
          Escuchadero
        </h1>
        <div className="flex gap-3">
          <span className="w-2 loading-pill bg-[#44803F] h-2 rounded-full"></span>
          <span className="w-2 loading-pill-2 bg-[#44803F] h-2 rounded-full"></span>
          <span className="w-2 loading-pill-3 bg-[#44803F] h-2 rounded-full"></span>
        </div>
      </div>
      <div className="w-[420px] h-[400px] absolute bottom-0 ">
        <img className="w-full h-full" src={Wave2} alt="" />
      </div>
    </main>
  )
}

export default Loader
