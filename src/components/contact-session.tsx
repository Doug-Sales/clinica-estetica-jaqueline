import { Button } from './ui/button'

export const contatoJaqueline = '19997321279'

export function ContactSession() {
  return (
    <div className="flex w-full justify-center bg-primary-foreground text-accent ">
      <div className="container w-full max-w-screen-2xl ">
        <h3 className="mt-10 text-left text-3xl font-semibold">
          Agende sua consulta
        </h3>

        <div className="grid grid-cols-1 justify-evenly pb-10 md:flex ">
          <div className="w-96">
            <hr className="mb-7 mt-5 h-0 w-0" />
            <Button
              type="button"
              className="mb-1 block h-11 w-80 text-center text-lg font-semibold"
              asChild
            >
              <a
                href={`https://api.whatsapp.com/send?phone=554${contatoJaqueline}&text=Gostaria%20de%20agendar%20uma%20consulta%20para%20procedimentos%20estéticos.%20Por%20favor,%20indique%20disponibilidade%20e%20instruções%20para%20agendamento.%20Agradeço%20antecipadamente.`}
                target="_blank"
                rel="noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
            <span className="block px-2 py-4 text-xs font-light">
              &ndash; Atendimento mediante agendamento&nbsp;
              <br />
              <br />
              &ndash; Aberta de Seg. à Sex. de 8h às 18h.&nbsp;
              <br />
              <br />
              &ndash; Entrada acessível&nbsp;
            </span>
          </div>

          <div className="w-96 flex-col px-4 py-3">
            <hr className="mb-7 h-0 w-0" />

            <span className="block text-base font-light"> Telefone </span>
            <p className="mb-4 block text-3xl">
              <strong>&#40;19&#41; 3869.1234</strong>
            </p>

            <span className="block text-base font-light">
              {' '}
              Mobile / Whatsapp{' '}
            </span>
            <p className="mb-4 block text-3xl">
              <strong>&#40;19&#41; 9.8716.3991</strong>
            </p>
          </div>
          <div className="w-96 space-y-5 px-4 py-3 ">
            <h2 className="mt-5 text-xl font-semibold">Nosso Endereço</h2>
            <address className="block not-italic">
              R. Luís Spiandorelli Neto, 30
              <br />
              Torre Paineiras, Sala 704 &#10;
              <br />
              Jardim Paiquere
            </address>
            <Button className="w-full " title="Google Maps">
              <a
                href="https://maps.app.goo.gl/PbWb8zKPfFPSU9Fn9"
                target="_blank"
                rel="noreferrer"
              >
                VER MAPA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
