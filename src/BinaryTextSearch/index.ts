/*Бинарный поиск  способен найти конкретное значение в массиве,
путём выборки среднего значения, на основе понимания больше или меньше искомое
среднего значения. С текстом не получится так же просто как с числами, но функция
whereToGoNext достаточно просто решает проблему, пользуясь возможностью языка JS,
а именно сортировкой двух элементов на каждой итерации - искомого и текущего.
*/


interface IResult {
    found: boolean, //Найдено ли слово
    index: number | null, //Индекс слова в массиве если оно найдено
    numberOfIterations: number //количество итераций, которое пришлось пройти, чтобы найти слово
}


const textBinarySearch = (textArray: string[], word: string): IResult => {
    let start = 0;
    let end = textArray.length - 1;
    let numberOfIterations = 0;
    let result = (found: boolean, index: number | null) => ({
        found,
        index,
        numberOfIterations
    });

    let whereToGoNext = (index: number): number => {
        let nArr = [textArray[index], word].sort();
        return nArr.indexOf(word) === 0 ? 1 : -1;
    }

    while (start <= end) {
        numberOfIterations++;
        let middle = Math.floor((start + end) / 2);
        if (textArray[middle] === word) {
            return result(true, middle);
        }
        let whereToGo = whereToGoNext(middle);
        if (whereToGo === -1) {
            start = middle + 1;
        } else if (whereToGo === 1) {
            end = middle - 1;
        }
    }

    return result(false, null);
}

const someWords = ['благодать', 'благоденствие', 'благополучие', 'благополучие', 'благосостояние', 'блаженство', 'везение', 'везет', 'доля', 'красные', 'наслаждение', 'нахес', 'победа', 'под случай попасть', 'посчастливилось', 'предназначение', 'пруха', 'разлюли-малина', 'синяя птица', 'случай', 'состояние', 'судьба', 'счастливый конец', 'счастьице', 'талан', 'удача', 'удачливость', 'успех', 'участь', 'фарт', 'фортуна'];
console.log(textBinarySearch(someWords, 'благополучие'));
console.log(textBinarySearch(someWords, 'разлюли-малина'));
console.log(textBinarySearch(someWords, 'везение'));
console.log(textBinarySearch(someWords, 'неТоСлово'));

