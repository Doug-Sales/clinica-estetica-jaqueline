import { Helmet } from 'react-helmet-async'

import { IntroductionCategoryPage } from '@/components/introduction-category-page'
import { NavLinkListTreatment } from '@/components/nav-specific-category'
import { ScheduleSection, TextPageProps } from '@/components/schedule-section'

import { FacialTreatmentsCarousel } from './facial-popular-treatment'

const titleFacial = 'Rejuvenesça com naturalidade e segurança'
const text = `Nosso rosto é nosso cartão de visita.
              Por isso temos tanto cuidado em realizar os procedimentos certos,
              fazendo uso da metodologia perfeita, de acordo com as necessidades
              do paciente, garantindo um resultado natural e duradouro.
              
              Não deixe de ouvir a proposta das nossas especialistas! ;)`

export function Facial() {
  const dataText = {
    title: 'Estética Facial em Valinhos',
    intro: 'Cuidando da Beleza e Juventude do seu Rosto',
  } as TextPageProps

  return (
    <>
      <Helmet title="Estética Facial" />

      <div className="group container mx-auto flex-1  px-0 lg:px-8 ">
        <div className="container w-full max-w-screen-xl px-0">
          <ScheduleSection intro={dataText.intro} title={dataText.title} />
          <IntroductionCategoryPage text={text} title={titleFacial} />
          <div className="bg-muted-foreground">
            <FacialTreatmentsCarousel />
          </div>

          <NavLinkListTreatment />
        </div>
      </div>
    </>
  )
}
