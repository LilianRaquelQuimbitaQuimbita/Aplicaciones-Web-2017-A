
//ahora escribimos
//lo que estoy haciendo es guardar el paquete de paswords y usale no mas
let Passwords =require(`machinepack-passwords`);
exports.calculadoraUdla =
    {
    sumar:(n1,n2)=>
    {
        return n1+n2;
    },
        restar:(n1,n2)=>
        {
            return n1-n2;
        },
        passwords:Passwords
    };