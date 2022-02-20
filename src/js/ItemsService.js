const itemsMock = [
    {
      id: 1,
      title: "Boku no Hero Academia",
      categories: ["Action"],
      description:
        "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. ",
      price: "500 ARS",
      pictureURL:
        "https://images-na.ssl-images-amazon.com/images/I/814vVsbVvGL.jpg",
        stock: 6,
        initial: 1
    },
    {
      id: 2,
      categories: ["Action", "Magic"],
      title: "Black Clover",
      description:
        "La historia de Black Clover nos pone en la piel de un joven llamado Asta, el cual quiere convertirse en el mago más grande del reino. Sin embargo, hay un inconveniente: ¡no puede usar magia!",
      price: "300 ARS",
      pictureURL:
        "https://animerelleno.com/storage/animes/poster/black-clover.jpg",
        stock: 4,
        initial: 1
    },
    {
      id: 3,
      categories: ["Action", "SuperNatural"],
      title: "One Piece",
      description:
        "Una historia épica de piratas, donde narra la historia de Monkey D. Luffy quien cuado tenia 7 años, comió accidentalmente una Akuma no mi(Futa del diablo) la cual le dio poderes de goma. ",
      price: "600 ARS",
      pictureURL:
        "https://patagonia-strike.com/onepiece/manga/es/full-color/01/00.png",
        stock: 2,
        initial: 1
    },
    {
      id: 4,
      categories: ["Action", "Science"],
      title: "Dr. Stone",
      description:
        "Senku es un joven extremadamente inteligente con un gran don para la ciencia y una ácida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero más apto para usar los músculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años después",
      price: "200 ARS",
      pictureURL:
        "https://es.web.img2.acsta.net/pictures/19/08/07/10/33/5476043.jpg",
        stock: 7,
        initial: 1
    },
    {
      id: 5,
      categories: ["Action", "SuperNatural"],
      title: "Jujutsu Kaisen",
      description:
        "Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide apuntarse al club de ocultismo del instituto para no dar un palo al agua… Sin embargo, un buen día el sello del talismán que se hallaba escondido en su instituto se rompe, y comienzan a aparecer unos monstruos. Ante este giro de los acontecimientos, Itadori decide adentrarse en el instituto para salvar a sus compañeros. ¿Qué le deparará el destino?",
      price: "400 ARS",
      pictureURL:
        "https://pack-yak.intomanga.com/images/manga/Jujutsu-Kaisen/chapter/166/page/1/dd73049c-bdec-4551-8631-b50137d58f17",
        stock: 10,
        initial: 1
    },
    {
      id: 6,
      categories: ["Action", "Comedy"],
      title: "One Punch Man",
      description:
        "La serie está protagonizada por un héroe que ha entrenado tanto que se ha quedado calvo, y tiene tanta fuerza que puede acabar con cualquier enemigo de un solo puñetazo. Sin embargo, al ser tan fuerte, se aburre y se frustra porque no le cuesta nada vencer sus batallas.",
      price: "700 ARS",
      pictureURL:
        "https://i.pinimg.com/originals/28/68/22/2868227acfdb3f5d5dae9be3aff37eb4.png",
        stock: 5,
        initial: 1
    },
  ];


const ItemsService = {

    GetItems(cateroryId){
        return new Promise((resolve, reject) => {
            setTimeout(function () {
              resolve(itemsMock);
            }, 2000);
          }).then(items => {
              if(cateroryId){
              return items.filter(i => i.categories.some(cat => cat === cateroryId));
          }
          else{
            return items;
          }
        });
    },

    GetItemById(itemId){
        return new Promise((resolve, reject) => {
            setTimeout(function () {
              resolve(itemsMock);
            }, 2000);
          }).then(items => {
              return items.find(i => i.id === Number.parseInt(itemId));
        });
    }
}

export default ItemsService;
  
