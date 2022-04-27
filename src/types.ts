interface Assets {
    preview: string;
}

interface Variants {
    id: string;
    price: number;
}

export interface Product {
    assets: Assets[];
    description: string;
    id: string;
    name: string;
    variants: Variants[];
}

export interface ProductData {
    products: {
        items: Product[]
    };
}

export interface OrderData {
    addItemToOrder: {
        id: string;
        subTotal: number;
        lines: [
            {
                id: string;
                quantity: number;
                unitPrice: number;
                linePrice: number;
                productVariant: {
                    id: string;
                    name: string;
                }
            }
        ]
    };
}