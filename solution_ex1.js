/* Énoncé */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets ont été triés par ordre décroissant (du plus grand au plus petit) en fonction de la moyenne de chaque élève.
*/

/* Ma solution */

const sortedStudents = (arr) => {
  console.log(
    arr[0].grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length
  );

  return arr.sort((a, b) => {
    return (
      /**  La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
       * L'accumulateur (acc): la valeur précédemment retournée par le dernier appel du callback, ou valeurInitiale, si elle est fournie (c'est la valeur « accumulée » au fur et à mesure des appels)
       * valeurCourante (cur): la valeur de l'élément courant actuellement manipulé dans le tableau.
       */
      b.grades.reduce((acc, cur) => acc + cur) / b.grades.length -
      a.grades.reduce((acc, cur) => acc + cur) / a.grades.length
    );
  });
};

/* Test à passer */

console.log(
  sortedStudents([
    { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
    { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
    { name: "Ana", grades: [11, 14, 3, 14, 12, 14] },
    { name: "Sara", grades: [10, 12, 14, 15, 14, 19] },
  ])
);

/* Returns */

/* 
  [
    { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
    { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
    { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
    { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
  ]
  */
