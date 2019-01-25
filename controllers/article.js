import Sequelize from 'sequelize';
import dateFns from 'date-fns';
import models from '../models';
import { generateSlug, getReadTime, categories } from '../helpers';

const {
  Article,
  User,
  Profile,
  Report
} = models;

export default {
  async createArticle(req, res) {
    const {
      title, body, description, category,
    } = req.body;

    const userId = req.decoded.id;
    const user = await User.findOne(
      {
        where: { id: userId },
        include: [{ model: Profile }]
      });

    const profile = user.Profile;
    const article = await Article
      .create({
        title: title.trim(),
        body: body.trim(),
        description: description.trim(),
        category: category.trim(),
        slug: `${generateSlug(title)}-${user.username}`,
        userId,
        readTime: getReadTime(body.trim())
      });

    return res.status(201).json({
      title: article.title,
      body: article.body,
      description: article.description,
      slug: article.slug,
      rating: article.rating,
      createdAt: article.createdAt,
      readTime: article.readTime,
      author: {
        username: user.username,
        bio: profile.bio,
        image: profile.imageUrl
      }
    });
  },

  async tagArticle(req, res) {
    let normalizedTags;
    const { title, tags } = req.body;

    const { id: userId } = req.decoded;
    const article = await Article.findOne({ where: { userId, title } });

    normalizedTags = [tags.trim().toLowerCase()];

    if (article.tags) {
      normalizedTags = [
        ...new Set(article.tags.concat(tags.trim().toLowerCase()))
      ];
    }

    await article.update({ tags: normalizedTags });
    return res.sendStatus(200);
  },

  async reportArticle(req, res) {
    const {
      body: { report },
      params: { slug },
      decoded: { id: userId }
    } = req;

    const article = await Article.findOne({ where: { slug } });
    const normalizedReport = report.trim().replace(/  +/g, ' ');

    await Report.create({
      report: normalizedReport,
      articleId: article.id,
      userId
    });

    return res.status(201).send({ message: 'Your report has been registered' });
  },


  async getArticles(req, res) {
    const {
      category,
      author,
      keywords
    } = req.query;

    const tag = '';
    const article = await Article.findAll({
      where: {
        [and]: [
          {
            [or]: {
              title: { [iLike]: keywords ? `%${keywords}%` : '%' },
              description: { [iLike]: keywords ? `%${keywords}%` : '%' },
              body: { [iLike]: keywords ? `%${keywords}%` : '%' }
            },
          },
          {
            [or]: {
              '$User.Profile.lastName$': {
                [iLike]: author ? `%${author}%` : '%'
              },
              '$User.Profile.firstName$': {
                [iLike]: author ? `%${author}%` : '%'
              },
            }
          },
          {
            category: category || categories
          },
          {
            tags: tag ? { [contains]: [tag] } : { [notIn]: [] }
          }
        ]
      },
      include: [{
        model: User,
        required: false,
        include: [{
          model: Profile,
          required: false
        }]
      }
      ]
    });


    const responseArray = article.map(item => ({
      author: item.User.username,
      firstName: item.User.Profile.firstName,
      lastName: item.User.Profile.lastName,
      bio: item.User.Profile.bio,
      imageUrl: item.User.Profile.imageUrl,
      title: item.title,
      description: item.description,
      category: item.category,
      body: item.body,
      slug: item.slug,
      createdOn: dateFns.format(new Date(item.createdAt), 'D MMMM YYYY, h:ssA'),
      modifiedOn: dateFns.format(new Date(item.updatedAt), 'D MMMM YYYY, h:ssA')
    })
    );
    return res.json({
      responseArray,
      count: article.length
    });
  },

  async getArticleBySlug(req, res) {
    const { slug } = req.params;
    const article = await Article.findOne({ where: { slug } });
    return res.json(article);
  },
};
