import { ProcedureCategory } from '@/components/procedure-category'

export function NavProcedureCategory() {
  // TODO buscar da API
  const servicesByCategory = {
    'Estética Facial': [
      { name: 'Preenchimento Facial', anchor: 'tratamento' },
      { name: 'Harmonização Facial', anchor: 'tratamento' },
      { name: 'Rugas e Linhas de Expressão', anchor: 'tratamento' },
      { name: 'Cicatrizes e Marcas', anchor: 'tratamento' },
      { name: 'Flacidez Facial', anchor: 'tratamento' },
      { name: 'Olheiras', anchor: 'tratamento' },
      { name: 'Outros Tratamentos', anchor: 'estetica-facial' },
    ],
    'Estética Corporal': [
      { name: 'Gordura Localizada', anchor: 'tratamento' },
      { name: 'Flacidez Corporal', anchor: 'tratamento' },
      { name: 'Celulite', anchor: 'tratamento' },
      { name: 'Estrias', anchor: 'tratamento' },
      { name: 'Depilação à laser', anchor: 'tratamento' },
      { name: 'Remoção de Tatuagem', anchor: 'tratamento' },
      { name: 'Outros Tratamentos', anchor: 'estetica-corporal' },
    ],
    Tricologia: [
      { name: 'Queda de Cabelo', anchor: 'tratamento' },
      { name: 'Calvície Masculina', anchor: 'tratamento' },
      { name: 'Terapia Capilar', anchor: 'tratamento' },
      { name: 'Alopécia Frontal', anchor: 'tratamento' },
      { name: 'Alopécia de Tração', anchor: 'tratamento' },
      { name: 'Tricoscopia Digital', anchor: 'tratamento' },
      { name: 'Outros Tratamentos', anchor: 'tricologia' },
    ],
  }

  return (
    <div className="container bg-muted py-16">
      <h1 className=" text-3xl font-light tracking-tight lg:pl-20">
        Farmacêutica Esteta
      </h1>
      <p className="mb-8  pl-2 text-sm font-light tracking-tight lg:pl-24">
        Estética e saúde em Valinhos
      </p>
      <ProcedureCategory servicesByCategory={servicesByCategory} />
    </div>
  )
}
