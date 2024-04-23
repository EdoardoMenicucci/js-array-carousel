
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

            // console.log(`ho trovato active e rimossa per aggiungerla al nextimg`)

            imgs[i].classList.remove(`active`)


            // SELEZIONO IMG SUCCESSIVA A QUELLA CON ACTIVE
            nextImg = i + 1;
            // SE L-IMMAGINE SUCCESSIVA E MAGGIORE DEL NUMERO DI IMMAGINI VADO A QUELLA INIZIALE
            if (nextImg >= imgs.length) {
                nextImg = 0;
                // console.log(`next img 0`)
            }
            // AGGIUNGO LA CLASSE ALL' IMMGINE SUCCESSIVA
            imgs[nextImg].classList.add(`active`);

            break
        }

    }



});

// EVENT LISTNER E FUNZIONE PREVIOUS

document.getElementById(`prev`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {



        // SELEZIONO IMG DEL CICLO CORRENTE
        img = imgs[i];

        console.log(img, imgs, nextImg)

        // SE CONTIENE ACTIVE ALLORA LO RIMUOVO
        if (img.classList.contains(`active`)) {

            // console.log(`ho trovato active e rimossa per aggiungerla al nextimg`)

            imgs[i].classList.remove(`active`)


            // SELEZIONO IMG PRECEDENTE A QUELLA CON ACTIVE
            nextImg = i - 1;
            // SE L-IMMAGINE SUCCESSIVA E MINORE O UGUALE A 0 VADO A QUELLA FINALE
            if (nextImg <= 0) {
                nextImg = imgs.length - 1;
                // console.log(`next img 4`)
            }
            // AGGIUNGO LA CLASSE ALL' IMMGINE PRECEDENTE
            imgs[nextImg].classList.add(`active`);

            break
        }

    }



});

// SELEZIONO L IMMAGINE DA FAR APPARIRE NELLA SELEZIONE SOTTOSTANTE BONUS 2 

// n1

document.getElementById(`n1`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove(`active`)
    }
    imgs[0].classList.add(`active`)
})

//n2 

document.getElementById(`n2`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove(`active`)
    }
    imgs[1].classList.add(`active`)
})

// n3

document.getElementById(`n3`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove(`active`)
    }
    imgs[2].classList.add(`active`)
})

// n4

document.getElementById(`n4`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove(`active`)
    }
    imgs[3].classList.add(`active`)
})

// n5

document.getElementById(`n5`).addEventListener("click", function () {

    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove(`active`)
    }
    imgs[4].classList.add(`active`)
})
