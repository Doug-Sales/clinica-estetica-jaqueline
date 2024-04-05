import { CarouselOurSpacePhotos } from '@/components/carousel-our-space'

export function AboutClinic() {
  return (
    <section className="container  mx-auto flex flex-col justify-center  space-y-4 bg-muted py-10  lg:flex-row">
      <div className="container  max-w-[600px] text-pretty pt-7 text-left font-light lg:pl-16 ">
        <h2 className="mb-5 mt-10 text-left text-3xl">Nosso espaço</h2>
        <div className="mb-4 space-y-2 text-lg ">
          <p>
            Espaço moderno, com infraestrutura aconchegante, preparada para a
            realização de procedimentos médicos e estéticos com segurança e
            conforto.
          </p>
          <div>
            Em local de fácil acesso, em frente ao shopping Valinhos.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, eos? Quaerat nostrum consequuntur vitae repudiandae
            ullam illo nemo. Incidunt consectetur quos in. Id labore alias rem
            tempora amet ipsa cum?
          </div>
        </div>
      </div>
      <div className="container flex justify-around">
        <CarouselOurSpacePhotos />
      </div>
    </section>
  )
}
