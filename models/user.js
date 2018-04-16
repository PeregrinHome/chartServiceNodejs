const mongoose = require('mongoose');

const lineSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#555555' //Установить рандомное значение
    },
    alias_type: {
        type: String,
        required: true
    }
});

const chartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Описание графика'
    },
    type: {
        name: {
            type: String,
            default: 'time'
        },
        border: {
            type: Date,
            default: Date.now()
        }
    },
    lines: [lineSchema]
});

const blockSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    set: {
        type: Number,
        default: 0
    },
    offset: {
        type: Number,
        default: 0
    },
    alias_chart: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'show'
    }
});

const panelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    blocks: [blockSchema]
});

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        time: {
            type: Date,
            default: Date.now()
        },
        value: {// Сгенерировать рандомно и в цикле проверять токен на отсутсвие в БД
            type: String,
            index: true,
            unique: true,
            default: 'lyn3cb87vt35vn3y'
        }
    },
    charts: [chartSchema],
    panels: [panelSchema]
});

module.exports = mongoose.model('User', userSchema);