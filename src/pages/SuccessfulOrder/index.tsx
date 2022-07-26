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
import IconWatch from '../../assets/iconwatch.svg';
import IconDollar from '../../assets/icondollar.svg';
import IconLocalization from '../../assets/iconlocalization.svg';

export function SuccessfulOrder() {
  return (
    <SuccessfulOrderContainer>
      <AreaInfoDescription>
        <TitleDescription>Uhu! Pedido confirmado</TitleDescription>
        <SubtitleDescription>Agora é só aguardar que logo o café chegará até você.</SubtitleDescription>
        <AreaDescriptionAddress>
          <AreaIconDescription>
            <img src={IconLocalization} alt="" />
            <p>Entrega em <span>Rua João Daniel Martinelli, 102, quadra 07,</span> Av. Litorânea - São Luis, MA</p>
          </AreaIconDescription>
          <AreaIconDescription>
            <img src={IconWatch} alt="" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 minutos - 30 minutos</span>
            </div>
          </AreaIconDescription>
          <AreaIconDescription>
            <img src={IconDollar} alt="" />
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


