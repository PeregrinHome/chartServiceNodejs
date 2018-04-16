const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    time: {
        type: Date,
        default: Date.now()
    },
    value: {
        type: Number,
        required: true
    }
});

const typeSchema = mongoose.Schema({
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
        default: 'Описание типа данных'
    },
    data: [dataSchema]
});

const deviceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    USER_ID: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    token: { // Сгенерировать рандомно и в цикле проверять токен на отсутсвие в БД
        type: String,
        index: true,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: 'Описание устройства'
    },
    types: [typeSchema]
});

module.exports = mongoose.model('Device', deviceSchema);