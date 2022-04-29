import { OrderContext } from "./OrderContext";
import { Order } from '../types';
import useStateWithStorage from "../hooks/useStateWithStorage";

const INITIAL_STATE: Order = {
    id: "",
    subTotal: 0,
    lines: []
}

interface OrderProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const OrderProvider = ({ children }: OrderProviderProps) => {

    const [updatedOrder, setOrder] = useStateWithStorage('updatedOrder', INITIAL_STATE);

    return (
        <OrderContext.Provider value={{updatedOrder, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}