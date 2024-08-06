import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { AvatarImage } from "@radix-ui/react-avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      {/*  header  */}
      <Header />
      <div className="p-5">
        {/*  Texto  */}
        <h2 className="text-xl font-bold">Ola, Ricardo!</h2>
        <p>Segunda-feira, 05 de agosto.</p>
        {/*  busca  */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquisar..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/*  Banner  */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com Hair Reserve"
            src="/Banner01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/*  agendamento  */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*  Esquerda  */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confimado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p>Barbearia HairRN</p>
              </div>
            </div>
            {/*  Direita  */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">09:20</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
