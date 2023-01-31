const user = require('./user');
const wine = require('./wine');

User.hasMany(wine, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, wine };