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
import { DeletePaymentOptionController } from './modules/paymentOption/deletePaymentOption/DeletePaymentOptionController'

//Authentication
import { AuthenticateUserController } from './modules/account/authenticateUser/AuthenticateUserController';

//Order 
import { GetOrderController } from './modules/order/getOrder/GetOrderController';
import { CreateOrderController } from './modules/order/createOrder/CreateOrderController';
import { UpdateOrderController } from './modules/order/updateOrder/UpdateOrderController';
import { DeleteOrderController } from './modules/order/deleteOrder/DeleteOrderController'


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
const deletePaymentOptionController = new DeletePaymentOptionController();

//Order 
const getOrderController = new GetOrderController();
const createOrderController = new CreateOrderController();
const updateOrderController = new UpdateOrderController();
const deleteOrderController = new DeleteOrderController();

//Authenticate
const authenticateUserController = new AuthenticateUserController();


//User
//routes.get("/users", ensureAuthenticateUser, getUserController.handle)
routes.get("/users/search/:user_name", ensureAuthenticateUser, getUserController.handleSearch)
routes.get("/users", ensureAuthenticateUser, getUserController.handle)
routes.post("/users", createUserController.handle);
routes.delete("/users/:id", ensureAuthenticateUser, deleteUserController.handle);
routes.put("/users/:id", ensureAuthenticateUser, updateUserController.handle);

//Product
routes.get("/products/search/:product_name", ensureAuthenticateUser, getProductsController.handleSearch)
routes.get("/products", ensureAuthenticateUser, getProductsController.handle)
routes.post("/products", ensureAuthenticateUser, createProductController.handle);
routes.put("/products/:id", ensureAuthenticateUser, updateProductController.handle);
routes.delete("/products/:id", ensureAuthenticateUser, deleteProductController.handle);

//Promotion
routes.get("/promotions/:id", ensureAuthenticateUser, getPromotionController.handleOne)
routes.get("/promotions/search/:promotion_name", ensureAuthenticateUser, getPromotionController.handleSearch)
routes.get("/promotions", ensureAuthenticateUser, getPromotionController.handle)
routes.post("/promotions", ensureAuthenticateUser,  createPromotionController.handle);
routes.put("/promotions/:id", ensureAuthenticateUser, updatePromotionController.handle);
routes.put("/promotions/remove-products/:id", ensureAuthenticateUser, updatePromotionController.handleProductsInOrder);
routes.delete("/promotions/:id", ensureAuthenticateUser, deletePromotionController.handle);

//Payment Options
routes.get("/payment_options/search/:payment_option_name", ensureAuthenticateUser, getPaymentOptionsController.handleSearch)
routes.get("/payment_options", ensureAuthenticateUser, getPaymentOptionsController.handle)
routes.delete("/payment_options/:id", ensureAuthenticateUser, deletePaymentOptionController.handle)
routes.post("/payment_options", ensureAuthenticateUser, createPaymentOptionsController.handle);


//Order
routes.delete("/orders/:id", ensureAuthenticateUser,  deleteOrderController.handle)
routes.post("/orders", ensureAuthenticateUser,  createOrderController.handle);
routes.put("/orders/:id", ensureAuthenticateUser, updateOrderController.handle);
routes.get("/orders", ensureAuthenticateUser, getOrderController.handle)
routes.get("/orders/:id", ensureAuthenticateUser, getOrderController.handleOne)
routes.get("/orders/search/:start_date/:end_date", ensureAuthenticateUser, getOrderController.handleSearch)

//Sales
routes.get("/sales/:start_date/:end_date", ensureAuthenticateUser, getOrderController.handleSales)
routes.put("/sales/:id", ensureAuthenticateUser, updateOrderController.handleSales);



//Account
routes.post("/users/authenticate", authenticateUserController.handle)

export { routes }