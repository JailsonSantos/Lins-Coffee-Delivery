import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ItemCart } from "./components/ItemCart";
import {
  AreaAddress,
  AreaCart,
  AreaCheckoutContainer,
  AreaInputs,
  AreaPayment,
  BodyCart,
  BottomCart,
  EntregaPedido,
  FooterPayment,
  Subtitle,
  SubtitlePayment,
  Title,
  TitleOfAddress,
  TitleOfCart,
  TitlePayment,
  TopCart,
  TotalPrice,
  TotalQuantityItens
} from "./styles";

export function Checkout() {
  return (
    <AreaCheckoutContainer>
      <AreaAddress>
        <TitleOfAddress>Complete seu pedido</TitleOfAddress>
        <form action="">
          <div>
            <MapPinLine size={20} weight="thin" />
            <div>
              <Title>Endereço de Entrega</Title>
              <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
            </div>
          </div>
          <AreaInputs>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento opcional" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </AreaInputs>

        </form>

        <AreaPayment>
          <div>
            <CurrencyDollar size={20} weight="thin" />
            <div>
              <TitlePayment>Pagamento</TitlePayment>
              <SubtitlePayment>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubtitlePayment>
            </div>
          </div>
          <FooterPayment>
            <button>
              <CreditCard size={20} />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank size={20} />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={20} />
              DINHEIRO
            </button>
          </FooterPayment>
        </AreaPayment>
      </AreaAddress>

      <AreaCart>
        <TitleOfCart>Cafés selecionados</TitleOfCart>
        <div>
          <TopCart>
            {[0, 1, 2].map((value, index) => (
              <ItemCart key={index} />
            ))}
          </TopCart>
          <BodyCart>
            <TotalQuantityItens>
              <span>Total de Itens</span> <span>R$ 29,90</span>
            </TotalQuantityItens>
            <EntregaPedido>
              <span>Entrega</span> <span>R$ 3,99</span>
            </EntregaPedido>
            <TotalPrice>
              <span>Total</span> <span>R$ 33,90</span>
            </TotalPrice>
            <NavLink to="/successfulorder" title="Confirmação de Sucesso">
              <BottomCart>CONFIRMAR PEDIDO</BottomCart>
            </NavLink>
          </BodyCart>
        </div>
      </AreaCart>

    </AreaCheckoutContainer>
  )
}