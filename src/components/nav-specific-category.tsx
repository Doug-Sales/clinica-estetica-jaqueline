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
      { name: 'Preenchimento Facial', anchor: '/tratamento' },
      { name: 'Harmonização Facial', anchor: '/tratamento' },
      { name: 'Rugas e Linhas de Expressão', anchor: '/tratamento' },
      { name: 'Cicatrizes e Marcas', anchor: '/tratamento' },
      { name: 'Flacidez Facial', anchor: '/tratamento' },
      { name: 'Olheiras', anchor: '/tratamento' },
      { name: 'Preenchimento Facial', anchor: '/tratamento' },
      { name: 'Harmonização Facial', anchor: '/tratamento' },
      { name: 'Rugas e Linhas de Expressão', anchor: '/tratamento' },
      { name: 'Cicatrizes e Marcas', anchor: '/tratamento' },
      { name: 'Flacidez Facial', anchor: '/tratamento' },
      { name: 'Olheiras', anchor: '/tratamento' },
      { name: 'Preenchimento Facial', anchor: '/tratamento' },
      { name: 'Harmonização Facial', anchor: '/tratamento' },
      { name: 'Rugas e Linhas de Expressão', anchor: '/tratamento' },
      { name: 'Cicatrizes e Marcas', anchor: '/tratamento' },
      { name: 'Flacidez Facial', anchor: '/tratamento' },
      { name: 'Olheiras', anchor: '/tratamento' },
      { name: 'Preenchimento Facial', anchor: '/tratamento' },
      { name: 'Harmonização Facial', anchor: '/tratamento' },
      { name: 'Rugas e Linhas de Expressão', anchor: '/tratamento' },
      { name: 'Cicatrizes e Marcas', anchor: '/tratamento' },
      { name: 'Flacidez Facial', anchor: '/tratamento' },
      { name: 'Olheiras', anchor: '/tratamento' },
    ],
    Procedimentos: [
      { name: 'Gordura Localizada', anchor: '/tratamento' },
      { name: 'Flacidez Corporal', anchor: '/tratamento' },
      { name: 'Celulite', anchor: '/tratamento' },
      { name: 'Estrias', anchor: '/tratamento' },
      { name: 'Depilação à laser', anchor: '/tratamento' },
      { name: 'Remoção de Tatuagem', anchor: '/tratamento' },
      { name: 'Gordura Localizada2', anchor: '/tratamento' },
      { name: 'Flacidez Corporal', anchor: '/tratamento' },
      { name: 'Celulite', anchor: '/tratamento' },
      { name: 'Estrias', anchor: '/tratamento' },
      { name: 'Depilação à laser', anchor: '/tratamento' },
      { name: 'Remoção de Tatuagem', anchor: '/tratamento' },
      { name: 'Gordura Localizada', anchor: '/tratamento' },
      { name: 'Remoção de Tatuagem', anchor: '/tratamento' },
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
          <li key={index}>
            <a rel="noopener noreferrer" href={`${service.anchor}`}>
              &#8212; {service.name}
            </a>
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
