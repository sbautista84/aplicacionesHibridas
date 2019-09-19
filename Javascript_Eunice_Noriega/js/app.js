class Calculadora{

	//Constructor
	constructor(){
		this.resultado = "0";
		this.operando1 = 0;
		this.operando2 = 0;
		this.operacion = "";
		this.reset = 0;

		var self = this;
		
		//Inicializar efecto de las teclas y el click
		var teclas = document.getElementsByClassName("tecla")

		for(let i = 0, length1 = teclas.length; i < length1; i++){
			teclas[i].addEventListener("mousedown", function(elem){
	  			self.presionarTecla(elem.srcElement.id);
			});
			teclas[i].addEventListener("mouseup", function(elem){
	  			self.soltarTecla(elem.srcElement.id);
			});

			teclas[i].addEventListener("click", function(elem){
	  			self.accionTecla(elem.srcElement.id);
			});
		}

		//Inicializar el display
		self.actualizarPantalla();
		
	}

	actualizarPantalla(){

		document.getElementById("display").innerHTML = this.resultado.substring(0,8);
	}

	presionarTecla(elemID){
		document.getElementById(elemID).style.padding = '2px';
	}

	soltarTecla(elemID){
		document.getElementById(elemID).style.removeProperty("padding");
	}

	accionTecla(elemID){
		var strResultado = '';
		switch (elemID) {
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				if(this.reset == 1)
				{
					this.reset = 0;
					this.resultado = elemID;
					this.actualizarPantalla();
				}
				else if(this.resultado == "0")
				{
					this.resultado = elemID;
					this.actualizarPantalla();
				}
				else
				{
					if(this.resultado.length < 8)
					{	
						strResultado = this.resultado;
						strResultado = strResultado + elemID;
						this.resultado = strResultado;
						this.actualizarPantalla();
					}
				}	
				break;
			case "on": // ON/C
					this.resultado = "0";
					this.actualizarPantalla();
				break;	
			case "punto":
					if(this.resultado.indexOf(".") == -1 && this.reset == 0)
					{
						this.resultado = this.resultado + ".";
						this.actualizarPantalla();
					}	
				break;
			case "sign":
					if(this.resultado != "0" && this.reset == 0)
					{
						var num = parseFloat(this.resultado) * -1;
						this.resultado = num.toString();
						this.actualizarPantalla();
					}	
				break;		
			case "mas": //SUMAR

				if(this.operacion == "" && this.reset == 0)
				{
					this.operando1 = parseFloat(this.resultado);
					this.operacion = "sumar";
					this.resultado = "";
					this.actualizarPantalla();
				}	
			
				break;
			case "menos": //RESTAR

				if(this.operacion == "" && this.reset == 0)
				{
					this.operando1 = parseFloat(this.resultado);
					this.operacion = "restar";
					this.resultado = "";
					this.actualizarPantalla();
				}
			
				break;
			case "por": //MULTIPLICAR

				if(this.operacion == "" && this.reset == 0)
				{
					this.operando1 = parseFloat(this.resultado);
					this.operacion = "multiplicar";
					this.resultado = "";
					this.actualizarPantalla();
				}
			
				break;
			case "dividido": //DIVIDIR

				if(this.operacion == "" && this.reset == 0)
				{
					this.operando1 = parseFloat(this.resultado);
					this.operacion = "dividir";
					this.resultado = "";
					this.actualizarPantalla();
				}
			
				break;	
			case "igual": //IGUAL = RESULTADO
			
				switch (this.operacion) {
					case "":
						// statements_1
						break;
					case "sumar":
						
						if(this.resultado != "")
						{
							this.operando2 = parseFloat(this.resultado);
							this.resultado = this.sumar(this.operando1, this.operando2).toString();
							this.resetOperacion();
							this.actualizarPantalla();
						}	

						break;
					case "restar":
						
						if(this.resultado != "")
						{
							this.operando2 = parseFloat(this.resultado);
							this.resultado = this.restar(this.operando1, this.operando2).toString();
							this.resetOperacion();
							this.actualizarPantalla();
						}	

						break;
					case "multiplicar":
						
						if(this.resultado != "")
						{
							this.operando2 = parseFloat(this.resultado);
							this.resultado = this.multiplicar(this.operando1, this.operando2).toString();
							this.resetOperacion();
							this.actualizarPantalla();
						}	

						break;
					case "dividir":
						
						if(this.resultado != "")
						{
							this.operando2 = parseFloat(this.resultado);
							this.resultado = this.dividir(this.operando1, this.operando2).toString();
							this.resetOperacion();
							this.actualizarPantalla();
						}	

						break;				
					default:
						// statements_def
						break;
				}
				break;				
			default:
				
				break;
		}
	}

	resetOperacion(){
		this.operando1 = 0;
		this.operando2 = 0;
		this.operacion = "";
		this.reset = 1;
	}

	sumar(operando1, operando2){
		return operando1 + operando2;
	}

	restar(operando1, operando2){
		return operando1 - operando2;
	}

	multiplicar(operando1, operando2){
		return operando1 * operando2;
	}

	dividir(operando1, operando2){
		return operando1 / operando2;
	}	
}

var calc = new Calculadora();