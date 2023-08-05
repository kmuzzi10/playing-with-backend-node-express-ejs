import express from "express";


const app = express();
const port = 3000;



app.get("/", (req, res) => {
    const today = new Date;
    const day = today.getDay();
    if (day == 0 || day == 6) {
        res.render("index.ejs",
            {
                dayType: "A weekend",
                advice: "time to take some rest"
            });
    } else {
        res.render("index.ejs",
            {
                dayType: "A weekday",
                advice: "time to work hard"
            });
    }

})


app.listen(port, () => {
    console.log("server started at port " + port)
})