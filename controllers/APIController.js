import { body, validationResult } from 'express-validator';
import Logger from '../configs/logger.js';
import DB from '../configs/database.js';

export const shortener = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    Logger.error({
      request: req.body,
      errors: errors.array(),
    });
    return res.status(400).json({
      status: 400,
      errors: errors.array(),
    });
  }

  try {
    const [user, created] = await DB.Shortener.findOrCreate({
      where: {
        url: req.body.value.replace(/\s+/g, ' ').trim(),
      },
      defaults: {
        url: req.body.value.replace(/\s+/g, ' ').trim(),
      },
    });
    Logger.info({
      request: req.body,
      response: user,
    });
    return res.status(200).json({
      status: 200,
      message: user,
    });
  } catch (error) {
    Logger.error({
      request: req.body,
      errors: error,
    });
    return res.status(500).json({ error: error.message });
  }
};
