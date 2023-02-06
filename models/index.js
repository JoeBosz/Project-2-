const User = require("./User");
const Wine = require("./Wine");


User.hasMany(Wine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Wine.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Wine };
