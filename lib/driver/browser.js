import playwright from 'playwright';

let browser;
let context;
let page;

async function goto(url) {
    await page.goto(url);
    return page;
};

async function run() {
    browser = await playwright.chromium.launch({
        headless: true,
        // slowMo: 250,
    });
    context = await browser.newContext();
    page = await context.newPage();
    /*  await page.setViewportSize({
          width: 640,
          height: 480,
      });
     */
};

async function stop() {
    await page.screenshot('demo.jpg');
    await page.close();
    await browser.close();
};

export { goto, run, stop }
