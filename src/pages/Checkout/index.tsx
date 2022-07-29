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

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/apiCalls";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod' // Quando biblioteca não tem export default, usa-se o import desta forma

const newAddressFormValidationScheme = zod.object({
  cep: zod.number().min(8, 'CEP deve conter no mínimo 8 números'),
  rua: zod.string().min(1, 'Informe a tarefa'),
  numero: zod.number().min(1, 'Número no mínimo 1').max(9999, 'Número no máximo 9999'),
  complemento: zod.string().min(1, 'Informe a tarefa'),
  bairro: zod.string().min(1, 'Informe a tarefa'),
  cidade: zod.string().min(1, 'Informe a tarefa'),
  uf: zod.string().min(1, 'Informe a tarefa'),
});


export function Checkout() {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const taxaOfDelivery = 5.99;
  let totalFinal = 0;

  if (cart.total > 0) {
    totalFinal = Number((cart.total + taxaOfDelivery).toFixed(2));
  }

  return (
    <AreaCheckoutContainer>
      <AreaAddress>
        <TitleOfAddress>Complete seu pedido</TitleOfAddress>
        <form >
          <div>
            <MapPinLine size={20} />
            <div>
              <Title>Endereço de Entrega</Title>
              <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
            </div>
          </div>
          <AreaInputs>
            <input
              type="text"
              placeholder="CEP"

            />
            <input
              type="text"
              placeholder="Rua"

            />
            <input
              type="number"
              placeholder="Número"

            />
            <input
              type="text"
              placeholder="Complemento opcional"

            />
            <input
              type="text"
              placeholder="Bairro"

            />
            <input
              type="text"
              placeholder="Cidade"

            />

            <input
              type="text"
              placeholder="UF"

            />
          </AreaInputs>

        </form>

        <AreaPayment>
          <div>
            <CurrencyDollar size={20} />
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

            {cart.quantity > 0 &&
              cart?.coffees?.map((coffee, index) => (
                <ItemCart key={index} coffee={coffee} />
              ))
            }

          </TopCart>
          <BodyCart>
            <TotalQuantityItens>
              <span>Quantidade de Itens</span> <span>{cart.quantity}</span>
            </TotalQuantityItens>
            <EntregaPedido>
              <span>Subtotal dos itens</span> <span>R$ {cart.total.toFixed(2)}</span>
            </EntregaPedido>
            <EntregaPedido>
              <span>Taxa de Entrega</span> <span>R$ {taxaOfDelivery.toFixed(2)}</span>
            </EntregaPedido>
            <TotalPrice>
              <span>Total a Pagar</span> <span>R$ {totalFinal}</span>
            </TotalPrice>
            <NavLink to="/successfulorder" title="Confirmação de Sucesso">
              <BottomCart type="submit" onClick={() => clearCart(dispatch)}>
                CONFIRMAR PEDIDO
              </BottomCart>
            </NavLink>
          </BodyCart>
        </div>
      </AreaCart>

    </AreaCheckoutContainer>
  )
}