/** declare list of authors based on img names 
 * 
 * to do. 
 * check special characters in name, 
 * check what happens with several first names or several last names
*/
let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];
/** create object per author */
let Author = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
    this.altText = `Portrait of ${firstName} ${lastName}`;
    this.link = `authors/${firstName.toLowerCase()}-${lastName.toLowerCase()}.html`;
}

/** create function createTiles to create list items
 * 
<li>
    <a href="authors/andreas-neeser.html">
        <img src="img/tile_andreas_neeser.jpg" alt="Portrait of Andreas Neeser">
        <h2>Andreas Neeser</h2>
    </a>
</li>
*/
function createTiles(authors){
    let tileList = [];
    authors.forEach(author => {
        const currentAuthor = new Author(author.firstName, author.lastName);
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        const imgTag = document.createElement('img');
        const h2Tag = document.createElement('h2');

        aTag.href = currentAuthor.link;
        imgTag.src = currentAuthor.imgUrl;
        imgTag.alt = currentAuthor.altText;
        h2Tag.textContent = currentAuthor.firstName + ' ' + currentAuthor.lastName; 

        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);

        tileList.push(liTag);
    });
    return tileList;
}

/** create function addTiles to add all tiles to the DOM randomly */
function addTiles(list){
    const ulTag = document.querySelector('main ul');
    /** randomize list first */
    list = randomize(list);
    list.forEach(li => ulTag.appendChild(li));
}

// tempList
function randomize(list){
    let randomNumber = 0;
    let tempList = [];
    list.forEach(item => {
        do {
            randomNumber = Math.floor(Math.random() * (list.length));
        } while(tempList[randomNumber] !== undefined)

        tempList[randomNumber]= item;
    });
    return tempList;
}

addTiles(createTiles(authors));

/** add an eventListener on the logo to rebuild the list on click */
