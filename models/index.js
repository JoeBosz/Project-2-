const user = require('./user');
const wine = require('./wine');

user.hasMany(wine, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

wine.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, wine };