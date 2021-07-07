import { ContactInfoPage } from './contactInfoPage';
import { Login } from './login';
import { AddAdress } from './addAdress';
import { LogoutPage } from './logoutPage';
import { AddToCart } from './addToCart';
import { RemoveFromCart } from './removeFromCart';
import { CartPage } from './CartPage';

const app = () => ({
    ContactInfoPage: () => new ContactInfoPage(),
    Login: () => new Login(),
    AddAdress: () => new AddAdress(),
    Logout: () => new LogoutPage(),
    AddToCart: () => new AddToCart(),
    RemoveFromCart: () => new RemoveFromCart(),
    CartPage: () => new CartPage(),
});

export { app };
