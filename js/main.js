function createRndNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomDate() {
  let objectDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  let day = objectDate.getDate();
  let month = objectDate.getMonth() + 1;
  let year = objectDate.getFullYear(); 
  let format = `${month}/${day}/${year}`;
  return format;
}

class Posts {
  constructor(name, id, likeBtn) {
    this.author = {
      name,
      imgProfile: `https://unsplash.it/300/300?image=15`,
      id,
    };
    this.date = getRandomDate();
    this.postPic = `https://unsplash.it/600/300?image=171`
    this.postText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia laborum quidem laudantium est totam reiciendis ex corrupti facere unde, expedita doloribus maxime vel officia ratione! Recusandae quisquam totam unde.";
    this.likes = createRndNum(0, 100),
    this.likeBtn = likeBtn,
    this.isBtnActive = false;
  }
}

const listOfUsers = ['Giovanni Franchi', 'Bob Dylan', 'Elvis Presley', 'John Lennon', 'David Bowie', 'Leonardo Di Caprio'];
const container = document.getElementById('container');
const template = document.getElementById('template-post');
const listOfObjUsers = listOfUsers.map((element, index)=> new Posts(element, index));

function createPostElement(arrayofObj, container, template){
    const fragment = document.createDocumentFragment();
    arrayofObj.forEach(element =>{
        const newTemplate = template.content.cloneNode(true);
        const img = newTemplate.querySelector('.profile-pic');
        const name = newTemplate.querySelector('.post-meta__author');
        const date = newTemplate.querySelector('.post-meta__time');
        const text = newTemplate.querySelector('.post__text');
        const postImg = newTemplate.querySelector('.post__image');
        const likeBtn = newTemplate.querySelector('.js-like-button');
        const counter = newTemplate.querySelector('.js-likes-counter');
        img.src = element.author.imgProfile;
        name.innerText = element.author.name;
        date.innerText = element.date;
        text.innerText = element.postText;
        postImg.src = element.postPic;
        element.counter = counter;
        element.likeBtn = likeBtn;
        counter.innerText = element.likes;
        fragment.append(newTemplate);
    })
    container.append(fragment);
}

createPostElement(listOfObjUsers, container, template);


const posts = document.querySelectorAll('.post');

// posts.forEach(element =>{
//     // const counter = element.querySelector('.likes__cta');
//     const likeBtn = element.querySelector('.likes__cta .like-button');
//     console.log(like)
//     let active = false;
//     element.addEventListener('click', ()=>{
//         if(!active){
//             active = true;
//             likeBtn.style.color = 'red';
//             // counter.innerText = Number(counter.innerText) + Number(counter.innerText);
//         }else {
//             active = false;
//             likeBtn.style.color = 'black';
//             // counter.innerText = Number(counter.innerText) - Number(counter.innerText)
//         }
//     })
// })














