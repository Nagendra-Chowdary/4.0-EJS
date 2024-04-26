import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on server ${port}`);
})



app.get('/', (req, res) => {
    let dayNum = new Date().getDay();
    var day, advice;
    [day, advice] = ((dayNum == 0) || (dayNum == 6)) ? ["Weekend day", "chill"] : ["Week day", "work hard"];
    res.render("index.ejs",
        {
            day: day,
            advice: advice
        }
    )
})