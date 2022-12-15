const team = ['blue', 'red'];


// Selectionner toutes les cases
var selectCase = document.querySelectorAll('.case');
const selectMorpion = document.querySelector('.case-morpion');

// Creation d'une div pour célébrer la victoire
const blkMorpion = document.querySelector('.block-morpion');
const createWin = document.createElement('div');


// Fonction de vérification de victoire
function checkWin() {

    // On met les elements dans un tableaux
    selectCase = Array.from(selectCase);

    // Vérification des équipe gagnantes
    const checkWinRed = (selectCase[0].classList.contains('croix') && selectCase[1].classList.contains('croix') && selectCase[2].classList.contains('croix')) ||
        (selectCase[3].classList.contains('croix') && selectCase[4].classList.contains('croix') && selectCase[5].classList.contains('croix')) ||
        (selectCase[6].classList.contains('croix') && selectCase[7].classList.contains('croix') && selectCase[8].classList.contains('croix')) ||
        (selectCase[0].classList.contains('croix') && selectCase[4].classList.contains('croix') && selectCase[8].classList.contains('croix')) ||
        (selectCase[2].classList.contains('croix') && selectCase[4].classList.contains('croix') && selectCase[6].classList.contains('croix'));

    const checkWinBlue = (selectCase[0].classList.contains('cercle') && selectCase[1].classList.contains('cercle') && selectCase[2].classList.contains('cercle')) ||
        (selectCase[3].classList.contains('cercle') && selectCase[4].classList.contains('cercle') && selectCase[5].classList.contains('cercle')) ||
        (selectCase[6].classList.contains('cercle') && selectCase[7].classList.contains('cercle') && selectCase[8].classList.contains('cercle')) ||
        (selectCase[0].classList.contains('cercle') && selectCase[4].classList.contains('cercle') && selectCase[8].classList.contains('cercle')) ||
        (selectCase[2].classList.contains('cercle') && selectCase[4].classList.contains('cercle') && selectCase[6].classList.contains('cercle'));

    if ( checkWinRed ) {

        blkMorpion.prepend(createWin);

        createWin.setAttribute('id', 'win-red');
        createWin.textContent = 'Equipe rouge a gagner.';

        console.log('red win');

        selectMorpion.classList.add('unclickable');

    }

    if ( checkWinBlue ) {

        blkMorpion.prepend(createWin);

        createWin.setAttribute('id', 'win-blue');
        createWin.textContent = 'Equipe bleu a gagner.';

        console.log('blue win');

        selectMorpion.classList.add('unclickable');

    }

}




// Parcourir et récuperer toutes les cases
for ( const cases of selectCase ) {

    // Ajout d'un cercle a chaque cases après un click
    cases.addEventListener('click', function () {

        if ( team[0] === 'blue' ) {

            // Verifie si il'y a déja un cercle
            if ( !cases.classList.contains('cercle') && !cases.classList.contains('croix') ) {

                cases.classList.add('cercle');

                // Permet de swap l'équipe du bleu au rouge et du rouge au bleu
                [team[0], team[1]] = [team[1], team[0]];

            }

        } else {

            if ( !cases.classList.contains('cercle') && !cases.classList.contains('croix') ) {

                cases.classList.add('croix');

                [team[0], team[1]] = [team[1], team[0]];

            }

        }

        checkWin();

    });

}

// On selectione le bouton reset
const selectReset = document.querySelector('.reset');

// Ajout d'un évenement click sur le bouton reset
selectReset.addEventListener('click', function () {

    // On parcourt les cases et on enleve les class "cercle" et "croix"
    for (const cases of selectCase) {

        if ( document.getElementById('win-red') ||
            document.getElementById('win-blue')
        )
            createWin.parentElement.removeChild(createWin);


        cases.classList.remove('cercle');

        cases.classList.remove('croix');

        selectMorpion.classList.remove('unclickable');

    }
});