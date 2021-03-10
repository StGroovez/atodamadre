var cuentas = [
    { nombre: "Kimchee", genero: 1, saldo: 200, password: "123456"},
    { nombre: "Ozzy", genero: 2, saldo: 290, password: "yzzo" },
    { nombre: "James", genero: 2, saldo: 67, password: "king" }
];

let user
let pass

let login = {

    usuario: function(){
        
        function password(){
            
            let pass = prompt("Escribe la contraseña de la cuenta a la que quieres ingresar:");
                
            for(i = 0; i < cuentas.length; i++){
                
                if(user == cuentas[i].nombre && pass == cuentas[i].password && cuentas[i].genero < 2){
                        
                    alert(`¡Hola ${cuentas[i].nombre}! Bienvenida a tu cuenta.`);   
                    console.log(account());
            
                } else if(user == cuentas[i].nombre && pass == cuentas[i].password && cuentas[i].genero == 2){
                        
                    alert(`¡Hola ${cuentas[i].nombre}! Bienvenido a tu cuenta.`);
                    console.log(account())
                    
                } 
            } 
            alert("Contraseña incorrecta, vuelve a intentarlo.");
            console.log(password());   
        }

        let user = prompt("Escribe el nombre de la cuenta a la que quieres ingresar:");
        
        for(i = 0; i < cuentas.length; i++){
        
            if(user == cuentas[i].nombre){   
                console.log(password());
            } 
    
        }   
        alert("Usuario incorrecto, vuelve a intentarlo.");
        console.log(this.usuario());

    },

}

let micuenta = {
    retiro: function(){
        var retiro = prompt("Por favor, escribe el monto que deseas retirar.");
        
        retiro = retiro*1
        
        if(retiro <= cuentas[i].saldo){
            
            cuentas[i].saldo = cuentas[i].saldo - retiro
            alert(`Haz retirado ${retiro} pesos. Tu saldo actual es de ${cuentas[i].saldo} pesos.`);
            console.log(account());

        }else if(retiro > cuentas[i].saldo){
            alert('Saldo insuficiente o mal escrito, intentalo otra vez.');
            console.log(this.retiro());
        }

        else{
            console.log(this.retiro());
        }
    },
    saldo: function(){
        alert(`Tu saldo actual es de: ${cuentas[i].saldo} pesos.`);
        console.log(account());
    },
    depositar: function(){
        var deposit = prompt("Por favor, escribe el monto que deseas depositar.");

        deposit = deposit*1;

        if(deposit > 0){
            cuentas[i].saldo = cuentas[i].saldo + deposit;

            alert(`Haz depositado ${deposit}. Tu saldo actual es de ${cuentas[i].saldo}`);
            console.log(account());
            
        }
        else{
            alert('Monto incorrecto, por favor vuelve a intentarlo.');
            console.log(depositar());
        }
    }
}


function account(){
    var opcion = prompt("¿Por favor, escribe la acción que quieras realizar: 'consultar saldo', 'retirar' , 'depositar' o escribe 'logout' para salir de tu cuenta.?");
    
    if(opcion == "consultar saldo" && cuentas[i].nombre){
        console.log(micuenta.saldo());
    } else if(opcion == "retirar" && cuentas[i].nombre){
        console.log(micuenta.retiro());
    } else if(opcion == "depositar" && cuentas[i].nombre){
        console.log(micuenta.depositar());
    } else if(opcion == "logout"){
        console.log(login.usuario());
    } else{
        console.log(account())
    }
}

console.log(login.usuario())



