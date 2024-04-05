import { BadgeCheckIcon } from 'lucide-react'
import React from 'react'

import jaquelineRocha from '@/assets/img/img-our-space/img-our-space-4.jpg'
import { CardContent } from '@/components/ui/card'
import { gridAboutJaquelinePhotos } from '@/lib/imports-photos'

const components: { title: string; description: string }[] = [
  {
    title: 'FACULDADE',
    description: 'Desrição curso - ano de conclusão.',
  },
  {
    title: 'FACULDADE-PÓS',
    description: 'Nome curso - ano conclusão',
  },
  {
    title: 'CURSO',
    description: 'Nome curso - ano conclusão',
  },
  {
    title: 'CURSO-ESPECIALIZAÇÃO',
    description: 'Nome curso - ano conclusão',
  },
  {
    title: 'DESTAQUE EXPERIÊNCIA',
    description: 'Nome curso - ano conclusão',
  },
  {
    title: 'EM ANDAMENTO',
    description: 'Nome curso - ano conclusão',
  },
]

export function AboutJaquelineRocha() {
  const gridImg = gridAboutJaquelinePhotos
  return (
    <main className="container  flex flex-col bg-background/90 p-0 py-10 antialiased  lg:py-20 ">
      <section className="container max-w-screen-xl whitespace-pre-line p-0 antialiased ">
        <div className="container flex bg-muted-foreground/5 p-4 md:p-6 lg:p-8 ">
          <div className="w-full flex-row-reverse py-6 md:min-w-[300px] lg:min-w-[400px]">
            <img
              src={jaquelineRocha}
              alt="Jaqueline Rocha Photo"
              className="mb-8 h-auto w-full max-w-[400px] bg-muted p-3 shadow-md shadow-foreground md:ml-4 lg:float-right lg:ml-14 lg:shadow-lg"
            />
            <div className="w-full ">
              <h2 className="px-4 py-8 text-4xl text-muted-foreground ">
                JAQUELINE F. ROCHA CARDOSO
                <span className="block py-1.5 pl-1 text-xs ">
                  CRF: 1-109955-3
                </span>
              </h2>
              <div className="space-y-4 p-2 text-lg text-primary-foreground/80">
                <span className="block text-xl font-light leading-relaxed">
                  SOBRE
                </span>
                <p className="whitespace-pre-line text-pretty px-4">
                  {`Farmacêutica certificada pelo Conselho Regional de Farmácia de São Paulo, iniciou sua própria clínica visando oferecer tratamentos de qualidade com que há de mais moderno no mercado, sendo referência no atendimento personalizado para cada paciente.
                  É especialista em tratamentos estéticos avançados e aplicação de produtos controlados.
                  Se mantém constantemente atualizada através de cursos e congressos, nacionais e internacionais, para direcionar seus pacientes aos melhores resultados, sempre.
                  `}
                </p>
                <div className="">
                  <span className="block pb-2 pt-4 text-xl font-light leading-relaxed  ">
                    VALORES
                  </span>
                  <ul className=" px-2 text-justify text-lg leading-loose text-primary-foreground/90">
                    <li className="flex items-center">
                      <BadgeCheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{`Deus - Familia - Trabalho`}</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{`Transparência`}</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{`Comprometimento`}</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{`Viver com propósito`}</span>
                    </li>
                    <li className="flex items-center">
                      <BadgeCheckIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{`Honestidade`}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" mx-auto mt-6  grid w-full px-0 py-10 *:md:mx-auto lg:grid-cols-2 lg:py-20 ">
              <div className="  grid h-fit w-[300px]  grid-cols-2 gap-1 p-0 md:w-[380px] lg:w-[450px]">
                {gridImg.map((imageUrl, index) => (
                  <div key={index} className="bg-foreground/65 p-2 ">
                    <img
                      src={imageUrl}
                      alt="Jaqueline Rocha foto"
                      className="h-auto w-full border border-foreground"
                    />
                  </div>
                ))}
              </div>

              <div className="flex max-w-[580px] flex-col flex-wrap justify-center whitespace-pre-line p-0">
                <h4 className=" px-8 py-10 text-left text-3xl text-muted-foreground">{`Certificação & Especialização `}</h4>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ title, children, ...props }, ref) => {
  return (
    <li>
      <CardContent>
        <div
          ref={ref}
          className={
            'block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground lg:hover:bg-muted lg:hover:text-accent-foreground'
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </CardContent>
    </li>
  )
})
ListItem.displayName = 'ListItem'
