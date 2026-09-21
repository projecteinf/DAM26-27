import { Product } from "./Product";
import { isProductValid } from "./ProductValidator";

export class ProducteService {

    crear(product: Product): Product {
        if (!isProductValid(product)) {
            throw new Error("Producte no vàlid");
        }

        return product;
    }
}