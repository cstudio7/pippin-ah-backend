module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    comment: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.Article, {
      foreignKey: 'articleId'
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Comment.hasMany(models.CommentReaction, {
      foreignKey: 'commentId'
    });
  };
  return Comment;
};
