import React, { useState } from 'react'

const faq = [
  {
    option: '¿Cómo buscar un profesional?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 1
  },
  {
    option: '¿Qué tipo de especialistas están disponibles?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 2
  },
  {
    option: '¿Cómo se llevan a cabo las consultas virtuales y presenciales?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 3
  },
  {
    option: '¿Cuál es el costo de la consulta?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 4
  },
  {
    option: '¿Cuál es el tiempo de la consulta?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 5
  },
  {
    option: '¿Cómo obtengo un horario?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    id: 6
  }
]

export const Faq = () => {
  const [faqState, setFaqState] = useState({})
  function toggleFaq (id) {
    setFaqState({
      ...faqState,
      [id]: !faqState[id]
    })
  }
  return (
    <div className='flex justify-center mt-5 gap-5 flex-wrap'>
      {faq.map((question) => (
        <div
          key={question.id}
          className='text-center bg-slate-300 justify-center p-2 w-full mx-7 flex flex-col gap-3 items-center rounded-md cursor-pointer'
          onClick={() => toggleFaq(question.id)}
        >
          <p>{question.option}</p>
          {faqState[question.id] && (
            <p className='px-2 pb-5'>{question.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
