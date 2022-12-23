for (i = 0; i < 5; i++) {
    const container = document.querySelector('#biblio');
    const content = document.createElement('div');
    content.classList.add('album' + i);
    
    container.appendChild(content);
    
    const imagen = document.createElement('div');
    imagen.classList.add('adaptador');
    content.appendChild(imagen);
    
    const portada = document.createElement('img');
    portada.src = `../../pags/pag1/imagenTop/${i}.jpg`;
    imagen.appendChild(portada);
    
    const review = document.createElement('a');
    review.setAttribute('style', 'margin-top: 10px')
    review.classList.add('texto'+i);
    content.appendChild(review);
    
    }

    function seccionText (i,nombreAlbum, nombreArtista, texto) {

        const reviewText = document.querySelector(`.${i}`);
        const titulo = document.createElement('div');
        titulo.classList.add('albumTitle');
        reviewText.appendChild(titulo);
        titulo.textContent = nombreAlbum;
        const gif = document.createElement('div');
        gif.classList.add('gifito');
        titulo.appendChild(gif);
        const img = document.createElement('img')
        img.src = `../../images/gifvin.gif`;
        gif.appendChild(img)
        const artista = document.createElement('div');
        artista.classList.add('albumTitle');
        reviewText.appendChild(artista);
        artista.textContent = nombreArtista
        const text = document.createElement('div');
        text.classList.add('description');
        text.textContent = texto;
        reviewText.appendChild(text);
        
        }
        
        seccionText('texto0','TOP 1', 'Graduation', 'Kanye West')
        seccionText('texto1', 'TOP 2', 'Illmatic', 'Nas');
        seccionText('texto2', 'TOP 3', '2001', 'Dr.Dre');
        seccionText('texto3', 'TOP 4', 'Late Registration', 'Kanye West');
        seccionText('texto4', 'TOP 5', 'Discovery', 'Daft Punk')
        

    