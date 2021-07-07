const AddToCart = function () {
    this.chooseItem = async function (page) {
        await page.click ('//body/div[1]/nav[1]/div[2]/ul[1]/li[1]/a[1]');
        await page.click ('//a[contains(text(),"Показать все Desktops")]');
        await page.click ('//body/div[@id="product-category"]/div[1]/div[1]/div[4]/div[3]/div[1]/div[2]/div[2]/button[1]');
        await page.click ('#button-cart');
    };
};

export { AddToCart };
