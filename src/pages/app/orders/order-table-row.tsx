import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import { TableRow } from '@/components/ui/table'
import { ArrowRight, Search } from 'lucide-react'
import React from 'react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'

const OrderTableRow: React.FC = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        123456
      </TableCell>
      <TableCell> há 10 minutos</TableCell>
      <TableCell className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400" />
        <span className="font-medium text-muted-foreground">
          Pendente
        </span>
      </TableCell>
      <TableCell>Gerson</TableCell>
      <TableCell>R$ 100,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="w-3 h-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="w-3 h-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default OrderTableRow
