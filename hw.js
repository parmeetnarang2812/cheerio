const request = require('request');
const cheerio = require('cheerio');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard');

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handlehtml(html);
        // Print the HTML for the Google homepage.
    }
}
function handlehtml(html) {
    let selTool = cheerio.load(html);
    let content = selTool(".best-player-name a");
    let data = selTool(content).text();
    console.log("Best Player Name: "+data);
    

}