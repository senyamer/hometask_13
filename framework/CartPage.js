const CartPage = function () {
    this.getEmptyCartText = async function (page) {
        const emptyCartTextField = '//p[contains(text(),"Корзина пуста!")]';
        const emptyCartText = await page.textContent(emptyCartTextField);
        return emptyCartText;
    };
};
export { CartPage };
