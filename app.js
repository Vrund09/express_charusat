const express = require('express');
const app = express();
const port=3000;

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/home.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/contact.html');
});

app.get('/process', (req, res) => {
    var no1=req.query.eng;
    var no2=req.query.maths;
    var no3=req.query.guj;
    var c=(parseInt(no1)+parseInt(no2)+parseInt(no3))/3;
    var msg=` <table>
        <tr>
            <td>Subject</td>
            <td>Marks</td>
        </tr>
         <tr>
            <td>English</td>
            <td>${English}</td>
        </tr>
        <tr>
            <td>Maths</td>
            <td>${maths}</td>
        </tr>
        <tr>
            <td>GUjarati</td>
            <td>${guj}</td>
        </tr>
    </table>`
    res.send(msg);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
