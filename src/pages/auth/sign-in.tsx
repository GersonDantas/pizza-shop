import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const SignInFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

type SignInFormData = z.infer<typeof SignInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  })

  async function handleSignIn(data: SignInFormData) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos um link de autenticação para o seu e-mail!', {
      action: {
        label: 'Reenviar',
        onClick: () => handleSignIn(data),
      },
    })
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button
          variant="ghost"
          className="absolute right-4 top-4"
        >
          <Link to="/sign-up" className="flex items-center gap-2">
            <ArrowRightIcon className="w-4 h-4" />
            Cadastro
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel da pizza.shop
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email" type="email"
                placeholder="exemplo@gmail.com" {...register('email')}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
