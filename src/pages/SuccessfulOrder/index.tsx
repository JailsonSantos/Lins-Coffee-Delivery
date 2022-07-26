import {
  AreaDescriptionAddress,
  AreaIconDescription,
  AreaInfoDescription,
  DeliveryImage,
  SubtitleDescription,
  SuccessfulOrderContainer,
  TitleDescription
} from "./styles";
import Delivery from '../../assets/delivery.svg';
import { CurrencyCircleDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function SuccessfulOrder() {
  const theme = useTheme()
  return (
    <SuccessfulOrderContainer>
      <AreaInfoDescription>
        <TitleDescription>Uhu! Pedido confirmado</TitleDescription>
        <SubtitleDescription>Agora é só aguardar que logo o café chegará até você.</SubtitleDescription>
        <AreaDescriptionAddress>
          <AreaIconDescription>
            <MapPin size={32} color={theme.colors["brand-purple-dark"]} />
            <p>Entrega em <span>Rua João Daniel Martinelli, 102, quadra 07,</span> Av. Litorânea - São Luis, MA</p>
          </AreaIconDescription>
          <AreaIconDescription>
            <Timer size={32} color={theme.colors["brand-yellow"]} />
            <div>
              <p>Previsão de entrega</p>
              <span>20 minutos - 30 minutos</span>
            </div>
          </AreaIconDescription>
          <AreaIconDescription>
            <CurrencyCircleDollar size={32} color={theme.colors["brand-yellow-dark"]} />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </AreaIconDescription>
        </AreaDescriptionAddress>
      </AreaInfoDescription>
      <DeliveryImage src={Delivery} alt="Entregador em cima de uma moto, indo fazer a etregad do pedido." />
    </SuccessfulOrderContainer>
  )
}


