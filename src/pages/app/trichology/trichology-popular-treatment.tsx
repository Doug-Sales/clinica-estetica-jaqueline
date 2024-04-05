import { TreatmentsCarousel } from '@/components/carousel-treatments'

export function TrichologyTreatmentsCarousel() {
  return (
    <div className=" container bg-inherit py-6 text-white/90 lg:py-10">
      <div className="px-4">
        <h2 className="mt-6 text-3xl font-light tracking-tight">Tratamentos</h2>
        <p className="mb-5 pl-4 text-sm font-light tracking-tight">
          / Mais procurados
        </p>
      </div>
      <TreatmentsCarousel />
    </div>
  )
}
