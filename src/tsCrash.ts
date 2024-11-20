// return type string and argument type string
function print(msg: string): string {
    return msg
}

// Typing callbacks
// callback has no argument and returns nothing
function callback(cb: () => void) {
    // do

    cb()
}
// callback(() => {
//     console.log('I am a callback function with no argument and return nothing')
// })
// // // callback
function cb( stringToNumb: ( str: string ) => number ){
    //@ts-ignore
    // console.log(str)
    // stringToNumb
}
cb.call(this, (str) => {
    return parseInt(str)
})

// UNION TYPES 
let item: string | number | boolean ;
let array: ( string | number )[]
// you can also return union types

// DESCRIMINATING UNIONS
type User = {
    name: string;
    age: number;
}
type Res = 
{ status: "success", data: User } |
{ status: "error", error_msg: string } |
{ status: "pending", expiry_date: string }

let response: Res = {
    status: "pending",
    expiry_date: new Date().toDateString()
}

// console.table(response)

// INTERSECTION TYPES
// type User = {}
// type Address = {}
// type UserInfo = User & Address

// LITERAL TYPES
// let course: 'typescript' = 'typescript';
// let spacing: 40 = 40;
// let literal: "typescript" | 30 | 20 | 'css' = 20

// TYPE ASSERTION
// knowing that my_id exist and getElement by ID will return HTMLElement and not null
// const elem: HTMLElement = document.getElementById('my_id') as HTMLElement; // can be risky
// const elem: number = document.getElementById('my_id') as any as number;
// SAFE T_A
type UserInfo = {
    name: string;
    staffCode: number;
}

const user: UserInfo = {} as UserInfo // useful nd kinda safe

// INTERFACES it can be extended
interface CarInfo {
    name: string;
    model: string;
    price: string
}

interface CarProto extends CarInfo {
    code: number;
}
const car: CarProto = {
    name: "",
    model: "",
    price: "",
    code: 4
}

// VARIABLE TYPES
function getRandom<Type>(arr: Type[]) {
    let random = arr[Math.round(Math.random() * arr.length - 1) ]
    return random
}

const randomColor = getRandom<string>(["red", "blue", "purple","green"]);
const randomNumber = getRandom([4, 89, 55, 92, 44, 93])

// console.log(randomColor, randomNumber)
//Key = string: if the type is not set later, it defults to a string type.
interface StorageItem<T, ID, Key = string > {
    key: Key;
    id: ID;
    data: T;
}

const Item: StorageItem<string, number> = {
    key: "hello",
    id: 2,
    data: "data loaded"
}

type MyArray<T> = T[];
const arr: MyArray<string> = ["1", "2", "3"]

// UTILITY TYPES

type User_D = {
    id: string;
    username: string;
    age: number;
    email: string;
    password: string;
}
// Pick, Omit, Partial = make every property optional, Required = make everything required
type UserWithoutPassword = Omit<User_D, "password" | "email">;

const user_d: UserWithoutPassword = {
    username: "sucker",
    age: 33,
    id: 'dje',
    // password: 'dfeed'
}

// function highestCombination(numbArr: any){
//     let highestSum = 0;
//     let map: any = {}
//     let maxCombination: any = null;

//     for( let i = 0; i < numbArr.length; i++){
//         let sum1 = 0, sum2 = 0, curr = numbArr[i], combination: any = null;

//         // first number as current loop item
//         if(i === 0 ){
//             sum1 = curr + numbArr[i+1] + numbArr[i+2]
//             sum2 = curr + numbArr[i+2] + numbArr[i+3]
//             combination = [ curr ,numbArr[i+1] ,numbArr[i+2] ]
//             if( sum2 > sum1 ) {
//                 sum1 = sum2
//                 combination = [curr ,numbArr[i+2] ,numbArr[i+3]]
//             }
//         }
//         // last item
//         if( i === numbArr.length - 1 ) {
//             sum1 = curr + numbArr[i - 1] + numbArr[i - 2]
//             sum2 = curr + numbArr[i - 2] + numbArr[i - 3]
//             combination = [ curr ,numbArr[i - 1] ,numbArr[i - 2] ]
//             if( sum2 > sum1 ) {
//                 sum1 = sum2
//                 combination = [curr , numbArr[i - 2] , numbArr[i - 3]]
//             }
//         }
//         // middle items
//         if(i > 0 && i < numbArr.length - 1) {
//             sum1 = curr + numbArr[i - 1] + numbArr[i+1]
//             sum2 = curr + numbArr[i-1] + numbArr[i+2]
//             combination = [ curr, numbArr[i - 1], numbArr[i+1] ]
//             if( sum2 > sum1 ) {
//                 sum1 = sum2
//                 combination = [curr, numbArr[i-1], numbArr[i+2]]
//             }
//         }

//         if(sum1 > highestSum){
//             highestSum = sum1
//             maxCombination = combination
//         }
//     }

//     return {maxCombination, highestSum}
// }
const numbers = [ 1 , 5, 4, 7, 2, 3, 0 ] //6 * 6 = 36 // 154,147,172,123,130  547,572,523,530, ... 0

// 154,157,152,153,150,         //1547,1542,1543,1540
// 147, 142,143,140,            //15
// 172,173,170,
// 123,120,
// 130,

// 547,542,543,540,
// 572,573,570
// 523,520
// 530

function highestCombination(numbArr: number[], combCount: number){
    let map: any = {};
    let highestSum = 0;
    let copyNumbArr = [...numbArr ];
    let maxCombination: any = null;
    let combination: number[] = [];

    for( let i = 0; i < numbArr.length; i++ ) {
        let curr: number = numbArr[i], skip = 0, min = 0;

        if(map[curr] === undefined){
            // console.log(copyNumbArr, Object.keys(map[curr]).length)
            combination = Array.from({ length: combCount} , (_, idx) => {
                return copyNumbArr[idx]
            });
            map[curr] = { [`${combination}`]: combination.reduce(( a, b) => a + b, 0) }
        }
        
        // remove the curr item
        copyNumbArr = [...numbArr ];
        copyNumbArr.splice(0, copyNumbArr.indexOf(curr) + 1 )
        // while 1 combination is not yet complete you slide
        
        while(Object.keys(map[curr]).length < ( combCount * (copyNumbArr.length - 1) ) - i  ) {

            if(combination[combination.length - 1] === copyNumbArr[copyNumbArr.length - 1]) {
                min = min + 1
                skip = 0
            }
            combination = [ curr, copyNumbArr[min] ]
            
            if(combination.length < combCount ){ //&& !(copyNumbArr[skip+min+1] === undefined)
                combination.push( copyNumbArr[skip+min+1] )
            }

            if(map[curr][`${combination}`]){
                skip = skip + 1;
            }

            map[curr][`${combination}`] = combination.reduce(( a, b) => a + b, 0)
            if( map[curr][`${combination}`] > highestSum) {
                maxCombination = combination//Object.keys(map[curr])
                highestSum = map[curr][`${combination}`];
            }

        }
        
    }
    // console.log(map)
   

    return { maxCombination, highestSum}
}

// console.log(highestCombination(numbers, 3))

function maxSubArraySum( arr:number[], range:number, maxSum = 0, maxArr: number[] = [], all: any = {}, minSlide: number = 0) {
    let currentSum = 0;
    let maxSlide = arr.length - range;
    
    // console.log(maxSum, maxSlide, minSlide)
    if( maxSlide === minSlide) {
        console.log(maxSum, maxSlide, minSlide)
        return maxSum
    }
    all[minSlide] = [];
    
    if(!(minSlide > 0)){
        for( let i = 0; i < range; i++ ) {
            maxSum += arr[i]
            maxArr.push(arr[i])
            if(i === range - 1){
                all[minSlide].push(maxArr)
            }
        }
    }

    currentSum = maxSum
    // range + slide
    for( let i = range; i < arr.length; i++) {
        let currentArr = [];
        currentSum = currentSum - arr[i - range ] + arr[i + minSlide]

        let t = 0;
        if(!(minSlide > 0)){
            while(currentArr.length < range){
                // currentArr.unshift(arr[i])
                t++
            }
        }
        if(minSlide === 1){
            while(currentArr.length < range){

            }
        }
        
        all[minSlide].push(currentArr)
        // if(currentSum > maxSum) maxSum = currentSum
        maxSum = Math.max(maxSum, currentSum)
        // if(i === arr.length - 1){
        //     all[minSlide].push(currentArr)
        // }
    }
    console.log(all)
    // return maxSubArraySum(arr, range, maxSum, maxArr, all, minSlide+1)
}

// maxSubArraySum([1,2,3,4,3,2,1], 3)

function highestSumSubarray(arr: number[], size:number) {
    if (size <= 0 || size > arr.length) {
        throw new Error("Invalid size: must be a positive integer less than or equal to the array length.");
    }

    // Helper function to generate all unique combinations
    function getCombinations(array: number[], combinationSize: number, startIndex = 0, currentCombination: number[] = [], combinations: any = []) {
        if (currentCombination.length === combinationSize) {
            combinations.push([...currentCombination]);
            return combinations;
        }

        for (let i = startIndex; i < array.length; i++) {
            currentCombination.push(array[i]);
            getCombinations(array, combinationSize, i + 1, currentCombination, combinations);
            currentCombination.pop(); // Backtrack to explore other combinations
        }

        return combinations;
    }

    // Generate all unique combinations of the given size
    const combinations = getCombinations(arr, size);

    // Find the combination with the highest sum
    let maxSum = -Infinity;
    let result = [];

    combinations.forEach(combination => {
        const currentSum = combination.reduce((sum, num) => sum + num, 0);
        if (currentSum > maxSum) {
            maxSum = currentSum;
            result = combination;
        }
    });
    console.log(combinations)

    return result;
}

// Example usage
// const input = [1, 2, 1, 4, 3, 2, 3];
// const size = 3;
// console.log(highestSumSubarray(input, size)); // Output: [4, 3, 3]
// max slideRange arr.length - range and min slide range is 1
// once arr[i] in second for loop subArrSlide is undefined use currentSum - arr[i - range ] + arr[i - ()]

function getCombinations(arr: (string | number)[] ) {
    let result: (string | number)[] = [];
    
    const generate = (current: any, remaining: any) => {
        if (remaining.length === 0) {
            if (current.length > 0) {
                result.push(current);
            }
            return;
        }
        
        generate(current.concat(remaining[0]), remaining.slice(1));
        generate(current, remaining.slice(1));
    };
    
    generate([], arr);
    return result;
}

// const items = ["apple", "banana", "cherry", "mango"];
// const combinations = getCombinations(items);
// console.log(combinations);

function allPermutations (items: any[]) {
     
      let results: any = [];
      function permute (arr: any[], memo?: any ) {
        var cur, memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
          cur = arr.splice(i, 1);
          if (arr.length === 0) {
            results.push(memo.concat(cur));
          }
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }
        return results;
      }
      permute(items);
      return results;
}
     
// var fruits = [1,2,3];
// var permutated = allPermutations(fruits);
// console.log(permutated);