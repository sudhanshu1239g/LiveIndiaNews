const express=require('express')
const cors=require('cors')
const newsRoutes = require('./routes/newsRoutes');

const app=express()

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    Credentials:true
}))
app.get('/', (req, res) => {
    res.send('Welcome to LiveIndia News API');
});

app.use('/api/news',newsRoutes)

module.exports=app