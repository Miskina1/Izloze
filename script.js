const vardi=['Ieva Cīrule', 'Laura Ziede','Jānis Ozols', 'Normunds Kļava'];
const balvas= ['Dators', 'Veļasmašīna', 'Viedtālrunis', 'Automašīna','Grāmata'];
const naudaKopa=1000000;// kopēja summa izlozei
let uzvaretajuSkaits=5;
let rand= Math.random()*5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = '';
for (let i=0; i< uzvaretajuSkaits; i++){
    let rand=Math.random() * vardi.length;
    rand=Math.floor(rand); // noapaļo skaitļus uz leju

    let uzvaretajs = vardi[rand];
    rindas.innerHTML +=`
    <tr>
    <td> ${i+1}</td>
    <td> ${uzvaretajs}</td>
    </tr>`
}