import { NavLink } from 'react-router-dom'

import jaquelineRocha from '@/assets/img/about-me/jaqueline-rocha.jpg'
import { Button } from '@/components/ui/button'

export function AboutMe() {
  const sobreJaqueline = `Farmacêutica certificada pelo Conselho Regional de Farmácia de São Paulo, iniciou sua própria clínica visando oferecer tratamentos de qualidade com que há de mais moderno no mercado, sendo referência no atendimento personalizado para cada paciente.
  É especialista em tratamentos estéticos avançados e aplicação de produtos controlados.
  Se mantém constantemente atualizada através de cursos e congressos, nacionais e internacionais, para direcionar seus pacientes aos melhores resultados, sempre. `

  return (
    <section>
      <div className="container bg-muted-foreground text-muted">
        <div className=" grid grid-cols-1 py-8 md:flex md:justify-start lg:grid-cols-2 lg:space-x-12 ">
          <div className="flex items-center md:min-w-[300px] lg:min-w-[400px]">
            <img
              src={jaquelineRocha}
              alt="Jaqueline Rocha Photo"
              className="  aspect-auto w-[400px] bg-muted p-3 shadow-lg shadow-foreground"
            />
          </div>
          <div className="container overflow-y-auto pr-0 pt-7 text-left font-light lg:w-[600px] ">
            <h2 className="mb-8 mt-10 text-left text-3xl">
              Dra. Jaqueline Rocha
              <span className="block text-xs ">CRF: 1-109955-3</span>
            </h2>
            <p className="whitespace-pre-line pb-10 pr-8 text-left text-lg leading-relaxed">
              {sobreJaqueline}
            </p>
            <Button
              asChild
              variant={'default'}
              className="ml-auto mt-2 flex w-fit bg-background/15 font-medium text-muted transition-all hover:bg-background/25 hover:underline"
            >
              <NavLink to={'/jaqueline-rocha'}>Saiba mais</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
