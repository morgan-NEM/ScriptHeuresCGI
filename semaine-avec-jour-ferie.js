function jour_ferie(jourCible) {
  'use strict';

  const joursFerie = {
      lundi: "POL_TIME2$29",
      mardi: "POL_TIME3$29",
      mercredi: "POL_TIME4$29",
      jeudi: "POL_TIME5$29",
      vendredi: "POL_TIME6$29"
  };

  const jourSemaine = {
      lundi: "TIME2$0",
      mardi: "TIME3$0",
      mercredi: "TIME4$0",
      jeudi: "TIME5$0",
      vendredi: "TIME6$0"
  };

  // Parcourir tous les jours de la semaine
  for (const jour in jourSemaine) {
      const id = jourSemaine[jour];
      const element = document.getElementById(id);
      const id2= joursFerie[jour];
      const el = document.getElementById(id2)
      if (element) {
          if (jour === jourCible) {
              el.value = "7,40"
          } else {
              element.value = "7,40";
          }
      } else {
          console.error(`Élément avec l'ID '${id}' non trouvé.`);
      }
  }
}
