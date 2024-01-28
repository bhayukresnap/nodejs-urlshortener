import DB from '../configs/database.js';
export const homepage = (req, res, next) => res.render('index');
export const url = async (req, res, next) => {
  const response = await DB.Shortener.findByPk(req.params.id);
  if (response === null) return res.sendStatus(404);
  return res.status(301).redirect(response.dataValues.url);
};
