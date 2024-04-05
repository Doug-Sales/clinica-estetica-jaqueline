import { Helmet } from 'react-helmet-async'

import { ScheduleSection, TextPageProps } from '@/components/schedule-section'

import { AboutClinic } from './about-clinic'
import { AboutMe } from './about-me'
import { AboutClinicDescription } from './description-about-clinic'
import { NavProcedureCategory } from './nav-procedure-category'

export function Home() {
  const dataText = {
    title: 'Atendimento particular personalizado',
    intro: 'Conheça a clínica',
  } as TextPageProps

  return (
    <>
      <Helmet title="Dra Jaqueline Rocha" />

      <div className=" mx-auto flex w-full flex-col items-center antialiased">
        <div className="container max-w-screen-xl px-0">
          <ScheduleSection intro={dataText.intro} title={dataText.title} />
          <AboutMe />
          <AboutClinic />
          <AboutClinicDescription />
          <NavProcedureCategory />
        </div>
      </div>
    </>
  )
}
