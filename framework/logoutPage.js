const LogoutPage = function () {
    this.getLogoutText = async function (page) {
        const logoutTextField = '//p[contains(text(),"Вы вышли из Личного Кабинета.")]';
        const logoutText = await page.textContent(logoutTextField);
        return logoutText;
    };
};
export { LogoutPage };
