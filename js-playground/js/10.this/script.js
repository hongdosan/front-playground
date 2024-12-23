// global this
// let a = 'a'
// console.log(window);

// Method => object
const methodAudio= {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}

methodAudio.play();

// Function => Window Object
function playAudio(title) {
  this.title = title;
  console.log(this);
}

playAudio('play-audio');

// Constructor Function => {}
function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio = new Audio('audio');

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop', 'jazz'],
//     displayCategories() {
//         this.categories.forEach(function (category) {
//             console.log(`title: ${this.title}, category: ${category}`);
//         }, this);
//     }
// }

// audio.displayCategories();

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop', 'jazz'],
//     displayCategories() {
//         this.categories.forEach((category) => {
//             console.log(this);
//         });
//     }
// }

// audio.displayCategories();
