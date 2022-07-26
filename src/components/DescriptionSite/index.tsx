import ImagemPropaganda from '../../assets/imagempropaganda.svg'
import { InfoItem } from '../../pages/Home/components/InfoItem'
import { AdvertisingImage, AreaDescriptionContainer, AreaInfoItem, AreaTextDescription } from './styles'


import IconCart from '../../assets/iconcart.svg';
import IconPacking from '../../assets/iconpacking.svg';
import IconWatch from '../../assets/iconwatch.svg';
import IconCoffee from '../../assets/iconcoffee.svg';
export function DescriptionSite() {
  return (
    <AreaDescriptionContainer>
      <AreaTextDescription>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
        </div>
        <AreaInfoItem>
          <InfoItem icon={IconCart} title="Compra simples e segura" />
          <InfoItem icon={IconPacking} title="Embalagem mantém o café intacto" />
          <InfoItem icon={IconWatch} title="Entrega rápida e rastreada" />
          <InfoItem icon={IconCoffee} title="O café chega fresquinho até você" />
        </AreaInfoItem>
      </AreaTextDescription>

      <AdvertisingImage src={ImagemPropaganda} alt="" />

    </AreaDescriptionContainer>
  )
}