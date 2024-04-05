import { z } from 'zod'

import imageBackgroundFace from '@/assets/img/logo/wide-clinic.png'
import { contatoJaqueline } from '@/components/contact-session'
import { Button } from '@/components/ui/button'

const textPagePropsSchema = z.object({
  title: z.string(),
  intro: z.string(),
})

export type TextPageProps = z.infer<typeof textPagePropsSchema>

export function ScheduleSection({ intro, title }: TextPageProps) {
  return (
    <section
      className="h-full py-14 lg:h-96 "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.3)), url(${imageBackgroundFace})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundPositionX: '60%',
        backgroundPositionY: '30%',
        imageRendering: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'padding-box',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="flex flex-col justify-center pl-10 text-muted-foreground  backdrop-blur-sm lg:mt-12 lg:backdrop-blur-none ">
        <h1 className="text-sm font-light tracking-tight">{title}</h1>
        <h2 className="mb-6 w-full max-w-[450px] text-pretty text-4xl font-light ">
          {intro}
        </h2>
        <Button
          type="button"
          className=" mb-2 h-10 w-60 text-sm font-semibold"
          asChild
          variant={'default'}
        >
          <a
            href={`https://api.whatsapp.com/send?phone=554${contatoJaqueline}&text=Gostaria%20de%20agendar%20uma%20consulta%20para%20procedimentos%20estéticos.%20Por%20favor,%20indique%20disponibilidade%20e%20instruções%20para%20agendamento.%20Agradeço%20antecipadamente.`}
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR VIA WHATSAPP
          </a>
        </Button>
      </div>
    </section>
  )
}
