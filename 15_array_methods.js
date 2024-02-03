{
  let num = [1, 2, 3, 4, 17, 22, 13, 5];
  //num[0] = "value of this element is changed";
  //num.pop();

  //sort() method ==>
  num.sort(); //this method will cosider array as string and sort alphabetically
  console.log(num); //#output: [1,13,17,2,22,3,4,5]

  //we need to use 'compare' functon to do any perticular type of sorting
  let compare = (a, b) => {
    return a - b;
  };
  num.sort(compare);
  console.log(num); //output: [1,2,3,4,5,13,17,22]
}

{
  //split() and slice() methods ==>
  let num = [1, 2, 3, 4, 17, 22, 13, 5];
  num.splice(2, 3, 100, 2222, 2939, 9929); //if we want to check the deleted items we can store this method in a variable and print that variable
  console.log(num); //splice(start, deteleCount, items)
}
