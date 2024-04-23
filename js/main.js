
let imgs = document.getElementsByClassName(`img`);
let img;
let nextImg = 0;
console.log(imgs);

// EVENT LISTNER E FUNZIONE `NEXT`

document.getElementById(`next`).addEventListener("click", function () {

    for (let i = 0; i < imgs.length; i++) {



        // SELEZIONO IMG DEL CICLO CORRENTE
        img = imgs[i];

        console.log(img, imgs, nextImg)

        // SE CONTIENE ACTIVE ALLORA LO RIMUOVO
        if (img.classList.contains(`active`)) {

            console.log(`ho trovato active e rimossa per aggiungerla al nextimg`)

            imgs[i].classList.remove(`active`)


            // SELEZIONO IMG SUCCESSIVA A QUELLA CON ACTIVE
            nextImg = i + 1;
            // SE L-IMMAGINE SUCCESSIVA E MAGGIORE DEL NUMERO DI IMMAGINI VADO A QUELLA INIZIALE
            if (nextImg >= imgs.length) {
                nextImg = 0;
                console.log(`next img 0`)
            }
            // AGGIUNGO LA CLASSE ALL' IMMGINE SUCCESSIVA
            imgs[nextImg].classList.add(`active`);

            break
        }

    }



});

// EVENT LISTNER E FUNZIONE PREVIOUS

document.getElementById(`prev`).addEventListener("click", function () {

    for (let i = 0; i < imgs.length; i++) {



        // SELEZIONO IMG DEL CICLO CORRENTE
        img = imgs[i];

        console.log(img, imgs, nextImg)

        // SE CONTIENE ACTIVE ALLORA LO RIMUOVO
        if (img.classList.contains(`active`)) {

            console.log(`ho trovato active e rimossa per aggiungerla al nextimg`)

            imgs[i].classList.remove(`active`)


            // SELEZIONO IMG PRECEDENTE A QUELLA CON ACTIVE
            nextImg = i - 1;
            // SE L-IMMAGINE SUCCESSIVA E MINORE O UGUALE A 0 VADO A QUELLA FINALE
            if (nextImg <= 0) {
                nextImg = imgs.length - 1;
                console.log(`next img 4`)
            }
            // AGGIUNGO LA CLASSE ALL' IMMGINE PRECEDENTE
            imgs[nextImg].classList.add(`active`);

            break
        }

    }



});

