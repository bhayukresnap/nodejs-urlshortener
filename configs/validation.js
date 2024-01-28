import { body } from 'express-validator';

export const apiShortenerValidation = [
  body('value')
    .isURL({ protocols: ['https'] })
    .custom((url) => {
      url = new URL(url);
      return !url.hash && !url.query;
    }),
  body('value')
    .isString()
    .custom((value) => value.replace(/\s+/g, ' ').trim())
    .withMessage('Value must be String!'),
];
