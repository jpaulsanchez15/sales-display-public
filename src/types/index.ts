export default interface Item {
  sku: string;
  quantity: number;
}

export default interface Order {
  lines: Item[];
}
