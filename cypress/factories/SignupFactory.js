var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: 51999999999,
            address: {
                postalcode: 88040420,
                street: 'Rua José João Martendal',
                number: 315,
                details: 'apto 203',
                disctrict: 'Carvoeira',
                city_state: 'Florianópolis/SC'
            },
            delivery_method: 'Moto',
            cnh: 'test1.jpg'
        }

        return data

    }

}