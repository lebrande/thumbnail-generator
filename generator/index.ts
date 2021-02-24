import * as puppeteer from 'puppeteer';
import { stringify } from 'querystring';
import { content, settings } from '../content';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport(settings);
  await page.goto(`http://localhost:1234?${stringify(content)}`);
  await page.screenshot({
    path: 'media/example.png',
  });

  await browser.close();
})();