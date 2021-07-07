import chai from 'chai';
import { goto, run, stop } from '../lib/driver/browser';
import { app } from '../framework/index';
import { RightMenuElements } from '../framework/rightMenu';

const { expect } = chai;
describe('Тестируем demo-opencart.ru', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('http://demo-opencart.ru/index.php?route=account/login');
    });
    afterEach(async () => {
        await stop();
    });

    it('Авторизация', async () => {
        await app().Login().login(page);
        await page.click(RightMenuElements.ContactInfo);
        const emailFieldText = await app().ContactInfoPage().getEmail(page);
        expect('jatix_css@mail.ru').to.have.string(emailFieldText);
    });

    it('Добавление адреса', async () => {
        await app().Login().login(page);
        await page.click(RightMenuElements.AdrsessBook);
        await app().AddAdress().fillForm(page);
        const Boolean = await page.isVisible ('//body/div[@id="account-address"]/div[1]');
        expect(Boolean).to.be.true;
    });

    it('Выход из аккаунта', async () => {
        await app().Login().login(page);
        await page.click(RightMenuElements.Logout);
        const logoutText = await app().Logout().getLogoutText(page);
        expect(logoutText).to.have.string('Вы вышли из Личного Кабинета');
    });

    it('Добавить в корзину', async () => {
        await app().Login().login(page);
        await app().AddToCart().chooseItem(page);
        await page.click ('//span[contains(text(),"Корзина")]');
        const Boolean = await page.isVisible('//body/div[@id="checkout-cart"]/div[1]/div[1]/form[1]/div[1]/table[1]');
        expect(Boolean).to.be.true;

    });

    it('Удалить из корзины', async () => {
        await app().Login().login(page);
        await app().RemoveFromCart().removeItem(page);
        const emptyCartText = await app().CartPage().getEmptyCartText(page);
        expect(emptyCartText).to.have.string('Корзина пуста');
    });
});

