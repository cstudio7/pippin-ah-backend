module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Article.associate = (models) => {
    Article.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

    /*  Article.hasMany(models.Comment, {
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    }); */
  };
  return Article;
};