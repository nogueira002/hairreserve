"use client"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneCLick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso")
  }

  return (
    <div className="space-y-3 p-5">
      <div className="flex justify-between" key={phone}>
        {/* Esquerda */}
        <div className="flex items-center gap-2">
          <SmartphoneIcon />
          <p>{phone}</p>
        </div>
        {/* direita */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleCopyPhoneCLick(phone)}
        >
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
