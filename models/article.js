module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.String,
      allowNull: false
    },
    description: {
      type: DataTypes.String,
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

    Article.hasMany(models.Comment, {
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    });

    Article.hasMany(models.Report, {
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    });
  };
  return Article;
};
