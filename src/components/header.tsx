import logoEstetica from '@/assets/img/logo/logoEstetic.svg'

import { NavLink } from './nav-link'
import { NavMenuMobile } from './nav-menu-mobile'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <>
      <address className="hidden bg-primary-foreground text-muted antialiased *:container lg:block">
        <p className="text-nowrap py-2.5 text-right text-xs font-light not-italic leading-relaxed tracking-wide">
          R. Luís Spiandorelli Neto. 30 - Torre Paineiras. Sl 704 Jd. Paiquere |
          &#8288; (19) 9.8716.3991
        </p>
      </address>
      <div className="flex items-center border-b bg-muted py-4  antialiased">
        <div className="container flex w-full justify-between gap-6 px-6 ">
          <div className="flex items-center justify-center space-x-3">
            <img
              alt="Logo Estetic"
              src={logoEstetica}
              className=" h-12 w-12 drop-shadow-md lg:h-24 lg:w-24"
            />

            <Separator
              orientation="vertical"
              className=" h-6 bg-foreground lg:h-14"
            />
          </div>

          <nav className="my-1 hidden items-end space-x-6 lg:flex lg:space-x-10">
            <NavLink to={'/'}>CLÍNICA</NavLink>
            <NavLink to={'/estetica-facial'}>ESTÉTICA FACIAL</NavLink>
            <NavLink to={'/estetica-corporal'}>ESTÉTICA CORPORAL</NavLink>
            <NavLink to={'/tricologia'}>TRICOLOGIA</NavLink>
          </nav>

          <div className="flex items-center lg:hidden">
            <NavMenuMobile />
          </div>
        </div>
      </div>
    </>
  )
}
