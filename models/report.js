module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    report: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

  return Report;
};