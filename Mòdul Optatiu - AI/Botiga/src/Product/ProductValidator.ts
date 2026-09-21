import { Product } from "./Product";

export function isProductValid(product: Product): boolean {
    return product.nom.trim() !== "" && product.preu > 0;
}
