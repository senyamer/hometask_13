const ContactInfoPage = function () {
    this.getEmail = async function (page) {
        const emailField = '#input-email';
        const emailFieldText = await page.textContent(emailField);
        return emailFieldText;
    };
};
export { ContactInfoPage };
