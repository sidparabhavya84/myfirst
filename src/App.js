import './App.css';

function App() {
  var data =
  [
      {
          id: 101,
          name: 'Abacavir',
          quantity: 25,
          price: 150,
          expiry: 2022,
          status: true
      },
      {
          id: 102,
          name: 'Eltrombopag',
          quantity: 90,
          price: 550,
          expiry: 2021,
          status: true
      },
      {
          id: 103,
          name: 'Meloxicam',
          quantity: 85,
          price: 450,
          expiry: 2025,
          status: false
      },
      {
          id: 104,
          name: 'Allopurinol',
          quantity: 50,
          price: 600,
          expiry: 2023,
          status: true
      },
      {
          id: 105,
          name: 'Phenytoin',
          quantity: 63,
          price: 250,
          expiry: 2021,
          status: false
      }
  ];
  <table border="1" cellpadding="0" cellspacing="0" width="700">
        <tr>
            <td>id</td>
            <td>name</td>
            <td>quantity</td>
            <td>price</td>
            <td>expiry</td>
            <td>status</td>
        </tr>
  </table>


// let table = "";

// table += "<tr>";

// table += "<th> id </th>";
// table += "<th> name </th>";
// table += "<th> quantity </th>";
// table += "<th> price </th>";
// table += "<th> expiry </th>";
// table += "<th> status </th>";

// table += "</tr>";

// data.map((b) => {
//   console.log(b);
//   return table += `
//                       <tr>
//                           <td>
//                               ${b.id}
//                           </td>

//                           <td>
//                               ${b.name}
//                           </td>

//                           <td>
//                               ${b.quantity}
//                           </td>

//                           <td>
//                               ${b.price}
//                           </td>

//                           <td>
//                               ${b.expiry}
//                           </td>

//                           <td>
//                               ${b.status}
//                           </td>

//                       </tr>
//                   `
                  
// })
// document.getElementById("table").innerHTML = table;

}

export default App;
