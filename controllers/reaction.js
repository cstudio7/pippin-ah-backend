import Sequelize from 'sequelize';
import models from '../models';

const { iLike } = Sequelize.Op;
const { Article, Reaction } = models;

const setReaction = async (liked, disliked, slug, userId) => {
  const article = await Article.findOne({
    where: { slug: { [iLike]: slug } }
  });
  const oldReaction = await Reaction.findOne({
    where: {
      articleId: article.id,
      likedOrDislikedBy: userId,
    }
  });
  if (oldReaction) {
    await oldReaction.update({ liked, disliked });
    return;
  }
  await Reaction.create({
    articleId: article.id,
    likedOrDislikedBy: userId,
    liked,
    disliked
  });
};

export default {
  async like(req, res) {
    await setReaction(true, false, req.params.slug, req.decoded.id);
    return res.sendStatus(200);
  },

  async cancelReaction(req, res) {
    await setReaction(false, false, req.params.slug, req.decoded.id);
    return res.sendStatus(200);
  },

  async dislike(req, res) {
    await setReaction(false, true, req.params.slug, req.decoded.id);
    return res.sendStatus(200);
  }
};
