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
  password: 'one',
  passwordConfirmation: 'one'
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
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Fullmetal Alchemist',
    yearReleased: '2001',
    description: 'Fullmetal Alchemist (Japanese: 鋼の錬金術師 Hepburn: Hagane no Renkinjutsushi, lit. "Alchemist of Steel") is a Japanese shōnen manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix\'s Monthly Shōnen Gangan magazine between August 2001 and June 2010; the publisher later collected the individual chapters into twenty-seven tankōbon volumes. The world of Fullmetal Alchemist is styled after the European Industrial Revolution. Set in a fictional universe in which alchemy is one of the most advanced scientific techniques, the story follows two alchemist brothers named Edward and Alphonse Elric, who are searching for the philosopher\'s stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.',
    image: 'https://res.cloudinary.com/sfp/image/upload/c_fill,q_60/oth/FunimationStoreFront/1329382/Latvian/1329382_Latvian_ShowDetailHeaderDesktop_52e30361-deff-e611-8175-020165574d09.jpg',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Hunter X Hunter',
    yearReleased: '2011',
    description: 'Hunter × Hunter (Japanese: ハンター×ハンター Hepburn: Hantā Hantā, abbreviated: HxH) is a Japanese manga series written and illustrated by Yoshihiro Togashi. It has been serialized in Weekly Shōnen Jump magazine and journal since March 3, 1998, although the manga has frequently gone on extended hiatuses since 2006. As of June 2017, 360 chapters have been collected into 34 volumes by Shueisha. The story focuses on a young boy named Gon Freecss, who discovers that his father, who he was told was dead, is actually alive and a world-renowned Hunter, a licensed profession for those who specialize in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals. Despite being abandoned by his futher, Gon departs upon a journey to follow in his footsteps, pass the rigorous Hunter Examination, and eventually find his father. Along the way, Gon meets various other Hunters and also encounters the paranormal. The original inspiration for the manga came from Togashi\'s own collecting hobby.',
    image: 'https://ib2.hulu.com/show_key_art/18620?size=1600x600&region=US',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Naruto',
    yearReleased: '2002',
    description: 'Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the sry of Naruto Uzumaki, an adolescent ninja who searches for recognition and dreams of becoming the Hokage, the lader o his village. The story is in two parts, the first set in Naruto\'s pre-teen years, and the second in his tens. The sries is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mntion in Sueisha\'s monthly Hop Step Award the following year, and Naruto (1997).',
    image: 'http://www.wtfgamersonly.com/wp-content/uploads/2015/02/key_art_naruto.jpg',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Naruto Shippuden',
    yearReleased: '2007',
    description: 'Naruto: Shippuden is an anime series adapted from Part II of Masashi Kishimoto\'s manga series, with exactly 500 episodes. It is set two and a half years after Part I in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The series is directed by Hayato Date, and produced by Studio Pierrot and TV Tokyo. It began broadcasting on February 15, 2007 on TV Tokyo, and concluded on March 23, 2017.',
    image: 'https://3.bp.blogspot.com/-gHfhgH6VDXs/WdO6N5gr_bI/AAAAAAAAAc0/_9zf825Ux8k5nLZdnUQIdgVHdGb2Ny62QCEwYBhgL/s1600/Naruto%2BShippuuden.jpg',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
    },{
     nameOfShow: 'Dragon Ball Z',
     yearReleased: '1989',
     description: 'Dragon Ball Z follows the adventures of the protagonist Goku who, along with his companions, defends the Earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and nearly indestructible creatures. While the original Dragon Ball anime followed Goku from his childhood into adulthood, Dragon Ball Z is a continuation of his adult life, but at the same time parallels the maturation of his sons, Gohan and Goten, as well as the evolution of his rivals Piccolo and Vegeta from enemies into allies.',
     image: 'https://vignette.wikia.nocookie.net/vsbattles/images/7/7e/Dragonball_z_by_goddessmechanic2-d7paus4-is-there-still-hope-for-a-live-action-dragon-ball-z-movie-jpeg-199365.jpg/revision/latest/scale-to-width-down/700?cb=20151112140401',
     stars: 5,
     createdBy: users[0],
     comments: {
     content: 'Best show ever!',
     createdBy: users[0]
    }
  }]);
})
    .then((addnimes) => console.log(`${addnimes.length} shows created`))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());
