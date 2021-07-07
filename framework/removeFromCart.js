const RemoveFromCart = function () {
    this.removeItem = async function (page) {
        await page.click ('//span[contains(text(),"Корзина")]');
        await page.click ('//tbody/tr[1]/td[4]/div[1]/span[1]/button[2]/i[1]');
    };
};

export { RemoveFromCart };
