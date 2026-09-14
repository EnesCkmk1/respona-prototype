// Synthetic demo fixtures. No customer data or backend connections.

export const restaurant = {
  name: "Bella Napoli",
  phone: "Demo · intet nummer",
  plan: "Pilot",
  agentName: "Sofia",
};

export type OrderStatus = "new" | "preparing" | "ready" | "completed";

export const orderStatusMeta: Record<
  OrderStatus,
  { label: string; tone: "indigo" | "coral" | "teal" | "muted" }
> = {
  new: { label: "Ny", tone: "indigo" },
  preparing: { label: "I gang", tone: "coral" },
  ready: { label: "Klar", tone: "teal" },
  completed: { label: "Afhentet", tone: "muted" },
};

export type OrderItem = {
  name: string;
  qty: number;
  price: number;
  note?: string;
};

export type Order = {
  id: string;
  ref: string;
  customer: string;
  phone: string;
  channel: "Telefon (AI)" | "Telefon (manuel)";
  placedAt: string;
  status: OrderStatus;
  items: OrderItem[];
};

export const orders: Order[] = [
  {
    id: "1",
    ref: "#1042",
    customer: "Demogæst 1",
    phone: "Demo · intet nummer",
    channel: "Telefon (AI)",
    placedAt: "19:42",
    status: "new",
    items: [
      { name: "Margherita", qty: 2, price: 89 },
      { name: "Hvidløgsbrød", qty: 1, price: 45 },
      { name: "Cola 0,5L", qty: 2, price: 25 },
    ],
  },
  {
    id: "2",
    ref: "#1041",
    customer: "Demogæst 2",
    phone: "Demo · intet nummer",
    channel: "Telefon (AI)",
    placedAt: "19:36",
    status: "preparing",
    items: [
      { name: "Calzone", qty: 1, price: 110, note: "Uden løg" },
      { name: "Tiramisu", qty: 1, price: 55 },
    ],
  },
  {
    id: "3",
    ref: "#1040",
    customer: "Demogæst 3",
    phone: "Demo · intet nummer",
    channel: "Telefon (AI)",
    placedAt: "19:28",
    status: "preparing",
    items: [
      { name: "Pepperoni", qty: 1, price: 99 },
      { name: "Vesuvio", qty: 1, price: 95 },
      { name: "Pommes frites", qty: 2, price: 35 },
    ],
  },
  {
    id: "4",
    ref: "#1039",
    customer: "Demogæst 4",
    phone: "Demo · intet nummer",
    channel: "Telefon (manuel)",
    placedAt: "19:15",
    status: "ready",
    items: [
      { name: "Quattro Stagioni", qty: 1, price: 115 },
      { name: "Cola 0,5L", qty: 1, price: 25 },
    ],
  },
  {
    id: "5",
    ref: "#1038",
    customer: "Demogæst 5",
    phone: "Demo · intet nummer",
    channel: "Telefon (AI)",
    placedAt: "18:58",
    status: "completed",
    items: [
      { name: "Margherita", qty: 1, price: 89 },
      { name: "Hawaii", qty: 1, price: 99 },
    ],
  },
  {
    id: "6",
    ref: "#1037",
    customer: "Demogæst 6",
    phone: "Demo · intet nummer",
    channel: "Telefon (AI)",
    placedAt: "18:44",
    status: "completed",
    items: [{ name: "Capricciosa", qty: 2, price: 105 }],
  },
];

export type MenuItem = {
  id: string;
  name: string;
  category: "Pizza" | "Tilbehør" | "Dessert" | "Drikkevarer";
  price: number;
  available: boolean;
};

export const menu: MenuItem[] = [
  {
    id: "m1",
    name: "Margherita",
    category: "Pizza",
    price: 89,
    available: true,
  },
  {
    id: "m2",
    name: "Pepperoni",
    category: "Pizza",
    price: 99,
    available: true,
  },
  { id: "m3", name: "Hawaii", category: "Pizza", price: 99, available: true },
  {
    id: "m4",
    name: "Capricciosa",
    category: "Pizza",
    price: 105,
    available: true,
  },
  {
    id: "m5",
    name: "Quattro Stagioni",
    category: "Pizza",
    price: 115,
    available: false,
  },
  { id: "m6", name: "Calzone", category: "Pizza", price: 110, available: true },
  {
    id: "m7",
    name: "Hvidløgsbrød",
    category: "Tilbehør",
    price: 45,
    available: true,
  },
  {
    id: "m8",
    name: "Pommes frites",
    category: "Tilbehør",
    price: 35,
    available: true,
  },
  {
    id: "m9",
    name: "Tiramisu",
    category: "Dessert",
    price: 55,
    available: true,
  },
  {
    id: "m10",
    name: "Cola 0,5L",
    category: "Drikkevarer",
    price: 25,
    available: true,
  },
  {
    id: "m11",
    name: "Fanta 0,5L",
    category: "Drikkevarer",
    price: 25,
    available: false,
  },
];

export function orderTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
