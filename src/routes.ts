import { Router } from 'express';

import { ensureAuthenticateUser } from './middlewares/ensureAuthenticateUser';

//User
import { GetUserController } from './modules/user/getUser/GetUserController';
import { CreateUserController } from './modules/user/createUser/CreateUserController';
import { DeleteUserController } from './modules/user/deleteUser/DeleteUserController';
import { UpdateUserController } from './modules/user/updateUser/UpdateUserController';

//Product
import { GetProductsController } from './modules/product/getProducts/GetProductsController';
import { CreateProductController } from './modules/product/createProduct/CreateProductController';
import { DeleteProductController } from './modules/product/deleteProduct/DeleteProductController';
import { UpdateProductController } from './modules/product/updateProduct/UpdateProductController';

//Promotion
import { GetPromotionController } from './modules/promotion/getPromotion/GetPromotionController';
import { CreatePromotionController } from './modules/promotion/createPromotion/CreatePromotionController';
import { UpdatePromotionController } from './modules/promotion/updatePromotion/UpdatePromotionController';
import { DeletePromotionController } from './modules/promotion/deletePromotion/DeletePromotionController';

//Payment Options
import { GetPaymentOptionsController } from './modules/paymentOption/getPaymentOption/GetPaymentOptionController';
import { CreatePaymentOptionController } from './modules/paymentOption/createPaymentOption/CreatePaymentOptionController';
import { AuthenticateUserController } from './modules/account/authenticateUser/AuthenticateUserController';

const routes = Router();


//User
const getUserController = new GetUserController();
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

//Product
const getProductsController = new GetProductsController()
const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

//Promotion
const getPromotionController = new GetPromotionController();
const createPromotionController = new CreatePromotionController();
const updatePromotionController = new UpdatePromotionController();
const deletePromotionController = new DeletePromotionController();

//Payment Options
const getPaymentOptionsController = new GetPaymentOptionsController();
const createPaymentOptionsController = new CreatePaymentOptionController();

//Authenticate
const authenticateUserController = new AuthenticateUserController();


//User
routes.get("/users", ensureAuthenticateUser, getUserController.handle)
routes.post("/users", createUserController.handle);
routes.delete("/users/:id", ensureAuthenticateUser, deleteUserController.handle);
routes.put("/users/:id", ensureAuthenticateUser, updateUserController.handle);

//Product
routes.get("/products", ensureAuthenticateUser, getProductsController.handle)
routes.post("/products", ensureAuthenticateUser, createProductController.handle);
routes.put("/products/:id", ensureAuthenticateUser, updateProductController.handle);
routes.delete("/products/:id", ensureAuthenticateUser, deleteProductController.handle);

//Promotion
routes.get("/promotions", ensureAuthenticateUser, getPromotionController.handle)
routes.post("/promotions", ensureAuthenticateUser, createPromotionController.handle);
routes.put("/promotions/:id", ensureAuthenticateUser, updatePromotionController.handle);
routes.delete("/promotions/:id", ensureAuthenticateUser, deletePromotionController.handle);

//Payment Options
routes.get("/payment_options", getPaymentOptionsController.handle)
routes.post("/payment_options", ensureAuthenticateUser, createPaymentOptionsController.handle);

//Order



//Account
routes.post("/users/authenticate", authenticateUserController.handle)

export { routes }