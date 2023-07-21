function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
	let columns = prompt("Input number of columns");
	let table = document.querySelector("#myTable");

	for(let i=0; i<rows; i++){
		table.insertAdjacentHTML("beforeend",`<tr id="row${i+1}"></tr>`);
        let rowtemp = document.querySelector(`#row${i+1}`);
        for(let j=0; j<columns; j++){
            rowtemp.insertAdjacentHTML("beforeend",`<td>Row-${i} Column-${j}</td>`);
        }
	}
	
}
