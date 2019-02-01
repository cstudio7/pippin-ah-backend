import Sequelize from 'sequelize';
import models from '../models';

const { Article, Highlight } = models;
const { iLike } = Sequelize.Op;

export default {
  async addHighlight(req, res) {
    const {
      params: { slug },
      decoded: { id: userId },
      body: {
        highlightedText,
        startIndex,
        stopIndex,
        comment
      }
    } = req;
    const article = await Article
      .findOne({ where: { slug: { [iLike]: slug } } });
    const articleId = article.id;

    const highlight = await Highlight.create({
      articleId,
      userId,
      highlightedText,
      startIndex: Number(startIndex),
      stopIndex: Number(stopIndex),
      comment
    });
    return res.status(201).json({
      highlightedText: highlight.highlightedText,
      comment: highlight.comment,
      startIndex: highlight.startIndex,
      stopIndex: highlight.stopIndex,
      articleId: highlight.articleId
    });
  },

  async getAllHighlights(req, res) {
    const { decoded: { id: userId }, params: { slug } } = req;
    const article = await Article
      .findOne({ where: { slug: { [iLike]: slug } } });
    const articleId = article.id;
    const highlights = await Highlight
      .findAll({ where: { articleId, userId } });
    return res.json({ highlights });
  }
};
