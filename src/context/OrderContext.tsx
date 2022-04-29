import { createContext } from 'react';
import { Order } from '../types';

export type OrderContextProp = {
  updatedOrder: Order;
  setOrder: (order: Order) => void;
};

export const OrderContext = createContext<OrderContextProp>(
  {} as OrderContextProp
);
