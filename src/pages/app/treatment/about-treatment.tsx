import { Helmet } from 'react-helmet-async'

import { TreatmentAbout } from '../../../components/treatments'

export function Treatment() {
  return (
    <>
      <Helmet title="Treatment" />
      <div className="container mx-auto max-w-screen-2xl flex-1 bg-background/90 ">
        <TreatmentAbout />
      </div>
    </>
  )
}
