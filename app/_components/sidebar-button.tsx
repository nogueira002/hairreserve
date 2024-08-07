import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const SideBarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="texct-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex items-center border-b border-solid py-5">
          <Avatar>
            <AvatarImage src="https://github.com/nogueira002.png" />
          </Avatar>
          <div className="ml-3 flex flex-col">
            <span className="font-bold">Ricardo Nogueira</span>
            <span className="text-gring-gray-400 text-xs">
              ricardo.filipe.nogueira0@gmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        <div className="flex flex-col gap-1 border-b border-solid py-5">
          <Button className="justify-start gap-2" variant="ghost">
            <Image alt="Cabelo" src="../cabelo.svg" height={18} width={18} />
            Cabelo
          </Button>
          <Button className="justify-start gap-2" variant="ghost">
            <Image alt="Barba" src="../barba.svg" height={18} width={18} />
            Barba
          </Button>
          <Button className="justify-start gap-2" variant="ghost">
            <Image
              alt="Acabamentos"
              src="../acabamentos.svg"
              height={18}
              width={18}
            />
            Acabamentos
          </Button>
          <Button className="justify-start gap-2" variant="ghost">
            <Image
              alt="Massagem"
              src="../massagem.svg"
              height={18}
              width={18}
            />
            Massagem
          </Button>
          <Button className="justify-start gap-2" variant="ghost">
            <Image
              alt="Sobrancelha"
              src="../sobrancelha.svg"
              height={18}
              width={18}
            />
            Sobrancelha
          </Button>
          <Button className="justify-start gap-2" variant="ghost">
            <Image
              alt="Hidratacao"
              src="../hidratacao.svg"
              height={18}
              width={18}
            />
            Hidratacao
          </Button>
        </div>

        <div className="flex flex-col gap-1 py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideBarButton
