import logoDouglasMedeiros from '@/assets/img/logo/douglas-logo.svg'
import instagramLogo from '@/assets/img/logo/instagram.svg'

import { contatoJaqueline } from './contact-session'
import { Button } from './ui/button'

export function FooterClinic() {
  return (
    <>
      <div className=" w-screen  bg-muted text-sm *:flex-grow ">
        <nav className="container mx-auto max-w-screen-xl flex-grow justify-center *:pt-10 lg:flex lg:*:space-y-0">
          <div className=" gap-4 space-y-6  lg:flex lg:justify-around ">
            <Button asChild>
              <a
                href={`https://api.whatsapp.com/send?phone=554${contatoJaqueline}&text=Gostaria%20de%20conversar%20sobre%20os%20seus%20teratamentos%20e%20procedimentos%20estéticos.%20Agradeço%20antecipadamente.`}
                rel="noopener noreferrer"
                target="_blank"
                className=" block h-11  w-80 text-lg font-semibold"
              >
                FALAR VIA WHATSAPP
              </a>
            </Button>
            <Button
              asChild
              variant={'link'}
              className=" block h-11 w-80  text-lg font-semibold "
            >
              <a
                href="https://www.instagram.com/jaquerocha.c/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <div>
                  <img
                    src={instagramLogo}
                    alt="Logo Instagram"
                    className="h-8 w-8"
                  />
                </div>

                <span className="ml-2 text-foreground" title="@jaquerocha.c">
                  Siga no Instagram
                </span>
              </a>
            </Button>
          </div>

          <div className="w-full flex-col space-y-6  pb-8 *:space-y-4 lg:grid lg:grid-cols-2 lg:space-x-4  ">
            <ul>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=554${contatoJaqueline}&text=Gostaria%20de%20agendar%20uma%20consulta%20para%20procedimentos%20estéticos.%20Por%20favor,%20indique%20disponibilidade%20e%20instruções%20para%20agendamento.%20Agradeço%20antecipadamente.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#8212; Agendar Consulta
                </a>
              </li>
              <li>
                <span
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-600/50"
                  title="Página em desenvolvimento"
                >
                  &#8212; Perguntas frequentes
                </span>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/tricologia" rel="noopener noreferrer">
                  &#8212; Tricologia
                </a>
              </li>

              <li>
                <a href="/estetica-facial" rel="noopener noreferrer">
                  &#8212; Estética Facial
                </a>
              </li>

              <li>
                <a href="/estetica-corporal" rel="noopener noreferrer">
                  &#8212; Estética Corporal
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <footer className="w-screen overflow-hidden bg-primary-foreground py-2">
        <div className="container mx-auto flex max-w-screen-xl  items-center text-accent lg:p-0">
          <div className="flex-grow text-xs   ">
            <p className="my-3">
              Todos os direitos autorais reservados
              <br />
              Clinica Jaqueline Rocha &copy; - 2024
            </p>
          </div>

          <div className=" flex items-center justify-center space-x-2">
            <Button
              asChild
              variant={'link'}
              className="group hover:scale-105 hover:no-underline hover:transition-all"
              title="Desenvolvido por Douglas Medeiros"
            >
              <a
                href="https://douglasmedeiros.tech"
                className="ring-offset-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">
                  Link para o site Douglas Medeiros Full Stack
                </span>
                <span className="px-1 text-left text-xs text-primary">
                  DOUGLAS <br />
                  MEDEIROS
                </span>
                <img
                  src={logoDouglasMedeiros}
                  alt="Link e Logo Douglas Medeiros"
                  className="ml-1 w-11 group-hover:drop-shadow-[0_2px_10px_rgba(0,999,999,0.8)]  "
                  title="Site Douglas Medeiros"
                />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}
