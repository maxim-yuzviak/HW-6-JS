const cars = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz']
let carBrandToFind = 'Honda';
for (const car of cars) {
    if (car === carBrandToFind) {
        console.log(`Елемент, що має значення Хонда - ${car}`)
        break;
    }
}