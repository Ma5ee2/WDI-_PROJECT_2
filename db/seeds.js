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
  username: 'Masee',
  email: 'hussainmasee@gmail.com',
  password: '123',
  passwordConfirmation: '123'
}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Addnime
  .create([{
    nameOfShow: 'One Piece',
    yearReleased: '1997',
    description: 'One Piece (Japanese: ワンピース Hepburn: Wan Pīsu) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s Weekly Shōnen Jump magazine since July 22, 1997, with the chapters collected into 86 tankōbon volumes to date. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world\'s ultimate treasure known as "One Piece" in order to become the next Pirate King.',
    image: 'https://media.giphy.com/media/YWB6Hi29vA3jG/giphy.gif',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Fullmetal Alchemist',
    yearReleased: '2001',
    description: 'Fullmetal Alchemist (Japanese: 鋼の錬金術師 Hepburn: Hagane no Renkinjutsushi, lit. "Alchemist of Steel") is a Japanese shōnen manga series written and illustrated by Hiromu Arakawa. The world of Fullmetal Alchemist is styled after the European Industrial Revolution. Set in a fictional universe in which alchemy is one of the most advanced scientific techniques, the story follows two alchemist brothers named Edward and Alphonse Elric, who are searching for the philosopher\'s stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.',
    image: 'https://media.giphy.com/media/lo0rZAjATaRnW/giphy.gif',
    stars: 5,
    createdBy: users[0],
    comments: {
      content: 'Best show ever!',
      createdBy: users[0]
    }
  },{
    nameOfShow: 'Hunter X Hunter',
    yearReleased: '2011',
    description: 'Hunter × Hunter (Japanese: ハンター×ハンター Hepburn: Hantā Hantā, abbreviated: HxH) is a Japanese manga series written and illustrated by Yoshihiro Togashi. The story focuses on a young boy named Gon Freecss, who discovers that his father, who he was told was dead, is actually alive and a world-renowned Hunter, a licensed profession for those who specialize in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals. Along the way, Gon meets various other Hunters and also encounters the paranormal. The original inspiration for the manga came from Togashi\'s own collecting hobby.',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/04/16/45/041645708a74eada038b388db4ac2928.gif',
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
    image: 'https://media.giphy.com/media/Z9UESyYKMOJYk/giphy.gif',
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
     image: 'https://cdn.suwalls.com/wallpapers/anime/dragon-ball-z-16145-1920x1080.jpg',
     stars: 5,
     createdBy: users[0],
     comments: {
     content: 'Best show ever!',
     createdBy: users[0]
    }
    },{
     nameOfShow: 'One-Punch Man',
     yearReleased: '2015',
     description: 'One-Punch Man (Japanese: ワンパンマン Hepburn: Wanpanman) is an ongoing Japanese superhero parody webcomic created by an author using the pseudonym One[4] which began publication in early 2009.[5] The series quickly went viral, surpassing 7.9 million hits in June 2012.[6] The Japanese shortened name Wanpanman is a play on the long-running children\'s character Anpanman,[7] wanpan being a contraction of wanpanchi ("one punch").[8] One-Punch Man tells the story of Saitama, an extremely overpowered superhero, who has grown bored by the absence of challenge in his fight against evil and seeks to find a worthy opponent.',
     image: 'https://images.genius.com/9eadedafb4453eaca88a3ef617c76703.540x302x30.gif',
     stars: 5,
     createdBy: users[0],
     comments: {
     content: 'Best show ever!',
     createdBy: users[0]
    }
    },{
     nameOfShow: 'Attack on Titan',
     yearReleased: '1989',
     description: 'Attack on Titan (Japanese: 進撃の巨人 Hepburn: Shingeki no Kyojin, lit. "Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. The series began in Kodansha\'s Bessatsu Shōnen Magazine on September 9, 2009, and has been collected into 23 tankōbon volumes as of August 2017. It is set in a world where humanity lives in cities surrounded by enormous walls; a defense against the Titans, gigantic humanoids that eat humans seemingly without reason. The story initially centers on Eren Yeager and his childhood friends Mikasa Ackerman and Armin Arlert, who join the military to fight the Titans after their hometown is invaded and Eren\'s mother is eaten. However, as the story progresses and the truths about the Titans are slowly revealed to the reader, the narrative shifts to encompass Historia Reiss, squad leader Levi, Eren\'s father Grisha, and other supporting characters.',
     image: 'https://media.giphy.com/media/fdMGvqJkcHG92/giphy.gif',
     stars: 4,
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
