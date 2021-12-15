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

// GET DIAS DISPONÍVEIS //

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



// GET FILMES DISPONÍVEIS //

app.get('/availableMovies/:date', async (req, resp) => {
    let { date } = req.params;

    let movies = await
        dbSessoes
            .find(
                { data: date }
            )
            .project({ _id: 0 })
            .toArray();
    
    resp.send(movies);
})

app.get('/movie/cover', async (req, resp) => {
    let { imagePath } = req.query;
    let dirname = path.resolve();
    resp.sendFile(imagePath, { root: path.join(dirname) })
});



// GET SESSÕES DISPONÍVEIS //

app.get('/availableSessions', async (req, resp) => {
    let { date, movie } = req.query;

    let session = await
        dbSessoes.findOne({
            'data': date,
            'filme.nome': movie
        });
    
    resp.send(session.horarios);
});



// GET ASSENTOS DISPONÍVEIS //

app.get('/availableSeats', async (req, resp) => {
    let { date, movie, hour, room } = req.query

    let seats = await
        dbSeats.find({
            'data': date,
            'filme': movie,
            'hora': hour,
            'sala': room
        })
        .sort({
            'lugar.letra': 1,
            'lugar.numero': 1,
        })
        .toArray();
    
    
    let fileiras = [];
    let fileiraObj = {};

    for (let seat of seats) {
        if (seat.lugar.letra !== fileiraObj.fileira) {
            fileiraObj = {
                fileira: seat.lugar.letra,
                lugares: []
            }
            fileiras.push(fileiraObj);
        }

        fileiraObj.lugares.push({
            numero: seat.lugar.numero,
            situacao: seat.lugar.situacao,
            usuario: seat.lugar.usuario
        })
    }
    
    
    resp.send(fileiras);
});



// GET ASSENTO RESERVADO //

app.put('/reserveSeat', async (req, resp) => {
    let { seat: { date, movie, hour, room, letter, number }, user } = req.body

    await dbSeats.updateOne({
        'data': date,
        'filme': movie,
        'hora': hour,
        'sala': room,
        'lugar.letra': letter,
        'lugar.numero': number
    }, {
        '$set': {
            'lugar.situacao': 'Reservado',
            'lugar.usuario': user,
            'lugar.dataReserva': new Date()
        }
    })

    resp.sendStatus(200);
});


app.listen(process.env.PORT, 
                x=> console.log(`Subiu lá na porta ${process.env.PORT}meu nobre`))
