import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const pupularBarberShops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

        {/*  busca rapida */}
        <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo" />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="Barba " />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamentos.svg"
              width={16}
              height={16}
              alt="Acabamento"
            />
            Acabamentos
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/sobrancelha.svg"
              width={16}
              height={16}
              alt="Sobrancelha"
            />
            Sobrancelha
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/massagem.svg" width={16} height={16} alt="Massagem" />
            Massagem
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/hidratacao.svg"
              width={16}
              height={16}
              alt="Hidratacao"
            />
            Hidratacao
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
        <BookingItem />

        {/*  Recomendados  */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/*  Populares  */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {pupularBarberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
