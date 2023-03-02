const fs = require('fs')

// read raw data
const testStr = fs.readFileSync('../rawData.txt', 'utf8')

// split questions
const splitRegex = /A\/?\s*B\s*Testing\s*.*:\s*(.*)\s*Variant\s*A\s*:\s*(.*)\s*Variant\s*B\s*:\s*(.*)\s*Bad\s*Variant\s*:\s*(.*)/gmi
const questionMatch = testStr.match(splitRegex)

// capture title and 3 options for each question
const testingRegex = /A\/?\s*B\s*Testing\s*.*:\s*(?<title>.*)\s*Variant\s*A\s*:\s*(?<option1>.*)\s*Variant\s*B\s*:\s*(?<option2>.*)\s*Bad\s*Variant\s*:\s*(?<option3>.*)/i


// construct json
const myData = {
    questions: []
}

questionMatch.forEach((question, idx) => {
    const { title, option1, option2, option3 } = question.match(testingRegex).groups

    const obj = {
        id: idx,
        'A/B Testing': title,
        options: [
            {
                id: 0,
                text: option1,
                isBad: false,
                score: 0
            },
            {
                id: 1,
                text: option2,
                isBad: false,
                score: 0
            },
            {
                id: 2,
                text: option3,
                isBad: true,
                score: 0
            }
        ]
    }

    myData.questions.push(obj)
})



// write into json file!
fs.writeFileSync('../test.json', JSON.stringify(myData, null, 2))