import { v4 as uuidv4 } from 'uuid';

export const products = [
    {
        id: uuidv4(),
        name: "Homem Aranha",
        product_type: "camisa",
        collection: "Marvel",
        value: 50,  
    },
    {
        id: uuidv4(),
        name: "Batman",
        product_type: "Short",
        collection: "Dc",
        value: 100, 
    },
    {
        id: uuidv4(),
        name: "Harry potter",
        product_type: "Casaco",
        collection: "Harry Potter",
        value: 150,  
    }
]

export const sizes = [
    {
        productSize: "PP",  
    },
    {
        productSize: "P",  
    },
    {
        productSize: "M",    
    },
    {
        productSize: "G",    
    },
    {
        productSize: "GG",    
    },
]

export const sizesInProduct = [
    {
        fk_id_product: "454fee57-a219-4b9a-87ea-c21a424788e7",
        fk_id_size: 4,
        qtd: 20,  
    },
    {
        fk_id_product: "cdee83e6-cad9-486e-a972-0751cfc64086",
        fk_id_size: 2,
        qtd: 10,  
    },
    {
        fk_id_product: "89257282-8541-43dc-852d-8091f880f405",
        fk_id_size: 3,
        qtd: 15,  
    },
    {
        fk_id_product: "cdee83e6-cad9-486e-a972-0751cfc64086",
        fk_id_size: 5,
        qtd: 2,  
    },
    {
        fk_id_product: "89257282-8541-43dc-852d-8091f880f405",
        fk_id_size: 1,
        qtd: 8,  
    },
]