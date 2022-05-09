const map = function (cb) {
    const array =[];//map 함수는 배열을 리턴하기때문에 빈 배열을 만든다.

        //this는 map함수를 사용하는 함수를 가리킨다.
        for( let i = 0; i< this.length; i++){
            const result = cb(this[i], i); 
            array.push(result);
        }

    return array;
};
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map( (e) => e * 2);