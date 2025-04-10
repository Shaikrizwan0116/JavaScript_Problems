function multiplicationTable(tableOf, tableTill){
    for(let i=1; i<=tableTill; i++){
        console.log(`${tableOf} * ${i} = ${tableOf * i}`)
    }
}

multiplicationTable(4,10);