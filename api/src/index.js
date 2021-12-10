import express from 'express'
import cors from 'cors'
import path from 'path'
import { MongoClient, ObjectId } from 'mongodb'


const app = express();
app.use(cors());
app.use(express.json());


const conn = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
const dbSessoes = await conn.db('ingressos').collection('sessoes')

function today() {
    return new Date().toISOString().slice(0, 10);
}

function getDayNumber(data) {
    data = new Date(`${data}T00:00:00`);
    return data.getDate();
}

function getWeekDay(data) {
    let currentDay = today();
    if (currentDay === data)
        return 'HOJE'

    data = new Date(`${data}T00:00:00`);
    switch (data.getDay()) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terça';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sábado';
    }
}

function getMonthName(data) {
    data = new Date(`${data}T00:00:00`);
    switch (data.getMonth()) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}


app.get('/availableDays', async (req, resp) => {

    let currentDay = today();

    let days = await
        dbSessoes
            .aggregate([
                {
                    $match: {
                        data: {
                            $gte: currentDay 
                        }
                    }
                },
                {
                    $group: {
                        _id: '$data'
                    }
                },
                {
                    $project: {
                        _id: 0,
                        data: '$_id'
                    }
                },
                {
                    $sort: {
                        data: 1
                    }
                },
                {
                    $limit: 7
                }
            ])
            .toArray();
    
    
    days = days.map(item => {
        return {
            data: item.data,
            mes: getMonthName(item.data),
            diaSemana: getWeekDay(item.data),
            dia: getDayNumber(item.data)
        }
    })
    
    resp.send(days);
})

app.get('/availableMovies/:date', async (req, resp) => {
    let { date } = req.params;

    let movies = await
        dbSessoes
            .find({ data: date })
            .project({ _id: 0 })
            .toArray();
    
    resp.send(movies);
})

app.get('/movie/cover', async (req, resp) => {
    let { imagePath } = req.query;
    let dirname = path.resolve();
    resp.sendFile(imagePath, { root: path.join(dirname) })
});


app.listen(process.env.PORT, 
                x=> console.log(`Subiu lá na porta ${process.env.PORT}meu nobre`))
