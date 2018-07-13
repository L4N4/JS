function persona(nombre){
    this.name = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function(targetPerson){
        //console.log(this);
        if(this.sp >= 40){
            targetPerson.sp += 40;
            this.sp -= 40;
            this.estado(targetPerson);
            
        }else{
            console.warn('No tienes puntos de magia');
        }
    };
    this.atacar = function(targetPerson){
        if(targetPerson.pv > 0){
            targetPerson.pv -= 20;
            this.estado(targetPerson);
        }
        else{
            console.warn('Ya lo mataste, lo quieres rematar? :O');
        }
    };
    this.estado = function(targetPerson){
        console.log(targetPerson);
        console.log(this);
    }

}

let gandalf = new persona('gandalf');
let legolas = new persona('legolas');

gandalf.curar(legolas);
for(i = 0; i < 100; i++){
    legolas.atacar(gandalf);

}

legolas.curar(gandalf);


