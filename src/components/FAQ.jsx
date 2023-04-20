import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from './MicroComponents/Colors'

const faq = [
  {
    option: '¿Cómo buscar un profesional?',
    description:
      'Para buscar un profesional en nuestro complejo de ayuda psicológica y psiquiátrica en línea, puedes navegar por nuestro sitio web y buscar en la sección "Nuestros Profesionales". Allí encontrarás una lista de especialistas disponibles para ayudarte. También puedes utilizar nuestro motor de búsqueda para encontrar un profesional específico en función de tus necesidades y preferencias.',
    id: 1
  },
  {
    option: '¿Qué tipo de especialistas están disponibles?',
    description:
      'Tenemos una amplia variedad de especialistas en nuestro complejo, incluyendo psicólogos, psiquiatras, terapeutas y consejeros. Todos ellos cuentan con la formación y experiencia necesarias para ayudarte a superar los desafíos que estés enfrentando.',
    id: 2
  },
  {
    option: '¿Cómo se llevan a cabo las consultas virtuales y presenciales?',
    description:
      'Ofrecemos tanto consultas virtuales como presenciales para adaptarnos a las necesidades de nuestros pacientes. Las consultas virtuales se llevan a cabo a través de videoconferencia en tiempo real, mientras que las consultas presenciales se realizan en nuestras instalaciones. Ambas opciones son igualmente efectivas y seguras.',
    id: 3
  },
  {
    option: '¿Cuál es el costo de la consulta?',
    description:
      'El costo de la consulta varía según el profesional y el tipo de servicio que estés buscando. Te recomendamos que consultes la página de cada profesional o te pongas en contacto con nosotros para obtener información específica sobre los precios.',
    id: 4
  },
  {
    option: '¿Cuál es el tiempo de la consulta?',
    description:
      'El tiempo de la consulta varía según el profesional y el tipo de servicio que estés buscando. La duración típica de una consulta puede ser de 45 a 60 minutos, pero algunos profesionales pueden ofrecer sesiones más cortas o más largas según tus necesidades.',
    id: 5
  },
  {
    option: '¿Cómo obtengo un horario?',
    description:
      'Para obtener una cita, puedes contactarnos a través de nuestro sitio web o llamando a nuestro número de teléfono de contacto. Uno de nuestros representantes estará encantado de ayudarte a programar una cita con uno de nuestros especialistas en el momento que mejor se adapte a tus necesidades.',
    id: 6
  }
]

const FAQDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
justify-content: center;
background-color: ${COLORS.strongGreen};
color: ${COLORS.teal};
cursor: pointer;
text-align: center;
margin: 0 1.75rem;
border-radius: 0.375rem;
width: 100%;
padding: 0.75rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

h4{
  font-weight: 600;
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
}

p{
  padding: 0rem 2rem 1rem 2rem;
  text-align: justify;

  @media (min-width: 768px) {
    padding: 0rem 4rem 1rem 4rem;
  }
}
`

export const Faq = () => {
  const [faqState, setFaqState] = useState({})
  function toggleFaq (id) {
    setFaqState({
      ...faqState,
      [id]: !faqState[id]
    })
  }
  return (
    <div className='flex justify-center gap-5 flex-wrap'>
      {faq.map((question) => (
        <FAQDiv
          key={question.id}
          onClick={() => toggleFaq(question.id)}
        >
          <h4>{question.option}</h4>
          {faqState[question.id] && (
            <p>{question.description}</p>
          )}
        </FAQDiv>
      ))}
    </div>
  )
}
