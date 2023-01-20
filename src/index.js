module.exports = function toReadable (number) {
    let oneToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let hundred = 'hundred'

    if(number.toString().length === 2 && number.toString()[0] === '1' || number.toString().length === 1){
        return oneToNineteen[number]
    }

    if(number.toString().length === 2 && number.toString()[1] === '0') {
        return twentyToNinety[number.toString()[0]]
    }

    if(number.toString().length === 2 && number.toString()[0] !== '1'){
        return `${twentyToNinety[number.toString()[0]]} ${oneToNineteen[number.toString()[1]]}`
    }

    if(number.toString().length === 3 && number.toString()[1] === '0' && number.toString()[2] === '0'){
        return `${oneToNineteen[number.toString()[0]]} ${hundred}`
    }
    

    if(number.toString().length === 3 && number.toString()[1] !== '1' && number.toString()[2] === '0'){
        return `${oneToNineteen[number.toString()[0]]} ${hundred} ${twentyToNinety[number.toString()[1]]}`
    }


    if(number.toString().length === 3 && number.toString()[1] === '0'){
        return `${oneToNineteen[number.toString()[0]]} ${hundred} ${oneToNineteen[number.toString().slice(2)]}`
    }

    if(number.toString().length === 3 && number.toString()[1] !== '1'){
        return `${oneToNineteen[number.toString()[0]]} ${hundred} ${twentyToNinety[number.toString()[1]]} ${oneToNineteen[number.toString()[2]]}`
    }


    if(number.toString().length === 3 && number.toString()[1] === '1'){
        return `${oneToNineteen[number.toString()[0]]} ${hundred} ${oneToNineteen[number.toString().slice(1, 3)]}`
    }
}