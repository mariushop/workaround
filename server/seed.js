/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 
if (Items.find().count() === 0) {
 
  Items.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Items.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Items.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}

// Fixture data 
if (Jobs.find().count() === 0) {
 
  Jobs.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Jobs.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Jobs.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}

// Fixture data 
if (Notifications.find().count() === 0) {
 
  Notifications.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Notifications.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Notifications.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}




