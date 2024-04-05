import PhotoAsideJaqueline from '@/assets/img/about-me/aside-jaqueline-rocha.jpg'
import logoCRFSp from '@/assets/img/logo/crfsp-bg-logo.png'
import imgTreatmentURL from '@/assets/img/treatments/olheiras.jpg'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function TreatmentAbout() {
  return (
    <main className="container flex p-0 py-10 antialiased  lg:py-20 ">
      <section className="container max-w-screen-lg  whitespace-pre-line py-0 pl-0 antialiased ">
        <article className=" px-4 pt-2">
          <header className="mb-8  ">
            <h1 className="text-4xl font-light leading-tight first-letter:text-4xl">
              Olheiras
            </h1>
            <span className="mb-2 block px-1 text-xs">
              {new Date().toLocaleDateString()}
            </span>
          </header>

          {/* resumo e 3 perguntas introdutórias */}
          <div className="mb-10 space-y-10 px-4">
            <p className="whitespace-pre-line text-pretty text-lg ">
              {`As olheiras são um tormento na vida de muitas pessoas. Todos os incômodos estéticos, obviamente, geram desconforto, mas os que são referentes a região facial, são ainda mais eminentes.
              As olheiras podem surgir por motivos variados, podem ter intensidades leves,
              médias ou profundas. Mas, independente disto, elas podem levar,
              inclusive a problemas emocionais, psicológicos e depressão.`}
            </p>

            <ul className="container space-y-8 py-4 *:space-y-4">
              <li>
                <strong className="text-lg *:font-semibold">
                  <em>{`Item 1: O que são olheiras?`}</em>
                </strong>

                <p className="text-lg font-light -tracking-tight">
                  <strong>
                    <em>
                      {`As olheiras são marcas profundas na região dos olhos com
                      coloração formada pela grande concentração de vasos
                      sanguíneos ou melanina na pálpebra inferior e, na maioria
                      das vezes, são genéticas.`}
                    </em>
                  </strong>
                </p>
              </li>
              <li>
                <strong className="text-lg *:font-semibold">
                  <em>{`Item 2: Qual o motivo de ter olheiras?`}</em>
                </strong>

                <p className="text-lg font-light -tracking-tight">
                  <strong>
                    <em>
                      {`Elas surgem devido à alta concentração de melanina ou em
                      decorrência do congestionamento dos vasos capilares da
                      região em torno dos olhos. Fatores como cansaço, alergia,
                      envelhecimento, excesso de sol e noites mal dormidas
                      agravam o problema.`}
                    </em>
                  </strong>
                </p>
              </li>
              <li>
                <strong className="text-lg *:font-semibold">
                  <em> {`Item 3: Quais são os 4 tipos de olheiras?`}</em>
                </strong>

                <p className="text-lg font-light -tracking-tight">
                  <strong>
                    <em>
                      {`As olheiras, como mencionado, não são todas iguais, sendo
                      provocadas por causas diferentes. Dessa forma, de acordo
                      com suas características, elas se dividem em quatro tipos:
                      a olheira profunda ou estrutural, as pigmentadas, as
                      vasculares e as mistas.`}
                    </em>
                  </strong>
                </p>
              </li>
            </ul>

            <div className="lg:py-4">
              <AspectRatio
                ratio={16 / 9}
                className="container  mx-auto flex justify-center "
              >
                <figure className=" max-h-[500px] max-w-[550px] overflow-hidden border bg-foreground/20  p-1.5">
                  <img
                    src={imgTreatmentURL}
                    alt="imagem tratamento"
                    className="h-full w-full border border-foreground object-cover object-center"
                  />
                  <figcaption className="sr-only">Tratamento</figcaption>
                </figure>
              </AspectRatio>

              <div className="container space-y-5 pt-14">
                <h2 className="text-2xl font-bold">
                  Quais são as principais causas?
                </h2>
                <p className="text-pretty text-lg font-light leading-7 -tracking-tight">
                  Como citado acima, o cansaço, estresse e a genética são
                  algumas das causas para o surgimento das olheiras. Já alguns
                  casos, como alergia, gripe, anemia, menstruação e o cigarro
                  podem agravar as olheiras. Mas há vários outros fatores, que
                  vamos citar aqui:
                </p>
              </div>
              <div className="container space-y-5 pt-8">
                <h2 className="text-2xl font-bold">Formato do rosto</h2>
                <p className="text-pretty text-lg font-light leading-7 -tracking-tight ">
                  Além desses motivos muito conhecidos, outro fator inusitado é
                  o formato do seu rosto. Algumas pessoas têm calhas lacrimais
                  profundas sob os olhos e o sombreamento pode causar o
                  aparecimento de pontos mais escuros. A solução para este tipo
                  de incômodo pode estar nos preenchimentos feitos por um
                  profissional especializado.
                </p>
              </div>
              <div className="container space-y-5 pt-8">
                <h2 className="text-2xl font-bold">
                  Vasos sanguíneos abaixo dos olhos
                </h2>
                <p className="text-pretty text-lg font-light leading-7 -tracking-tight">
                  Problemas com vasos sanguíneos também pode ser um dos motivos
                  das olheiras. Algumas pessoas têm muitas veias azuis sob os
                  olhos. Elas fazem a região parecer mais escura, parecendo
                  olheiras, quando não são.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto mb-6 mt-12 max-w-[600px] overflow-hidden ">
            <AspectRatio ratio={16 / 9} className="border p-2">
              <iframe
                src="https://www.youtube.com/embed/VuY3f_EgQhc?si=UjJxYmY490Q8G5VX"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </AspectRatio>
          </div>

          <span className="block px-4 py-2">
            <a
              href="/"
              className="text-base font-normal underline underline-offset-2"
            >
              Dra Jaqueline Rocha - Conheça nossos tratamentos!
            </a>
          </span>
        </article>
      </section>

      {/* Foto Jaqueline */}
      <aside className="hidden h-fit max-w-[330px] border bg-foreground/10 p-3 text-muted-foreground shadow-md shadow-muted-foreground md:block lg:w-full">
        <AspectRatio ratio={4 / 5} className="overflow-hidden">
          <span className="sr-only">Credenciais Doutora Jaqueline Rocha</span>
          <img
            src={PhotoAsideJaqueline}
            alt="Foto Jaqueline Rocha"
            className="object-scale-down object-center"
          />
        </AspectRatio>
        <div className="flex items-start justify-between pt-3">
          <div>
            <h2 className="text-xl font-light">Dra Jaqueline Rocha</h2>
            <span className="block py-0.5 text-start text-xs">
              Farmacêutica Esteta
            </span>
            <p className="pt-1 text-sm font-light">CRF: 1-109955-3</p>
          </div>
          <div className="w-28">
            <img
              src={logoCRFSp}
              alt="Logotipo Conselho Regional Farmácia SP"
              className="object-scale-down object-center"
            />
          </div>
        </div>
      </aside>
    </main>
  )
}
