export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'VaidacertoVaidacerto',
                user: {
                    name: 'Theogenes Oliveira',
                    email: 'Theogenes93@gmail.com'
                }
            })
        }, 1000);
    })
}