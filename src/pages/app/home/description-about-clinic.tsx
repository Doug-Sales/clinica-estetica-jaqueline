import descriptionServiceClinic from '@/assets/img/clinic/description-clinic-img.jpg'

export function AboutClinicDescription() {
  return (
    <div className="container grid grid-cols-1 items-center justify-center  bg-muted-foreground py-12 text-left font-light text-muted md:flex md:justify-start lg:grid-cols-2 lg:space-x-6 ">
      <div className=" mx-auto aspect-square max-w-[400px]">
        <img
          src={descriptionServiceClinic}
          alt="Description service image"
          className=" aspect-auto w-full bg-muted p-3 shadow-lg shadow-foreground"
        />
      </div>

      <div className="container max-w-[600px] ">
        <h3 className=" mb-10 mt-10 text-left text-3xl">
          Cada paciente é único e especial
        </h3>
        <div className="px-2 lg:pr-4 ">
          <p className=" pb-10 text-left text-lg leading-relaxed">
            Um dos principais diferenciais da clínica é a forma como os
            tratamentos são planejados, de forma individualizada, sempre visando
            o melhor resultado para cada um dos seus pacientes.
            <br />
            Após um cuidadoso diagnóstico, sugerimos um protocolo especial para
            você rejuvenescer com saúde, segurança e a certeza de um bom
            resultado.
          </p>
        </div>
      </div>
    </div>
  )
}
