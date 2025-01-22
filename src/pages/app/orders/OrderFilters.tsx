import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'
import React from 'react'

const OrdersFilters: React.FC = () => {
  return (
    <form action="" className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Id do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="cancelled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em Entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="submit"
        size="xs"
        variant="secondary"
      >
        <Search className="w-4 h-4 mr-2" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        size="xs"
        variant="outline"
      >
        <X className="w-4 h-4 mr-2" />
        Remover filtros
      </Button>
    </form>
  )
}

export default OrdersFilters
