import puppeteer from 'puppeteer';

export const scrape = async (value)=> {
     const searchValue = value
    try {
        const input = searchValue.split(' ').join('+')
        // console.log(input)
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.goto(`https://www.youtube.com/results?search_query=${input}`)
        const results = await page.evaluate(() => {
            let arr = []
            const res = document.body.querySelectorAll('#contents > ytd-item-section-renderer > #contents > ytd-video-renderer > #dismissible > div > #meta > #title-wrapper > h3').forEach((e) => {
                let obj = {
                    title: e.innerText,
                    link: `https://www.youtube.com/${e.querySelector("#video-title").getAttribute('href')}` 
                };
                arr.push(obj);
            })
            return arr
        })
    
        // console.dir(results)
        browser.close()
        return results
    } catch (err) {
        console.error(err)
    }
}
