const str: string = "Hello";
const isFetching: boolean = true;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = "Hello";
const numberArray: Array<number> = [1, 2, 3, 4]; //generic types
const numberArray2: number[] = [1, 2, 3, 4];
const words: string[] = ["hello", "Type"];

//Tuple
const contact: [string, number] = ["Nata", 1234567];

//Any
let variable: any = 42;
variable = "new string";
variable = [];

// functions
function sayMyName(name: string): void {
  //void -значит что функция ничего не вернет
  console.log(name);
}

sayMyName("Nata");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2 //!

type ID = string | number;
const id1: ID = 1;
const id2: ID = "1";
// const id3: ID = true //!

//null & undefined
type SomeType = string | null | undefined;
