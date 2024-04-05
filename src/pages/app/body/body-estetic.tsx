import { Helmet } from 'react-helmet-async'

import { IntroductionCategoryPage } from '@/components/introduction-category-page'
import { NavLinkListTreatment } from '@/components/nav-specific-category'
import { ScheduleSection, TextPageProps } from '@/components/schedule-section'

import { BodyTreatmentsCarousel } from './body-popular-treatment'

const titleBody = `Descubra a beleza do seu corpo.`
const text = `Seu corpo é uma expressão única de quem você é.
Nossa missão é cuidar dele com a dedicação e precisão que merece, utilizando métodos personalizados para atender às suas necessidades específicas. 
Com uma equipe de especialistas comprometidos em alcançar resultados visíveis e duradouros, estamos aqui para ajudá-lo a se sentir confortável e confiante em sua própria pele.
Sua beleza interior merece ser celebrada.
Estamos prontos para ajudá-lo a realçar sua melhor versão.

Agende uma consulta hoje mesmo e dê o primeiro passo para uma nova experiência de bem-estar.`

export function BodyEstetic() {
  const dataText = {
    title: 'Estética Corporal em Valinhos',
    intro: 'Cuidando da Beleza e Saúde do seu corpo',
  } as TextPageProps

  return (
    <>
      <Helmet title="Estética Corporal" />

      <div className="container mx-auto flex-1 px-0 lg:px-8 ">
        <div className="container w-full max-w-screen-xl px-0">
          <ScheduleSection intro={dataText.intro} title={dataText.title} />
          <IntroductionCategoryPage text={text} title={titleBody} />
          <div className="bg-muted-foreground">
            <BodyTreatmentsCarousel />
          </div>
          <NavLinkListTreatment />
        </div>
      </div>
    </>
  )
}
