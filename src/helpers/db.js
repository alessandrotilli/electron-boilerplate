const { Sequelize, Model, DataTypes } = require('sequelize');
const { remote } = require('electron');
const Path = require('path');

const dbPath = Path.join(remote.app.getPath('userData'), 'db');

const sequelizeOptions = {
  host:              'localhost',
  dialect:           'sqlite',
  dialectModulePath: 'sqlite3-offline',

  pool: {
    idle: 10000,
    max:  5,
    min:  0
  },

  storage: dbPath,

  logging: (data) => console.log(data)
};

const sequelize = new Sequelize('test-db', null, null, sequelizeOptions);

class User extends Model {}

User.init({
  name: DataTypes.STRING
}, { sequelize, modelName: 'user' });

exports.init = () => sequelize.sync({ force: false });
exports.list = () => User.findAll();
exports.add = ({ name }) => User.create({ name});
