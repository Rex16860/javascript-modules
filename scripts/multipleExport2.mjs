const employee = 'John';

function sum(...values) {
    let r = 0;
    values.forEach(v => {
        r += v;
    })

    return r;
}

class Company {

}

export {employee, sum, Company}
