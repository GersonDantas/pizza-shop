import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export function AccountMenu() {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            Pizza Shop
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 gap-2">
          <DropdownMenuLabel className="flex flex-col">
            <span>Gerson dantas</span>
            <span className="text-xs  font-normal text-muted-foreground">
              gerson@gmail.com
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer flex items-center">
            <Building className="h-4 w-4 mr-2" />
            <span>Perfil da loja</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center cursor-pointer
             text-rose-500 dark:text-rose-400"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AccountMenu
