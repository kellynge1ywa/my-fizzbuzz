const { describe } = require('node:test')
const myFizz=require('./fizzbuzz')

describe(myFizz,()=>{
    test('should find numbers divisible by 4 and 8 between 1 and 20',()=>{
        const expectedOutput=[
            '1',
            '2',
            '3',
            'Match with only 4',
            '5',
            '6',
            '7',
            'There is a match',
            '9',
            '10',
            '11',
            'Match with only 4',
            '13',
            '14',
            '15',
            'There is a match',
            '17',
            '18',
            '19',
            'Match with only 4',
            
        ]



        myFizz(20)
        expect(output).tobe(expectedOutput)
    })

    
})