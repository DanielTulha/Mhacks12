// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6Cw1zvXTXy7v79SLj681ZNFfkSOhHy_g",
    authDomain: "voter-4132c.firebaseapp.com",
    databaseURL: "https://voter-4132c.firebaseio.com",
    projectId: "voter-4132c",
    storageBucket: "voter-4132c.appspot.com",
    messagingSenderId: "436270543492",
    appId: "1:436270543492:web:f950b7921c76885accc8d1",
    measurementId: "G-LNZGT6V25Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var counties = []
var address = ["1101 3rd Street, West Lafayette, IN 47906"]

//func callAPI(address){

//for(var i = 0; i < address.length;i++){

    //var county;
    var city;


fetch('https://www.googleapis.com/civicinfo/v2/voterinfo?address=' + address + '&key=AIzaSyB4ocz-4NHCGXM8cTfXsYRSVU6Wlz_3g4o')
            .then(function(response)
            { return response.json(); })
            .then(function(json) {
              console.log(json);

          });
          /*
          county
            JSONArray
              office, name, social media, number, address
          */

  fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB4ocz-4NHCGXM8cTfXsYRSVU6Wlz_3g4o&address=' + address)
          .then(function(response)
          { return response.json(); })
          .then(function(json) {
          console.log(json);
          var officials = [];
          for (var i in json.offices) {
              var offIndices = i.officialIndices;
              for (var j in offIndices) {
                var k = 0;
                for (l in officials) {
                    if (k == j) {
                        officials.push(l);
                        console.log("Pushed");
                        break;
                    }
                    k++;
                }
              }
          }
          console.log(officials);
          console.log(offIndices);
        });
/*
//Change Collection type if needed
  var reference = firebase.database().ref("usersCandiates");

//}


//Add Params to Create Object to push
  func createJSONObject() {
    var newRef = reference.push();
    newRef.set({
      // set param to JSON object vals
    })

  }
  */
