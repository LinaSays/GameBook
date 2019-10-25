const Sequelize = require('sequelize');

// DB connection
const { sequelize } = require('./db');

const { Pins } = require('./app/models/pins');
const { Role } = require('./app/models/role');
const { Story } = require('./app/models/story');
const { Category } = require('./app/models/category');
const { Choice } = require('./app/models/choice');
const { Situation } = require('./app/models/situation');
const { User } = require('./app/models/user');

// const User = UserModel();
// const Role = RoleModel();
const UserPins = sequelize.define('user_has_pins', {});
// const Pins = PinsModel();
// const Story = StoryModel();
const UserStory = sequelize.define('user_read_story', {});
// const Category = CategoryModel();
const StoryCategory = sequelize.define('story_has_category', {});
// const Choice = ChoiceModel();
// const Situation = SituationModel();

// User table with role_id
User.belongsTo(Role);

// story table with author_id
Story.belongsTo(User);

// situation table with story_id
Situation.belongsTo(Story);

// user_has_pins
Pins.belongsToMany(User, { through: UserPins, unique: false, foreignKey: 'pins_id' });
User.belongsToMany(Pins, { through: UserPins, unique: false, foreignKey: 'user_id' });

// story_has_category
Category.belongsToMany(Story, { through: StoryCategory, unique: false, foreignKey: 'category_id' });
Story.belongsToMany(Category, { through: StoryCategory, unique: false, foreignKey: 'story_id' });

// choice table
Choice.belongsTo(Situation, { foreignKey: 'id_situation_parent' });
Choice.belongsTo(Situation, { foreignKey: 'id_situation_child' });

// user_read_story


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize,
  User,
  Role,
  Pins,
  Story,
  Category,
  Choice,
  Situation,
};
