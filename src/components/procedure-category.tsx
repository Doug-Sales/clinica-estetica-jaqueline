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
            &#8212; <a href={`/${service.anchor}`}> {service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export function ProcedureCategory({ servicesByCategory }: Props): JSX.Element {
  return (
    <div className="container w-full max-w-screen-lg bg-white p-0 drop-shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="border-b lg:border-b-0 lg:border-r">
            <ServiceList category={category} services={services} />
          </div>
        ))}
      </div>
    </div>
  )
}
