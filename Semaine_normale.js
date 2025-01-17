const ids = [
    "UC_DAILYREST2$0", "UC_DAILYREST3$0", "UC_DAILYREST4$0", "UC_DAILYREST5$0", "UC_DAILYREST6$0",
    "UC_DAILYREST2$1", "UC_DAILYREST3$1", "UC_DAILYREST4$1", "UC_DAILYREST5$1", "UC_DAILYREST6$1",
    "UC_DAILYREST2$2", "UC_DAILYREST3$2", "UC_DAILYREST4$2", "UC_DAILYREST5$2", "UC_DAILYREST6$2"
  ];

  // Parcourir les ID
  ids.forEach(id => {
    // Sélectionner l'élément par son ID
    const selectElement = document.getElementById(id);

    // Vérifier si l'élément existe
    if (selectElement) {
      // Parcourir les options de l'élément select
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === "Y") {
          selectElement.options[i].selected = true;
          break;
        }
      }
    } else {
      console.error(`Élément avec l'ID '${id}' non trouvé.`);
    }
  });

    const ids2 = [
    "UC_TIME_LIN_WRK_UC_DAILYREST12$0",
    "UC_TIME_LIN_WRK_UC_DAILYREST13$0",
    "UC_TIME_LIN_WRK_UC_DAILYREST14$0",
    "UC_TIME_LIN_WRK_UC_DAILYREST15$0",
    "UC_TIME_LIN_WRK_UC_DAILYREST16$0"
  ];

  // Parcourir les ID
  ids2.forEach(id => {
    // Sélectionner le champ par son ID
    const champ = document.getElementById(id);

    // Vérifier si le champ existe et lui attribuer la valeur
    if (champ) {
      champ.value = "1";
    } else {
      console.error(`Champ avec l'ID '${id}' non trouvé.`);
    }
  });
    const elements = [
    { id: "UC_LOCATION_A2$0", value: "VCGI" },
    { id: "UC_LOCATION_A3$0", value: "VCGI" },
    { id: "UC_LOCATION_A4$0", value: "T" },
    { id: "UC_LOCATION_A5$0", value: "VCGI" },
    { id: "UC_LOCATION_A6$0", value: "T" },
    { id: "UC_LOCATION_A2$1", value: "VCGI" },
    { id: "UC_LOCATION_A3$1", value: "VCGI" },
    { id: "UC_LOCATION_A4$1", value: "T" },
    { id: "UC_LOCATION_A5$1", value: "VCGI" },
    { id: "UC_LOCATION_A6$1", value: "T" }
  ];

  elements.forEach(element => {
    const selectElement = document.getElementById(element.id);
    if (selectElement) {
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === element.value) {
          selectElement.options[i].selected = true;
          break;
        }
      }
    } else {
      console.error(`Élément avec l'ID '${element.id}' non trouvé.`);
    }
  });
