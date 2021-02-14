module.exports = function toReadable(number) {
    function conditionForTheFirstNumber(number) {
        let str = number + '';
        let arr = str.split('');

        let firstValue = arr[0];

        return arr.length === 3 && firstValue == 1 ? 'one' :
            arr.length === 3 && firstValue == 2 ? 'two' :
                arr.length === 3 && firstValue == 3 ? 'three' :
                    arr.length === 3 && firstValue == 4 ? 'four' :
                        arr.length === 3 && firstValue == 5 ? 'five' :
                            arr.length === 3 && firstValue == 6 ? 'six' :
                                arr.length === 3 && firstValue == 7 ? 'seven' :
                                    arr.length === 3 && firstValue == 8 ? 'eight' :
                                        arr.length === 3 && firstValue == 9 ? 'nine' : null;
    };

    function conditionForTheSecondThreeNumber(number) {
        let primeNumber;

        let str = number + '';
        let arr = str.split('');

        let secondValue = arr[1];
        let threeValue = arr[2];

        arr.length === 2 ? primeNumber = secondValue :
            arr.length === 3 ? primeNumber = threeValue : null;

        return primeNumber === 0 ? 'zero' :
            primeNumber == 1 ? 'one' :
                primeNumber == 2 ? 'two' :
                    primeNumber == 3 ? 'three' :
                        primeNumber == 4 ? 'four' :
                            primeNumber == 5 ? 'five' :
                                primeNumber == 6 ? 'six' :
                                    primeNumber == 7 ? 'seven' :
                                        primeNumber == 8 ? 'eight' :
                                            primeNumber == 9 ? 'nine' : null;
    };

    function firstValue(number) {
        let str = number + '';
        let arr = str.split('');
        let firstValue = arr[0];

        if (arr.length >= 3) {
            return firstValue;
        }
    };

    return number === 0 ? 'zero' :
        number === 1 ? 'one' :
            number === 2 ? 'two' :
                number === 3 ? 'three' :
                    number === 4 ? 'four' :
                        number === 5 ? 'five' :
                            number === 6 ? 'six' :
                                number === 7 ? 'seven' :
                                    number === 8 ? 'eight' :
                                        number === 9 ? 'nine' :
                                            number === 10 ? 'ten' :
                                                number === 11 ? 'eleven' :
                                                    number === 12 ? 'twelve' :
                                                        number === 13 ? 'thirteen' :
                                                            number > 13 && number < 15 ? `${conditionForTheSecondThreeNumber(number) + 'teen'}` :
                                                                number === 15 ? 'fifteen' :
                                                                    number > 15 && number < 18 ? `${conditionForTheSecondThreeNumber(number) + 'teen'}` :
                                                                        number === 18 ? 'eighteen' :
                                                                            number > 18 && number < 20 ? `${conditionForTheSecondThreeNumber(number) + 'teen'}` :
                                                                                number === 20 ? 'twenty' :
                                                                                    number > 20 && number < 30 ? `${'twenty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                        number === 30 ? 'thirty' :
                                                                                            number > 30 && number < 40 ? `${'thirty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                number === 40 ? 'forty' :
                                                                                                    number > 40 && number < 50 ? `${'forty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                        number === 50 ? 'fifty' :
                                                                                                            number > 50 && number < 60 ? `${'fifty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                number === 60 ? 'sixty' :
                                                                                                                    number > 60 && number < 70 ? `${'sixty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                        number === 70 ? 'seventy' :
                                                                                                                            number > 70 && number < 80 ? `${'seventy'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                                number === 80 ? 'eighty' :
                                                                                                                                    number > 80 && number < 90 ? `${'eighty'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                                        number === 90 ? 'ninety' :
                                                                                                                                            number > 90 && number <= 99 ? `${'ninety'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                number == `${firstValue(number) + '00'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'}` :

                                                                                                                                                    number > `${firstValue(number) + '00'}` && number < `${firstValue(number) + '10'}` ?
                                                                                                                                                        `${conditionForTheFirstNumber(number)} ${'hundred'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                                                        number == `${firstValue(number) + '10'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'ten'}` :
                                                                                                                                                            number == `${firstValue(number) + '11'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'eleven'}` :
                                                                                                                                                                number == `${firstValue(number) + '12'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'twelve'}` :
                                                                                                                                                                    number == `${firstValue(number) + '13'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'thirteen'}` :

                                                                                                                                                                        number > `${firstValue(number) + '13'}` && number < `${firstValue(number) + '15'}` ?
                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${conditionForTheSecondThreeNumber(number) + 'teen'}` :
                                                                                                                                                                            number == `${firstValue(number) + '15'}` ?
                                                                                                                                                                                `${conditionForTheFirstNumber(number)} ${'hundred'} ${'fifteen'}` :

                                                                                                                                                                                number > `${firstValue(number) + '15'}` && number < `${firstValue(number) + '18'}` ?
                                                                                                                                                                                    `${conditionForTheFirstNumber(number)} ${'hundred'} ${conditionForTheSecondThreeNumber(number) + 'teen'}` :
                                                                                                                                                                                    number == `${firstValue(number) + '18'}` ?
                                                                                                                                                                                        `${conditionForTheFirstNumber(number)} ${'hundred'} ${'eighteen'}` :

                                                                                                                                                                                        number > `${firstValue(number) + '18'}` && number < `${firstValue(number) + '20'}` ?
                                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${conditionForTheSecondThreeNumber(number) + 'teen'}` :

                                                                                                                                                                                            number == `${firstValue(number) + '20'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'twenty'}` :
                                                                                                                                                                                                number > `${firstValue(number) + '20'}` && number < `${firstValue(number) + '30'}` ?
                                                                                                                                                                                                    `${conditionForTheFirstNumber(number)} ${'hundred'} ${'twenty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                    number == `${firstValue(number) + '30'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'thirty'}` :
                                                                                                                                                                                                        number > `${firstValue(number) + '30'}` && number < `${firstValue(number) + '40'}` ?
                                                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${'thirty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                            number == `${firstValue(number) + '40'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'forty'}` :
                                                                                                                                                                                                                number > `${firstValue(number) + '40'}` && number < `${firstValue(number) + '50'}` ?
                                                                                                                                                                                                                    `${conditionForTheFirstNumber(number)} ${'hundred'} ${'forty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                                    number == `${firstValue(number) + '50'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'fifty'}` :
                                                                                                                                                                                                                        number > `${firstValue(number) + '50'}` && number < `${firstValue(number) + '60'}` ?
                                                                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${'fifty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                                            number == `${firstValue(number) + '60'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'sixty'}` :
                                                                                                                                                                                                                                number > `${firstValue(number) + '60'}` && number < `${firstValue(number) + '70'}` ?
                                                                                                                                                                                                                                    `${conditionForTheFirstNumber(number)} ${'hundred'} ${'sixty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                                                    number == `${firstValue(number) + '70'}` ?
                                                                                                                                                                                                                                        `${conditionForTheFirstNumber(number)} ${'hundred'} ${'seventy'}` :
                                                                                                                                                                                                                                        number > `${firstValue(number) + '70'}` && number < `${firstValue(number) + '80'}` ?
                                                                                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${'seventy'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                                                            number == `${firstValue(number) + '80'}` ? `${conditionForTheFirstNumber(number)} ${'hundred'} ${'eighty'}` :
                                                                                                                                                                                                                                                number > `${firstValue(number) + '80'}` && number < `${firstValue(number) + '90'}` ?
                                                                                                                                                                                                                                                    `${conditionForTheFirstNumber(number)} ${'hundred'} ${'eighty'} ${conditionForTheSecondThreeNumber(number)}` :

                                                                                                                                                                                                                                                    number == `${firstValue(number) + '90'}` ?
                                                                                                                                                                                                                                                        `${conditionForTheFirstNumber(number)} ${'hundred'} ${'ninety'}` :
                                                                                                                                                                                                                                                        number > `${firstValue(number) + '90'}` && number < 1000 ?
                                                                                                                                                                                                                                                            `${conditionForTheFirstNumber(number)} ${'hundred'} ${'ninety'} ${conditionForTheSecondThreeNumber(number)}` :
                                                                                                                                                                                                                                                            'Error entered incorrect value'; 'Error entered incorrect value'; 'Error entered incorrect value'; 'Error entered incorrect value'; 'Error entered incorrect value';
};

