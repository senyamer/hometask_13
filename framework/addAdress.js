const AddAdress = function () {
    this.fillForm = async function (page) {
        await page.click ('//a[contains(text(),"Новый адрес")]');
        await page.click ('#input-firstname');
        await page.fill ('#input-firstname', 'john');
        await page.click ('#input-lastname');
        await page.fill ('#input-lastname', 'smith');
        await page.click ('#input-address-1');
        await page.fill ('#input-address-1', 'somewhere');
        await page.click ('#input-city');
        await page.fill ('#input-city', 'somewhere');
        await page.click ('#input-postcode');
        await page.fill ('#input-postcode', '12345');
        await page.selectOption('#input-country', '84');
        await page.selectOption('#input-zone', '1283');
        await page.click ('[value="Продолжить"]');
    };
};

export { AddAdress };
