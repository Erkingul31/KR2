const multiplyArrow = (a, b) => a * b;

const isEven = number => number % 2 === 0;

console.log(multiplyArrow(5, 4));
console.log(isEven(10));
console.log(isEven(7));


function countVowels(str) {
    const vowels = [
        "а", "е", "ё", "и", "о",
        "у", "ы", "э", "ю", "я",
        "a", "e", "i", "o", "u"
    ];

    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("привет"));
console.log(countVowels("машина"));
console.log(countVowels("hello"));


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("привет"));


function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(3));


function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(5));
console.log(sumTo(10));


function createProduct(name, price) {
    return {
        name: name,
        price: price,
        currency: "сом"
    };
}

console.log(createProduct("Ноутбук", 45000));


const products = [
    { name: "Ноутбук", price: 45000, inStock: true },
    { name: "Мышь", price: 800, inStock: false },
    { name: "Клавиатура", price: 2500, inStock: true },
    { name: "Монитор", price: 15000, inStock: true },
    { name: "Наушники", price: 3200, inStock: false }
];

const productNames = products.map(product => product.name);
console.log(productNames);

const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);

const expensiveProduct = products.find(product => product.price > 10000);
console.log(expensiveProduct);

const totalPrice = products.reduce(
    (sum, product) => sum + product.price,
    0
);
console.log(totalPrice);

const hasCheapProduct = products.some(product => product.price < 1000);
console.log(hasCheapProduct);

const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log(nameAndPrice);

const allMoreThan500 = products.every(product => product.price > 500);
console.log(allMoreThan500);

const monitorIndex = products.findIndex(
    product => product.name === "Монитор"
);
console.log(monitorIndex);

const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);
console.log(sortedProducts);

const stockCount = products.filter(product => product.inStock).length;
console.log(stockCount);

const productStrings = products.map(
    product => `${product.name} — ${product.price} сом`
);
console.log(productStrings);

const mostExpensiveProduct = products.reduce(
    (max, product) =>
        product.price > max.price ? product : max
);
console.log(mostExpensiveProduct);

const stockTotalPrice = products
    .filter(product => product.inStock)
    .reduce((sum, product) => sum + product.price, 0);
console.log(stockTotalPrice);

const discountedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.9
}));
console.log(discountedProducts);

const hasKeyboard = products.some(
    product => product.name === "Клавиатура"
);
console.log(hasKeyboard);


const students = [
    { name: "Айгуль", grade: 85, active: true },
    { name: "Бек", grade: 42, active: false },
    { name: "Дана", grade: 91, active: true },
    { name: "Эрлан", grade: 67, active: true },
    { name: "Мария", grade: 38, active: false }
];

const studentNames = students.map(student => student.name);
console.log(studentNames);

const goodStudents = students.filter(student => student.grade > 60);
console.log(goodStudents);

const weakStudent = students.find(student => student.grade < 50);
console.log(weakStudent);

const totalGrades = students.reduce(
    (sum, student) => sum + student.grade,
    0
);

const averageGrade = totalGrades / students.length;
console.log(averageGrade);

const hasInactiveStudent = students.some(
    student => !student.active
);
console.log(hasInactiveStudent);

const allAbove30 = students.every(
    student => student.grade > 30
);
console.log(allAbove30);

const studentStrings = students.map(
    student => `${student.name}: ${student.grade} баллов`
);
console.log(studentStrings);

const activeStudentsCount = students.filter(
    student => student.active
).length;
console.log(activeStudentsCount);

const topStudent = students.reduce(
    (max, student) =>
        student.grade > max.grade ? student : max
);
console.log(topStudent);

const activeStudentNames = students
    .filter(student => student.active)
    .map(student => student.name);
console.log(activeStudentNames);


const user = {
    id: 1,
    username: "coder_01",
    address: {
        city: "Бишкек",
        street: "Чуй 120"
    }
};

const {
    username,
    address: { city }
} = user;

console.log(username);
console.log(city);

const {
    country = "Кыргызстан"
} = user;

console.log(country);


function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce(
        (total, number) => total + number,
        0
    );

    return sum / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5, 10, 15, 20));


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [
    0,
    ...array1,
    ...array2
];

console.log(combinedArray);


const userCopy = {
    ...user,
    username: "new_user"
};

console.log(user);
console.log(userCopy);


const settings = {
    theme: "dark",
    fontSize: 16,
    notifications: true
};

const settingsJSON = JSON.stringify(settings);

console.log(settingsJSON);

const parsedSettings = JSON.parse(settingsJSON);

console.log(parsedSettings.theme);


const storage = {};

const localStorage = {
    setItem(key, value) {
        storage[key] = String(value);
    },

    getItem(key) {
        return storage[key] ?? null;
    }
};

localStorage.setItem(
    "settings",
    JSON.stringify(settings)
);

const savedSettingsJSON = localStorage.getItem("settings");

const savedSettings = JSON.parse(savedSettingsJSON);

console.log(savedSettings);
console.log(savedSettings.fontSize);