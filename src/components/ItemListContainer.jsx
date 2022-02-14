import React from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [items, setItems] = React.useState([]);

  const itemsMock = [
    {
      id: 1,
      title: "Boku no Hero Academia",
      description:
        "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. ",
      price: "500 ARS",
      pictureURL:
        "https://images-na.ssl-images-amazon.com/images/I/814vVsbVvGL.jpg",
    },
    {
      id: 2,
      title: "Black Clover",
      description:
        "La historia de Black Clover nos pone en la piel de un joven llamado Asta, el cual quiere convertirse en el mago más grande del reino. Sin embargo, hay un inconveniente: ¡no puede usar magia!",
      price: "300 ARS",
      pictureURL:
        "https://mangaplus.shueisha.co.jp/drm/title/200020/title_thumbnail_portrait_list/14344.jpg?key=add601b6091147c8e536e7b69685184f&duration=86400",
    },
    {
      id: 3,
      title: "One Piece",
      description:
        "Una historia épica de piratas, donde narra la historia de Monkey D. Luffy quien cuado tenia 7 años, comió accidentalmente una Akuma no mi(Futa del diablo) la cual le dio poderes de goma. ",
      price: "600 ARS",
      pictureURL:
        "https://patagonia-strike.com/onepiece/manga/es/full-color/01/00.png",
    },
    {
      id: 4,
      title: "Dr. Stone",
      description:
        "Senku es un joven extremadamente inteligente con un gran don para la ciencia y una ácida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero más apto para usar los músculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años después",
      price: "200 ARS",
      pictureURL:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627163093i/58621350._UY1208_SS1208_.jpg",
    },
    {
      id: 5,
      title: "Jujutsu Kaisen",
      description:
        "Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide apuntarse al club de ocultismo del instituto para no dar un palo al agua… Sin embargo, un buen día el sello del talismán que se hallaba escondido en su instituto se rompe, y comienzan a aparecer unos monstruos. Ante este giro de los acontecimientos, Itadori decide adentrarse en el instituto para salvar a sus compañeros. ¿Qué le deparará el destino?",
      price: "400 ARS",
      pictureURL:
        "https://pack-yak.intomanga.com/images/manga/Jujutsu-Kaisen/chapter/166/page/1/dd73049c-bdec-4551-8631-b50137d58f17",
    },
    {
      id: 6,
      title: "One Punch Man",
      description:
        "La serie está protagonizada por un héroe que ha entrenado tanto que se ha quedado calvo, y tiene tanta fuerza que puede acabar con cualquier enemigo de un solo puñetazo. Sin embargo, al ser tan fuerte, se aburre y se frustra porque no le cuesta nada vencer sus batallas.",
      price: "700 ARS",
      pictureURL:
        "https://i.pinimg.com/originals/28/68/22/2868227acfdb3f5d5dae9be3aff37eb4.png",
    },
  ];

  const dataPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(itemsMock);
    }, 2000);
  });

  dataPromise.then((responseData) => {
    setItems(responseData);
  });

  return <ItemList items={items}></ItemList>;
}
