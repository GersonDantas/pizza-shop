import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeftIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const SignUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email('E-mail inválido'),
})

type SignUpFormData = z.infer<typeof SignUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  })

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(data)
      toast.success('Informações enviadas com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Ocorreu um erro ao criar a conta' + (error as Error).message)
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" className="absolute right-4 top-4">
          <Link to="/sign-in" className="flex items-center gap-2">
            <ArrowLeftIcon className="w-4 h-4" />
            Login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta gratuita
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro da pizza.shop e
              comece a vender pizzas pelo nosso app.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante</Label>
              <Input
                id="restaurantName" type="text"
                placeholder="Nome do restaurante"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName" type="text"
                placeholder="Seu nome" {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input
                id="phone" type="tel"
                placeholder="(11) 99999-9999" {...register('phone')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Nome do gerente</Label>
              <Input
                id="managerName" type="text"
                placeholder="Nome do gerente" {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email" type="email"
                placeholder="exemplo@gmail.com" {...register('email')}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Criar conta
            </Button>

            <p
              className="px-6 text-center
              leading-relaxed text-sm text-muted-foreground"
            >
              Ao criar uma conta, você aceita os
              <br />
              <Link
                to="/terms"
                className="underline underline-offset-4"
                target="_blank"
              >
                termos de uso {' '}
              </Link>
              e a{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
                target="_blank"
              >
                política de privacidade
              </Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
