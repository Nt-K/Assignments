var products = [
    {name: 'Nithish', age: '25', address: 'Nagarbhavi', dob: '16 March', Email: 'nit@gmail.com', gender: 'Male'},
    {name: 'Madhu', age: '38', address: 'Nagarbhavi', dob: '23 October', Email: 'mad@gmail.com', gender: 'Male'},
    {name: 'Jay', age: '31', address: 'Bidadi', dob: '23 November', Email: 'jay@gmail.com', gender: 'Male'},
    {name: 'Darshan', age: '28', address: 'Mysore', dob: '24 October', Email: 'dar@gmail.com', gender: 'Male'},
    {name: 'PunyaShree', age: '17', address: 'Mysore', dob: '4 July', Email: 'pun@gmail.com', gender: 'Female'},
    {name: 'SriVasta', age: '26', address: 'Bangalore', dob: '16 July', Email: 'sriv@gmail.com', gender: 'Male'},
    {name: 'Paadya', age: '37', address: 'Bangalore', dob: '26 April', Email: 'poo@gmail.com', gender: 'Male'},
  ]

var rowItems = products.map(function(p) {
  return '<tr><td>' + p.name + '</td><td>' + p.age + '</td><td>' + p.address + '</td><td>' + p.dob + '</td><td>' 
  + p.Email + '</td><td>' + p.gender + '</td></tr>'
});

var tableHead = '<tr><th>Name</th><th>Age</th><th>Address</th><th>Dob</th><th>Email</th><th>Gender</th></tr>' 

var createTable = '<table> ' + tableHead + rowItems.join('') + ' </table>'

document.write(createTable)

