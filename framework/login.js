const Login = function () {
    const emailField = '#input-email';
    const emailForAuth = 'jatix_css@mail.ru';
    const loginButton = '[value="Войти"]';
    const passwordField = '#input-password';

    this.login = async function (page) {
        await page.click(emailField);
        await page.fill(emailField, emailForAuth);
        await page.click(passwordField);
        await page.fill(passwordField, 'demo');
        await page.click(loginButton);
    };
};

export { Login };
