import dotenv from 'dotenv';
import models from '../models';

dotenv.config();

const { Profile, Article, Reaction } = models;

/**
 * @class
 */
class Profiles {
  /**
    * Represents a controller.
    * @constructor
    * @param {object} req - The request object.
    * @param {object} res - The response object.
    */
  static async updateProfile(req, res) {
    const profile = await Profile.findOne({
      where: { userId: req.decoded.id }
    });

    const {
      firstName,
      lastName,
      bio,
      imageUrl,
      interests = []
    } = req.body;

    let normalizedInterests;

    if (!profile.interests) {
      normalizedInterests = interests;
    }
    if (profile.interests) {
      normalizedInterests = [
        ...new Set(profile.interests.concat(interests))
      ];
    }

    const responseData = await profile
      .update({
        firstName: firstName || profile.firstName,
        lastName: lastName || profile.lastName,
        bio: bio || profile.bio,
        interests: normalizedInterests,
        imageUrl: imageUrl || profile.imageUrl
      });
    return res.json({
      message: 'Profile updated successfully',
      firstName: responseData.firstName,
      lastName: responseData.lastName,
      bio: responseData.bio,
      interests: responseData.interests,
      imageURL: responseData.imageURL
    });
  }

  /**
    * Represents a controller.
    * @constructor
    * @param {object} req - The request object.
    * @param {object} res - The response object.
    */
  static async getUserStats(req, res) {
    const { id } = req.decoded;
    const authoredArticles = await Article.findAll({
      where: { userId: id },
      attributes: ['slug', 'description', 'title']
    });
    const likedArticles = await Reaction.findAll({
      where: {
        likedOrDislikedBy: id,
        liked: true
      },
      attributes: [],
      include: [
        {
          model: Article,
          attributes: ['slug', 'description', 'title']
        }
      ]
    });
    const formattedLikedArticles = likedArticles.map(item => ({
      slug: item.Article.slug,
      description: item.Article.description,
      title: item.Article.title
    }));
    let topArticles = await Article.findAll({
      attributes: ['slug', 'description', 'title'],
      include: [
        {
          model: Reaction,
          attributes: ['liked'],
          where: { liked: true }
        }
      ]
    });
    topArticles.sort((a, b) => b.Reactions.length - a.Reactions.length);
    let formattedTopArticles = topArticles.map(item => ({
      slug: item.slug,
      description: item.description,
      title: item.title
    }));

    if (!topArticles.length) {
      topArticles = await Article.findAll({
        attributes: ['slug', 'description', 'title', 'body']
      });
      topArticles.sort((a, b) => b.body.length - a.body.length);
      formattedTopArticles = topArticles.map(item => ({
        slug: item.slug,
        description: item.description,
        title: item.title
      }));
    }
    res.json({
      authored: {
        articles: authoredArticles,
        count: authoredArticles.length
      },
      liked: {
        articles: formattedLikedArticles,
        count: formattedLikedArticles.length
      },
      top: {
        articles: formattedTopArticles.slice(0, 5),
        count: formattedTopArticles.slice(0, 5).length
      }
    });
  }
}

export default Profiles;
