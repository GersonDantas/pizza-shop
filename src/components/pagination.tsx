import {
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronRight,
} from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

type PaginationProps = {
  pageIndex: number
  totalCount: number
  perPage: number
}

export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage)

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} resultados
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full">
            <ChevronsLeft className="w-4 h-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button variant="outline" className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" className="rounded-full">
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" className="rounded-full">
            <ChevronsRight className="w-4 h-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
