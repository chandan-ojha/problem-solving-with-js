// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  // Keep a copy of the collection for tests
//   var recordCollectionCopy = JSON.parse(JSON.stringify(recordCollection));
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
     if(prop !== 'tracks' && value !== ""){
         records[id][prop] = value;
     }
     if(prop === 'tracks'){
        if(typeof records[id][prop] === 'undefined'){
         records[id][prop] = value;
        } else {
            records[id][prop].push(value);
        }       
     }
     return records;
     //console.log(records);
  }
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(recordCollection[5439]);
 