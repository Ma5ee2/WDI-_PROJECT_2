const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');

mongoose.connect(dbUri, { useMongoClient: true });

// Require the model
const Addnime = require('../models/addnime');
const User = require('../models/user');

// Drop the model
Addnime.collection.drop();
User.collection.drop();

// Create the models
User
.create([{
  username: 'Ma5ee2',
  email: 'hussainmasee@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  console.log(`${users.length} users created`);
   return Addnime
  .create([{
    nameOfShow: 'One Piece',
    yearReleased: '1997',
    description: 'One Piece (Japanese: ワンピース Hepburn: Wan Pīsu) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s Weekly Shōnen Jump magazine since July 22, 1997, with the chapters collected into 86 tankōbon volumes to date. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world\'s ultimate treasure known as "One Piece" in order to become the next Pirate King.',
    image: 'https://ibdp.videovore.com/show_art/2138?size=2048x768',
    stars: 5,
    createdBy: users[0]
  },{
    nameOfShow: 'Fullmetal Alchemist ',
    yearReleased: '2001',
    description: 'Fullmetal Alchemist (Japanese: 鋼の錬金術師 Hepburn: Hagane no Renkinjutsushi, lit. "Alchemist of Steel") is a Japanese shōnen manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix\'s Monthly Shōnen Gangan magazine between August 2001 and June 2010; the publisher later collected the individual chapters into twenty-seven tankōbon volumes. The world of Fullmetal Alchemist is styled after the European Industrial Revolution. Set in a fictional universe in which alchemy is one of the most advanced scientific techniques, the story follows two alchemist brothers named Edward and Alphonse Elric, who are searching for the philosopher\'s stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.',
    image: 'https://res.cloudinary.com/sfp/image/upload/c_fill,q_60/oth/FunimationStoreFront/1329382/Latvian/1329382_Latvian_ShowDetailHeaderDesktop_52e30361-deff-e611-8175-020165574d09.jpg',
    stars: 5,
    createdBy: users[0]
  }])
  .then((addnimes) => console.log(`${addnimes.length} shows created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close())
})
