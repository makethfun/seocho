let data = {
    "el" : [
      {
        "name" : "Joe",
        "age" : "20"
      },
      {
        "name" : "Mary",
        "age" : "27",
        "book" : [
          {
            "name" : "Blow",
            "age" : "15"
          },
          {
            "name" : "Blow",
            "age" : "15",
            "book" : [
              {
                "name" : "kelly",
                "age" : "29"
              }
            ]
          }
        ]
      }
    ]
  }

// console.log(data['el']);

function objByName(data, name){
  let result;
  for(let i = 0; i < data.length; i++){
    console.log(data[i]);
    if(data[i].name === name){
      data = JSON.stringify(data[i]);
      result = JSON.parse(data);
      // return result;
    }
    if(data[i].hasOwnProperty('book')){
      // return objByName(data[i].book, name);
    }
  }
}

console.log(objByName(data['el'], "kelly"));
