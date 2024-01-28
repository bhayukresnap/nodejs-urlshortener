export default (sequelize, Sequelize) => {
  const shorteners = sequelize.define(
    'Shorteners',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return shorteners;
};
