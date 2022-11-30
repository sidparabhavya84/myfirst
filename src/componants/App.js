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
      },
      {
        id: 106,
        name: 'Phenin',
        quantity: 36,
        price: 210,
        expiry: 2011,
        status: false
    }
  ];
//   return (<table border="1" cellpadding="0" cellspacing="0" width="700">
//   <tr>
//       <td>id</td>
//       <td>name</td>
//       <td>quantity</td>
//       <td>price</td>
//       <td>expiry</td>
//       <td>status</td>
//   </tr>
//   {data.map((v)=>
//         <tr>
//             <td>
//                 {v.id}
//             </td>
//             <td>
//                 {v.name}
//             </td>
//             <td>
//                 {v.quantity}
//             </td>
//             <td>
//                 {v.price}
//             </td>
//             <td>
//                 {v.expiry}
//             </td>
//             <td>
//                 {v.status.toString()}
//             </td>
//         </tr>
//   )}
  
// </table>)
return (
    <div className="card">
            {
                data.map((d) => {
                    return (
                        <div className="card-item">
                            <h1>
                               Id: {d.id}
                            </h1>
                            <h2>
                                {d.name}
                            </h2>
                            <span>
                                {d.quantity}
                            </span>
                            <h4>
                                {d.price}
                            </h4>
                            <h2>
                                {d.expiry}
                            </h2>
                            <h3>
                                {d.status.toString()}
                            </h3>
                        </div>
                    )
                })

            }
        </div>
)

}

export default App;
