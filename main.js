const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      favorite: false
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://play-lh.googleusercontent.com/3lSIao0O6u04909exLv582FJRLwqHUaSKtNRUyOT45XUxmho7jIh6zIFKD6tfKF5ODo",
      favorite: true 
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      favorite: false
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      favorite: false
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      favorite: false,
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      favorite: false
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      favorite: false
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/12513.png",
      favorite: false
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      favorite: true
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      favorite: false
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://media.tenor.com/Dlb7NqumGLMAAAAi/dino-dinosaur.gif",
      favorite: false
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      favorite: true
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      favorite: false
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      favorite: false
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      favorite: false
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly2jtPLVrlEBddddwwYsauSY3D9nkj1RO1A&usqp=CAU",
      favorite: false
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://play-lh.googleusercontent.com/XVHP0sBKrRJYZq_dB1RalwSmx5TcYYRRfYMFO18jgNAnxHAIA1osxM55XHYTb3LpkV8",
      favorite: false
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://store-images.s-microsoft.com/image/apps.12340.13707417064355662.7101e27d-b196-48d4-856b-d3018775f70b.503dc229-59c1-484f-988d-851c2068aa56?mode=scale&q=90&h=1080&w=1920",
      favorite: true
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40rEFgnyXSEcsjnL54o4ZeoY3F0geOQbUIA&usqp=CAU",
      favorite: false
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/3f/2c/44/3f2c44568b8ef84fb16f4042c2950d5f.jpg",
      favorite: false
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/games/switch/s/super-dino-switch/description_image",
      favorite: false
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://preview.redd.it/02g1pfot5ds41.jpg?width=640&crop=smart&auto=webp&s=c1f4b571f5630233d45135d5c256fa6cbbeae128",
      favorite: false
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      favorite: false
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/474x/ba/45/62/ba456219517777e7808e10c685c2a0ee.jpg",
      favorite: false
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.rover.com/blog/wp-content/uploads/2019/06/cat-2934720_1920.jpg",
      favorite: false
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      favorite: true
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      favorite: false
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      favorite: false
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      favorite: false
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://pbs.twimg.com/profile_images/1488679573998948356/1wjxxmEB_400x400.png",
      favorite: false
    }
  ];


  // const animals = document.querySelector('#animals');
   
  // animals.innerHTML = ('Hello');


// for (const pet of pets) {
//     console.log(pet.name);
//   }


// for (let i=0; pets.length; i++) {
//   console.log(pies[3]);

// }


// pets.forEach((pet)=>{
//   console.log(pet);
// })


// const names = pets.map((pet)=>{
//   return pet.name;
// });

// console.log(names);

// const renderToDom = (divID, htmlToRender) => {}
// const app = document.querySelector('#mypets');
// let html = '';

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (array) => {
  let html = '';
  for (const pet of array) {
    html += `<div class="card" style="width: 18rem; margin-top: 20px">
      <h1 class="card-text">${pet.name}</h1>
      <img src="${pet.imageUrl}" class="card-img-top" alt="">
      <div class="card-body">
      <p>${pet.specialSkill}</p>
      </div>
      
    </div>`;
  }

  renderToDom('#mypets', html);
  
};

const filter = (array, petType) => {
  const petArray = [];

  for (const pet of array) {
    if (pet.type === petType) {
      petArray.push(pet);
    }
  }
  return petArray;
};

const showAll = document.querySelector('#viewAll');
const showDino = document.querySelector('#viewDinos');
const showCat = document.querySelector('#viewCats');
const showDog = document.querySelector('#viewDogs');

showAll.addEventListener('click', () => {
  cardsOnDom(pets);
});


showDino.addEventListener('click', () => {
  const dinos = filter(pets, 'dino');
  cardsOnDom(dinos);
});

showCat.addEventListener('click', () => {
  const cats = filter(pets, 'cat');
  cardsOnDom(cats);
});

showDog.addEventListener('click', () => {
  const dogs = filter(pets, 'dog');
  cardsOnDom(dogs);
});






// }
// }

// app.innerHTML = html;
