import { Helmet } from 'react-helmet-async'

import { IntroductionCategoryPage } from '@/components/introduction-category-page'
import { NavLinkListTreatment } from '@/components/nav-specific-category'
import { ScheduleSection, TextPageProps } from '@/components/schedule-section'

import { TrichologyTreatmentsCarousel } from './trichology-popular-treatment'

const titleTrichology = `Cabelos saudáveis e radiantes.`
const text = `Seu cabelo é uma parte essencial de sua identidade.
Na busca por fios exuberantes e couro cabeludo saudável, oferecemos soluções personalizadas para atender às suas necessidades individuais.
Combinando ciência avançada e cuidados especializados, estamos comprometidos em restaurar a vitalidade do seu cabelo e revitalizar sua confiança.

Explore nossa gama de serviços capilar e descubra o caminho para uma cabeleira deslumbrante e cheia de vida.
Desfrute uma jornada capilar única e transformadora. 
  
Agende hoje mesmo uma consulta.
`

export function Trichology() {
  const dataText = {
    title: 'Tricologista em Valinhos',
    intro: 'Cuidando da saúde e beleza dos seus cabelos',
  } as TextPageProps

  return (
    <>
      <Helmet title="Tricologia" />

      <div className="container mx-auto flex-1 px-0 lg:px-8 ">
        <div className="container w-full max-w-screen-xl px-0">
          <ScheduleSection intro={dataText.intro} title={dataText.title} />
          <IntroductionCategoryPage text={text} title={titleTrichology} />
          <div className="bg-muted-foreground">
            <TrichologyTreatmentsCarousel />
          </div>
          <NavLinkListTreatment />
        </div>
      </div>
    </>
  )
}
