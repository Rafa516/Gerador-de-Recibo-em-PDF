
//---------DATA--------------------------------

function Data() {

	var data = new Date();
	var dias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro" ,"Outubro", "Novembro", "Dezembro");

	document.write(dias[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear());
}

//---------RECIBO VALE TRANSPORTE--------------------------------

function getDadosTransporte() {

	document.getElementById('gerar').onclick = gerarPDFTRansporte;
}



function gerarPDFTRansporte() {
	var loja = document.getElementById('loja').value;
	var cnpj = document.getElementById('cnpj').value;
	var obs = document.getElementById('obs').value;
	var valor = document.getElementById('valor').value;
	var importancia = document.getElementById('importancia').value;

	var inicio = document.getElementById('inicio').value;;
	data = new Date(inicio);
	dataInicio = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

	var fim = document.getElementById('fim').value;
	data = new Date(fim);
	dataFim = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

	var dias = document.getElementById('dias').value;
	var faltas = document.getElementById('faltas').value;
	var nome = document.getElementById('nome').value;

	if (valor == "" || importancia == "" || inicio == "" || fim == "" || dias == "" || nome == "") {
		alert('Preencha todos os campos do Formulário.');
		valor.focus();
		return false;
	} else {
		alert('Vão ser geradas duas vias do Recibo de Vale Transporte em PDF do funcionário(a) ' + nome + '.\nClique em OK para finalizar.');

	}

	var pdf = new jsPDF();


	pdf.setProperties({
		title: 'Recibo Vale Transporte',
		subject: 'Recibo ',
		author: 'Rafael Oliveira',
		keywords: 'gerador de recibos pessoal',
		creator: 'gPDF, javascript, web 2.0, ajax'
	});
	//1º VIA DO RECIBO
	pdf.line (10, 10, 200, 10); //linha horizontal superior
	pdf.line (10, 135, 10, 10) //linha vertical esquerda
	pdf.line (10, 135, 200, 135); //linha horizontal inferior
	pdf.line (200, 135, 200, 10) //linha vertical direita

	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 20, '                                 RECIBO');
	pdf.setTextColor(0);
	pdf.setFontSize(18);
	pdf.text(146, 30, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.setFontType("bold");pdf.text(20, 50, 'RECEBI DE: ');pdf.setFontType("normal");pdf.text(46, 50, loja);
	pdf.setFontType("bold");pdf.text(20, 58, 'CNPJ: ');pdf.setFontType("normal");pdf.text(34, 58, cnpj);
	pdf.setFontType("bold");pdf.text(20, 66, 'A IMPORTÂNCIA DE: ');pdf.setFontType("normal");pdf.text(64, 66, importancia.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 74, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 74, 'VALE TRANSPORTE');
	pdf.setFontType("bold");pdf.text(20, 82, 'PERÍODO DE: ');pdf.setFontType("normal");pdf.text(50, 82, dataInicio + ' a ' + dataFim + '.'); 
	pdf.setFontType("bold");pdf.text(20, 90, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 90, dias + ' DIAS.');pdf.setFontType("bold");pdf.text(75, 90, 'FALTAS: ');pdf.setFontType("normal");pdf.text(95, 90,faltas);     
	pdf.setFontType("bold");pdf.text(20, 98, 'OBSERVAÇÃO: ');pdf.setFontType("normal");pdf.text(54, 98, obs.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 106, 'DATA:___________________________');
	pdf.setFontType("bold");pdf.text(20, 114, 'ASSINATURA:_________________________________________');
	pdf.setFontType("bold");pdf.text(20, 122, 'NOME: ');pdf.setFontType("normal");pdf.text(35, 122,nome.toUpperCase());
	
	//2º VIA DO RECIBO
	pdf.line (10, 163, 200, 163); //linha horizontal superior
	pdf.line (10, 163, 10, 288) //linha vertical esquerda
	pdf.line (10, 288, 200, 288); //linha horizontal inferior
	pdf.line (200, 288, 200, 163) //linha vertical direita

	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 174, '                                 RECIBO');
	pdf.setTextColor(0); //isso deve ser preto
	pdf.setFontSize(18);
	pdf.text(146, 184, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.setFontType("bold");pdf.text(20, 204, 'RECEBI DE: ');pdf.setFontType("normal");pdf.text(46, 204, loja);
	pdf.setFontType("bold");pdf.text(20, 212, 'CNPJ: ');pdf.setFontType("normal");pdf.text(34, 212, cnpj);
	pdf.setFontType("bold");pdf.text(20, 220, 'A IMPORTÂNCIA DE: ');pdf.setFontType("normal");pdf.text(64, 220, importancia.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 228, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 228, 'VALE TRANSPORTE');
	pdf.setFontType("bold");pdf.text(20, 236, 'PERÍODO DE: ');pdf.setFontType("normal");pdf.text(50, 236, dataInicio + ' a ' + dataFim + '.'); 
	pdf.setFontType("bold");pdf.text(20, 244, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 244, dias + ' DIAS.');pdf.setFontType("bold");pdf.text(75, 244, 'FALTAS: ');pdf.setFontType("normal");pdf.text(95, 244,faltas);     
	pdf.setFontType("bold");pdf.text(20, 252, 'OBSERVAÇÃO: ');pdf.setFontType("normal");pdf.text(54, 252, obs.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 260, 'DATA:___________________________');
	pdf.setFontType("bold");pdf.text(20, 268, 'ASSINATURA:_________________________________________');
	pdf.setFontType("bold");pdf.text(20, 276, 'NOME: ');pdf.setFontType("normal");pdf.text(35, 276,nome.toUpperCase());
	
	


	pdf.save('Recibo_Transporte_' + nome + '.pdf');
	window.location.reload();

}

//---------RECIBO COMISSÃO--------------------------------

function getDadosComissao() {

	document.getElementById('gerar').onclick = gerarPDFComissao;
}


function gerarPDFComissao() {
	
	var loja = document.getElementById('loja').value;
	var cnpj = document.getElementById('cnpj').value;
	var obs = document.getElementById('obs').value;
	var valor = document.getElementById('valor').value;
	var mes2 = document.getElementById('mes2').value;
    var ano2 = document.getElementById('ano2').value;
    var referencia = document.getElementById('referencia').value;
	var importancia = document.getElementById('importancia').value;
	var nome = document.getElementById('nome').value;

	if (valor == "" || importancia == ""  || nome == "" || referencia=="") {
		alert('Preencha todos os campos do Formulário.');
		valor.focus();
		return false;
	} else {
		alert('Vão ser geradas duas vias do Recibo de Comissão em PDF do funcionário(a) ' + nome + '.\nClique em OK para finalizar.');

	}

	var pdf = new jsPDF();

	pdf.setProperties({
		title: 'Recibo Comissão',
		subject: 'Recibo ',
		author: 'Rafael Oliveira',
		keywords: 'gerador de recibos pessoal',
		creator: 'gPDF, javascript, web 2.0, ajax'
	});

	//1º VIA DO RECIBO
	pdf.line (10, 10, 200, 10); //linha horizontal superior
	pdf.line (10, 135, 10, 10) //linha vertical esquerda
	pdf.line (10, 135, 200, 135); //linha horizontal inferior
	pdf.line (200, 135, 200, 10) //linha vertical direita

	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 20, '                                 RECIBO');
	pdf.setTextColor(0);
	pdf.setFontSize(18);
	pdf.text(146, 30, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.setFontType("bold");pdf.text(20, 50, 'RECEBI DE: ');pdf.setFontType("normal");pdf.text(46, 50, loja);
	pdf.setFontType("bold");pdf.text(20, 58, 'CNPJ: ');pdf.setFontType("normal");pdf.text(34, 58, cnpj);
	pdf.setFontType("bold");pdf.text(20, 66, 'A IMPORTÂNCIA DE: ');pdf.setFontType("normal");pdf.text(64, 66, importancia.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 74, 'PERÍODO DE: ');pdf.setFontType("normal");pdf.text(50, 74,mes2+'/'+ano2);
	pdf.setFontType("bold");pdf.text(20, 82, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 82, referencia.toUpperCase());
	
	     
	pdf.setFontType("bold");pdf.text(20, 90, 'OBSERVAÇÃO: ');pdf.setFontType("normal");pdf.text(54, 90, obs.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 106, 'DATA:___________________________');
	pdf.setFontType("bold");pdf.text(20, 114, 'ASSINATURA:_________________________________________');
	pdf.setFontType("bold");pdf.text(20, 122, 'NOME: ');pdf.setFontType("normal");pdf.text(35, 122,nome.toUpperCase());
	
	
	//2º VIA DO RECIBO
	pdf.line (10, 163, 200, 163); //linha horizontal superior
	pdf.line (10, 163, 10, 288) //linha vertical esquerda
	pdf.line (10, 288, 200, 288); //linha horizontal inferior
	pdf.line (200, 288, 200, 163) //linha vertical direita

	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 174, '                                 RECIBO');
	pdf.setTextColor(0); //isso deve ser preto
	pdf.setFontSize(18);
	pdf.text(146, 184, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.setFontType("bold");pdf.text(20, 204, 'RECEBI DE: ');pdf.setFontType("normal");pdf.text(46, 204, loja);
	pdf.setFontType("bold");pdf.text(20, 212, 'CNPJ: ');pdf.setFontType("normal");pdf.text(34, 212, cnpj);
	pdf.setFontType("bold");pdf.text(20, 220, 'A IMPORTÂNCIA DE: ');pdf.setFontType("normal");pdf.text(64, 220, importancia.toUpperCase());
	pdf.setFontType("bold");pdf.text(20, 228, 'PERÍODO DE: ');pdf.setFontType("normal");pdf.text(50, 228,mes2+'/'+ano2);
	pdf.setFontType("bold");pdf.text(20, 236, 'REFERENTE A: ');pdf.setFontType("normal");pdf.text(53, 236, referencia.toUpperCase()); 
	pdf.setFontType("bold");pdf.text(20, 244, 'OBSERVAÇÃO: ');pdf.setFontType("normal");pdf.text(54, 244, obs.toUpperCase());

	pdf.setFontType("bold");pdf.text(20, 260,'DATA:___________________________');
	pdf.setFontType("bold");pdf.text(20, 268, 'ASSINATURA:_________________________________________');
	pdf.setFontType("bold");pdf.text(20, 276, 'NOME: ');pdf.setFontType("normal");pdf.text(35, 276,nome.toUpperCase());
	

	pdf.save('Recibo_' + nome + '.pdf');
	window.location.reload();

}