import scroll from '../src/assets/images/paper.png'
import person from '../src/assets/images/person.png'
import money from '../src/assets/images/money.png'
const getStarted = {
    GetStartedCard: [
        {
            num:1,
            image: scroll,
            tittle: 'Register',
            desc: 'To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.',
            class:'regista'
        },
        {
            num:2,
            image: person,
            tittle: 'Find Client',
            desc: 'Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.',
            desc1: 'You take lead to buy the desired domain via ReSellMe for the client upfront.',
            class:'client'
        },
        {
            num:3,
            image: money,
            tittle: 'Get Money!',
            desc: 'You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit. ',
            desc2: 'Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru',
            class:'mone'
        }
    ]
}
export default getStarted