import express from 'express';
import rateLimiter from './rateLimiter.js';
const app = express();
const PORT = 3000;


app.get('/contact', rateLimiter, (req, res) => {
    console.log("contact route successful");
    res.send("Please contact us in this 123456789");
});


app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
})