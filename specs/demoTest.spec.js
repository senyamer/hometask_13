import chai from 'chai';
import { goto, run, stop } from '../lib/driver/browser';

const { expect } = chai;
describe('demoTest', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('http://demo-opencart.ru/index.php?route=account/login');
    });
    afterEach(async () => {
        await stop();
    });
    it('Это демо тест', async () => {
        const emailForAuth = 'jatix_css@mail.ru';
        await page.click('#input-email');
        await page.fill('#input-email', `${emailForAuth}`);
        await page.click('#input-password');
        await page.fill('#input-password', 'demo');
        await page.click('[value="Войти"]');
        // await page.waitForNavigation({ waitUntil: 'networkidle' });
        await page.click('//body/div[@id="account-account"]/div[1]/aside[1]/div[1]/a[2]');
        // await page.waitForNavigation({ waitUntil: 'networkidle' });
        const emailField = ('#input-email');
        const emailFieldText = await page.textContent(emailField);
        expect(`${emailForAuth}`).to.have.string(emailFieldText);
    });
});

