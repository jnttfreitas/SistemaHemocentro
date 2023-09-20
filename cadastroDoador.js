
// Um array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
  const nome = prompt("Digite seu nome")
  const idade = prompt("digite sua idade")
  const peso = prompt("Digite seu peso")
  const tipoSanguineo = prompt("Digite seu tipo sanguineo")
  const ultimaDoacao = prompt("Digite a data da sua última doação, responda no formato DD/MM/AAAA")
    
    
    
    //As informações de cada usuário vão ser armazenadas neste objeto
    const doador = {
      nome: nome,
      idade: idade,
      peso: peso,
      tipoSanguineo: tipoSanguineo,
      ultimaDoacao: ultimaDoacao

    };
    
    //Crie um código que adiciona o objeto doador ao array doadores
    doadores.push(doador)
    //Este código retorna uma mensagem. Deixe inalterado
    alert("Doador cadastrado com sucesso!");
  }
  console.log(doadores)
  // Função para listar os doadores
  function listarDoadores() {
    let resultado = "===== LISTAGEM DE DOADORES =====";
    for(doador of doadores) {
      resultado += `\nNome: ${doador.nome}\n`;
      resultado += `Idade: ${doador.idade}\n`;
      resultado += `peso: ${doador.peso}\n`;
      resultado += `Tipo Sanguineo: ${doador.tipoSanguineo}\n`;
      resultado += `Última doação: ${doador.ultimaDoacao}\n`;
    }
      
    //Aqui vai o código que lista todos os doadores

    console.log(resultado);
  }
  
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
    let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    for(doador of doadores) {
      if(doador.tipoSanguineo === tipoSanguineo){
        resultado += `\nNome: ${doador.nome}\n`;
        resultado += `Idade: ${doador.idade}\n`;
        resultado += `peso: ${doador.peso}\n`;
        resultado += `Tipo Sanguineo: ${doador.tipoSanguineo}\n`;
        resultado += `Última doação: ${doador.ultimaDoacao}\n`;
      }
    }
    

    //Aqui vai o código que busca doadores por tipo sanguíneo

    console.log(resultado);
  }
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    for(doador of doadores) {
      if(doador.ultimaDoacao === dataDesejada){
        resultado += `\nNome: ${doador.nome}\n`;
        resultado += `Idade: ${doador.idade}\n`;
        resultado += `peso: ${doador.peso}\n`;
        resultado += `Tipo Sanguineo: ${doador.tipoSanguineo}\n`;
        resultado += `Última doação: ${doador.ultimaDoacao}\n`;
      }
    }
    //Aqui vai o código que busca os doadores por data da última doação
  
    console.log(resultado);
  }
  
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  
 
  