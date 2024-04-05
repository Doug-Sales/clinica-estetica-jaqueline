import { HomeIcon, Menu, SquareArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { NavLink } from './nav-link'

export function NavMenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={'default'}
          className="select-none border-none"
        >
          <Menu className="mr-3 h-6 w-6 text-muted-foreground " />
          <span className="text-base font-semibold text-muted-foreground">
            {' '}
            Menu
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="container mr-6 w-64 py-4">
        <DropdownMenuGroup>
          <nav className="space-y-2 *:rounded-xl *:bg-background">
            <DropdownMenuItem>
              <NavLink to={'/'}>
                <HomeIcon className="mr-2 h-4 w-4" />
                CLÍNICA
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NavLink to={'/estetica-facial'}>
                <SquareArrowUpRight className="mr-2 h-4 w-4" />
                ESTÉTICA FACIAL
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={'/estetica-corporal'}>
                <SquareArrowUpRight className="mr-2 h-4 w-4" />
                ESTÉTICA CORPORAL
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={'/tricologia'}>
                <SquareArrowUpRight className="mr-2 h-4 w-4" />
                TRICOLOGIA
              </NavLink>
            </DropdownMenuItem>
          </nav>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
