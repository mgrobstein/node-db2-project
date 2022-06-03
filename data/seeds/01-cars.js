// STRETCH
const cars = [{
    vin: '11114561111123232',
    make: 'Toyota',
    model: 'Prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual'
},
{
    vin: '11114561111123233',
    make: 'Toyota',
    model: 'Carolla',
    mileage: 189000,
    title: 'salvage',
    transmission: 'manual'
},
{
    vin: '11114561111123234',
    make: 'Ford',
    model: 'Focus',
    mileage: 16000,
}]

// exports.seed = function(knex){
//     return knex('cars').truncate().then(()=>{
//         return knex('cars').insert(cars)
// })}

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}