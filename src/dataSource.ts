interface MyData {
    name: string;
    age: number;
}

const sourceData = {
    name: "jon",
    age: 25,
    country: "United States",
    sex: "male",
    occupation: "Programmer"
}

const receivedData: MyData = sourceData;

console.log(receivedData);