hehe mffff

for (let num = 11; num <= 17; num++){
    console.log("I'm in the loop")
    console.log(num)
}

for (let i=2; i <= 20; i += 2){
    console.log(i)
}

for (let i = 100; i >= 0; i -= 10){
    console.log(i)
}

for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`)
    for (let j = 1; j <= 3; j++){
        console.log(`      j is:${j}`)
    }
}

const seatingchart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffery', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for (let i = 0; i < seatingchart.length; i++){
    const row = seatingchart[i];
    console.log(`ROW #${i+1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}


for (let i = 0; i < seatingchart.length; i++){
    const row = seatingchart[i];
    console.log(`ROW#${i+1}`)
    for (let j = 0; j < row.length; j++){
        
        console.log(row[j])
    }
    
}

for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`)
    for (let j = 1; j <= 3; j++){
        console.log(`    j is: ${j}`)
    }
}
0
for (let i = 0; i < seatingchart.length; i++){
    const row = seatingchart[i];
    console.log(`   ROW#${i+1}:`)
    for (let j = 1; j < row.length; j++){
        console.log(row[j])
    }
}

for (let i = 0; i < seatingchart.length; i++){
    // console.log(seatingchart[i])
    const row = seatingchart[i];
    console.log(`ROW#${i+1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}
