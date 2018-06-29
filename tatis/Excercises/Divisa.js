
class Divisa {

 constructor(monto, divisa) {
   this.monto = monto;
   this.divisa = divisa;
 }

 get conversion ( ) {
      return this.monto * this.divisa;
 }

 get conversionDesdePesos ( ) {
      return this.monto / this.divisa;
 }

}

const compra1 = new Divisa(10, 19.85); //USD
console.log('conversion Dólares a Pesos : ' + compra1.conversion);


const compra2 = new Divisa(1, 0.295); //INR
console.log('conversion Rupias a Pesos: ' + compra2.conversion);


const compra3 = new Divisa(1, 19.64);  //EUR
console.log('conversion Euros a Pesos: ' + compra3.conversion);


const compra4 = new Divisa(500, 19.85); //USD
console.log('Conversion Pesos a Dolares: ' + compra1.conversionDesdePesos);
