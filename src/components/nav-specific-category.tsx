import React from 'react'

interface Service {
  name: string
  anchor: string
}

interface ServicesByCategory {
  [category: string]: Service[]
}

interface Props {
  servicesByCategory: ServicesByCategory
}

export function NavLinkListTreatment() {
  const servicesByCategory = {
    Tratamentos: [
      { name: 'Preenchimento Facial', anchor: 'preenchimento-facial' },
      { name: 'Harmonização Facial', anchor: 'harmonizacao-facial' },
      { name: 'Rugas e Linhas de Expressão', anchor: 'rugas-e-linhas' },
      { name: 'Cicatrizes e Marcas', anchor: 'cicatrizes-e-marcas' },
      { name: 'Flacidez Facial', anchor: 'flacidez-facial' },
      { name: 'Olheiras', anchor: 'olheiras' },
      { name: 'Preenchimento Facial', anchor: 'preenchimento-facial' },
      { name: 'Harmonização Facial', anchor: 'harmonizacao-facial' },
      { name: 'Rugas e Linhas de Expressão', anchor: 'rugas-e-linhas' },
      { name: 'Cicatrizes e Marcas', anchor: 'cicatrizes-e-marcas' },
      { name: 'Flacidez Facial', anchor: 'flacidez-facial' },
      { name: 'Olheiras', anchor: 'olheiras' },
      { name: 'Preenchimento Facial', anchor: 'preenchimento-facial' },
      { name: 'Harmonização Facial', anchor: 'harmonizacao-facial' },
      { name: 'Rugas e Linhas de Expressão', anchor: 'rugas-e-linhas' },
      { name: 'Cicatrizes e Marcas', anchor: 'cicatrizes-e-marcas' },
      { name: 'Flacidez Facial', anchor: 'flacidez-facial' },
      { name: 'Olheiras', anchor: 'olheiras' },
      { name: 'Preenchimento Facial', anchor: 'preenchimento-facial' },
      { name: 'Harmonização Facial', anchor: 'harmonizacao-facial' },
      { name: 'Rugas e Linhas de Expressão', anchor: 'rugas-e-linhas' },
      { name: 'Cicatrizes e Marcas', anchor: 'cicatrizes-e-marcas' },
      { name: 'Flacidez Facial', anchor: 'flacidez-facial' },
      { name: 'Olheiras', anchor: 'olheiras' },
      { name: 'Outros Tratamentos', anchor: 'estetica-facial' },
    ],
    Procedimentos: [
      { name: 'Gordura Localizada', anchor: 'gordura-localizada' },
      { name: 'Flacidez Corporal', anchor: 'flacidez-corporal' },
      { name: 'Celulite', anchor: 'celulite' },
      { name: 'Estrias', anchor: 'estrias' },
      { name: 'Depilação à laser', anchor: 'depilacao-laser' },
      { name: 'Remoção de Tatuagem', anchor: 'remocao-tatuagem' },
      { name: 'Gordura Localizada', anchor: 'gordura-localizada' },
      { name: 'Flacidez Corporal', anchor: 'flacidez-corporal' },
      { name: 'Celulite', anchor: 'celulite' },
      { name: 'Estrias', anchor: 'estrias' },
      { name: 'Depilação à laser', anchor: 'depilacao-laser' },
      { name: 'Remoção de Tatuagem', anchor: 'remocao-tatuagem' },
      { name: 'Gordura Localizada', anchor: 'gordura-localizada' },
      { name: 'Remoção de Tatuagem', anchor: 'remocao-tatuagem' },
      { name: 'Outros Tratamentos', anchor: 'estetica-corporal' },
    ],
  }

  return (
    <div className="container bg-muted py-16">
      <h3 className=" text-3xl font-light tracking-tight lg:pl-20">
        Farmacêutica Esteta
      </h3>
      <p className="mb-8  pl-2 text-sm font-light tracking-tight lg:pl-24">
        Estética e saúde em Valinhos
      </p>
      <ProcedureAndTreatment servicesByCategory={servicesByCategory} />
    </div>
  )
}

const ServiceList: React.FC<{ category: string; services: Service[] }> = ({
  category,
  services,
}) => (
  <>
    <div className="p-5 ">
      <h2 className="my-3 text-xl font-normal leading-6">{category}</h2>
      <ul className="mb-2 space-y-3 pl-5 text-sm">
        {services.map((service, index) => (
          <li key={index} className="">
            &#8212; <a href={`/${service.anchor}`}> {service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
)

function ProcedureAndTreatment({ servicesByCategory }: Props): JSX.Element {
  return (
    <div className="container w-full max-w-screen-lg bg-white p-0 drop-shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="border-b lg:border-b-0 lg:border-r">
            <ServiceList category={category} services={services} />
          </div>
        ))}
      </div>
    </div>
  )
}