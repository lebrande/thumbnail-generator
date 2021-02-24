import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: 600,
    height: 600,
    deviceScaleFactor: 2,
  });
  await page.goto('http://localhost:1234');
  await page.screenshot({
    path: 'media/example.png',
    fullPage: true,
  });

  await browser.close();
})();