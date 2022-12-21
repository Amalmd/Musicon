import puppeteer from 'puppeteer';

const searchValue = 'rabi nachman'
try {
    const input = searchValue.split(' ').join('+')
    console.log(input)
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto(`https://www.youtube.com/results?search_query=${input}`)
    const results = await page.evaluate(()=>{
        const contents = document.querySelector('#contents > ytd-item-section-renderer > #contents')
        return contents
    })
    // const results = await page.waitForSelector('#contents > ytd-item-section-renderer > #contents')
    console.log(results);
    // browser.close()
} catch (err) {
    console.error(err)
}