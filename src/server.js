const proffys = [
    {name: "Gabriel Pereira", 
    avatar:"https://avatars3.githubusercontent.com/u/61991172?s=460&u=83130f85d0af1735f7d589145003ea05fa058b78&v=4", 
    whatsapp: "85 98676-3648", 
    bio :"Entusiasta das melhores tecnologias de química avançada.     Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "", 
    cost: "20", 
    weekday:[0],
    time_from:[720], 
    time_to:[1220]
},

    {
    name: "Diego Fernando", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "888888888", 
    bio :"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday:[1],
    time_from:[720], 
    time_to:[1220]
},
{
    name: "Mayk Brito", 
    avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
    whatsapp: "888888888", 
    bio :"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday:[1],
    time_from:[720], 
    time_to:[1220]
}

]

const sujects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filter =req.query
    return res.render("study.html", { proffys, filters, subjects})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks= require ('nunjucks')
nunjucks.configure('src/views', {
    express: server ,
    noCache: true,
})

server
// configurar arquivos estáticos (css,scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding) 
.get("/study" , pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

