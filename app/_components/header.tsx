import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SideBarButton from "./sidebar-button"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Hair Reserve" src="/logo.png" height={18} width={120} />
        <SideBarButton />
      </CardContent>
    </Card>
  )
}

export default Header
