const express=require('express')
const cors=require('cors')
const newsRoutes = require('./routes/newsRoutes');

const app=express()

app.use(express.json())
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({
    origin: frontendUrl,
    Credentials:true
}))
app.get('/', (req, res) => {
    res.send('Welcome to LiveIndia News API');
});

app.use('/api/news',newsRoutes)

module.exports=app