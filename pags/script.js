
for (i = 0; i < 6; i++) {
const container = document.querySelector('#biblio');
const content = document.createElement('div');
content.classList.add('album' + i);
content.setAttribute('style', 'color: blue; background: #302f2f; margin: 50px; display:flex;');  
container.appendChild(content);

const imagen = document.createElement('div');
imagen.classList.add('adaptador');
content.appendChild(imagen);

const portada = document.createElement('img');
portada.src = `../../pags/pag1/imagenTop/${i}.jpg`;
imagen.appendChild(portada);

const review = document.createElement('a');
review.setAttribute('style', 'margin-top: 40px')
review.classList.add('texto'+i);
content.appendChild(review);

}



function seccionText (i,nombreAlbum, nombreArtista, texto) {

const reviewText = document.querySelector(`.${i}`);
const titulo = document.createElement('div');
titulo.classList.add('albumTitle');
reviewText.appendChild(titulo);
titulo.textContent = nombreAlbum;
const artista = document.createElement('div');
artista.classList.add('albumTitle');
reviewText.appendChild(artista);
artista.textContent = nombreArtista
const text = document.createElement('div');
text.classList.add('description');
text.textContent = texto;
reviewText.appendChild(text);

}

seccionText('texto0','Reasonable Doubt (1996)', 'JAY-Z', 'This is the first JAY-Z\'s album')
seccionText('texto1', 'Revolver (1966)', 'The Beatles');
seccionText('texto2', 'Back To Black (2006)', 'Amy Winehouse');
seccionText('texto3', 'Donuts (2006)', 'J Dilla');
seccionText('texto4', 'The Chronic (1992)', 'Dr.Dre')

