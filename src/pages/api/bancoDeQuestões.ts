import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";



const questoes: QuestaoModel[] = [
    new QuestaoModel(201, 'hipérbole, eufemismo, litote, ironia, personificação, antítese, paradoxo, gradação e apóstrofe sao exemplos de:', [
      RespostaModel.errada('Figuras de palavras ou semânticas?'),
      RespostaModel.errada('Figuras de som ou harmonia?'),
      RespostaModel.errada('Figuras de sintaxe ou construção?'),
      RespostaModel.certa('Figuras de pensamento?'),
    ], 'Linguagens e suas Tecnologias'), 

    new QuestaoModel(202, 'Qual foi a principal obra de Machado de Assis no Realismo?', [
        RespostaModel.errada('"Vidas Secas"'),
        RespostaModel.errada('"Grande Sertão: Veredas"'),
        RespostaModel.errada('"O Cortiço"'),
        RespostaModel.certa('"Memórias Póstumas de Brás Cubas".'),
    ], 'Linguagens e suas Tecnologias'), 
    
    new QuestaoModel(204, 'Quais são os elementos principais de uma análise textual?', [
        RespostaModel.errada('Personagens, enredo, tempo e espaço.'),
        RespostaModel.errada('Linguagem, gênero, público-alvo e contexto histórico.'),
        RespostaModel.errada('Introdução, desenvolvimento, conclusão e referências bibliográficas.'),
        RespostaModel.certa('Argumentação, evidências, contra-argumentação e conclusão.'),
    ], 'Linguagens e suas Tecnologias'), 

    new QuestaoModel(205, 'Qual é a função da crase na língua portuguesa?', [
        RespostaModel.errada(' Indicar pluralidade.'),
        RespostaModel.errada('Marcar a presença de um verbo transitivo direto.'),
        RespostaModel.errada('Unir a preposição "a" com o artigo "a".'),
        RespostaModel.certa('Sinalizar a presença de um artigo definido.'),
    ], 'Linguagens e suas Tecnologias'), 
     
    new QuestaoModel(203, 'Qual é o valor de x na equação 2x + 5 = 15?', [
        RespostaModel.errada('x = 3,5'),
        RespostaModel.errada('x = 6'),
        RespostaModel.errada('x = 10'),
        RespostaModel.certa('x = 5'),
    ], 'Matemática e suas Tecnologias'), 

    new QuestaoModel(206, 'Qual é o resultado da operação: (3² - 4) ÷ 2 + 5?', [
        RespostaModel.errada('10'),
        RespostaModel.errada('7'),
        RespostaModel.errada('4'),
        RespostaModel.certa('7,5'),
    ], 'Matemática e suas Tecnologias'), 
    
    new QuestaoModel(207, 'Qual é a área de um triângulo com base medindo 6 cm e altura de 8 cm?', [
        RespostaModel.errada('16 cm².'),
        RespostaModel.errada('48 cm².'),
        RespostaModel.errada('32 cm².'),
        RespostaModel.certa('24 cm².'),
    ], 'Matemática e suas Tecnologias'), 

    new QuestaoModel(208, 'Qual é o valor aproximado de π (pi)?', [
        RespostaModel.errada('2.14'),
        RespostaModel.errada('5.14'),
        RespostaModel.errada('4.14'),
        RespostaModel.certa('3.14'),
    ], 'Matemática e suas Tecnologias'), 

    new QuestaoModel(209, 'Qual é o gás mais abundante na atmosfera terrestre?', [
        RespostaModel.errada('Oxigênio'),
        RespostaModel.errada('Dióxido de carbono.'),
        RespostaModel.errada('Metano'),
        RespostaModel.certa('Nitrogênio'),
    ], 'Ciências da Natureza e suas Tecnologias'), 

    new QuestaoModel(210, 'Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?', [
        RespostaModel.errada('Digestão'),
        RespostaModel.errada('Respiração celular'),
        RespostaModel.errada('Fermentação'),
        RespostaModel.certa('Fotossíntese'),
    ], 'Ciências da Natureza e suas Tecnologias'), 

    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ], 'Ciências da Natureza e suas Tecnologias'), 
    new QuestaoModel(212, 'Qual é o órgão responsável pela filtragem do sangue e pela formação da urina?', [
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Fígado'),
        RespostaModel.errada('Baço'),
        RespostaModel.certa('Rim'),
    ], 'Ciências da Natureza e suas Tecnologias'), 

    new QuestaoModel(213, 'O que é um ecossistema', [
        RespostaModel.errada('Um conjunto de organismos de diferentes espécies'),
        RespostaModel.errada('Um grupo de células com a mesma função'),
        RespostaModel.errada('Um processo de reprodução assexuada'),
        RespostaModel.certa('Um sistema formado por seres vivos e o ambiente em que vivem'),
    ], 'Ciências da Natureza e suas Tecnologias'), 

    new QuestaoModel(214, 'Quando foi proclamada a República do Brasil?', [
        RespostaModel.errada('11/11/1801'),
        RespostaModel.errada('depois da Guerra Fria'),
        RespostaModel.errada('15/11/1500'),
        RespostaModel.certa('15/11/1889'),
    ], 'Ciências Humanas e Sociais Aplicadas'), 

    new QuestaoModel(215, 'Quem foi o líder político responsável pela unificação da Alemanha no século XIX?', [
        RespostaModel.errada('Adolf Hitler'),
        RespostaModel.errada('Napoleão Bonaparte'),
        RespostaModel.errada('Benito Mussolini'),
        RespostaModel.certa('Otto von Bismarck'),
    ], 'Ciências Humanas e Sociais Aplicadas'), 

    new QuestaoModel(216, 'Qual é o principal objetivo da Organização das Nações Unidas (ONU)?', [
        RespostaModel.errada('Promover a cooperação econômica internacional'),
        RespostaModel.errada('Promover o comércio internacional e a livre concorrência'),
        RespostaModel.errada('Desenvolver a tecnologia e a ciência globalmente'),
        RespostaModel.certa('Garantir a segurança e a paz mundial'),
    ], 'Ciências Humanas e Sociais Aplicadas'), 

    new QuestaoModel(217, 'Quem declarou a Independência do Brasil?', [
        RespostaModel.errada('Dom Pedro I'),
        RespostaModel.errada('Dom João XI'),
        RespostaModel.errada('Napoleão Bonaparte'),
        RespostaModel.certa('Dom Pedro II'),
    ], 'Ciências Humanas e Sociais Aplicadas'),
    //ingles
    new QuestaoModel(218, ' Is it correct to say that SSL (Secure Sockets Layer):', [
        RespostaModel.errada('s a type of virus created to cause harm to humanity. Like monkeypox?'),
        RespostaModel.errada(' is a type of application used to make purchases?'),
        RespostaModel.errada('is a type of standard browser used on ships?'),
        RespostaModel.certa(' is a standard type of security to ensure that all data is encrypted in transit between a website and a browser?'),
    ], 'Ciências Humanas e Sociais Aplicadas'),
    new QuestaoModel(219, 'What are the frameworks that help deal with big data?', [
        RespostaModel.errada('Silk, velocity, by the sea'),
        RespostaModel.errada('Shark attack, shop cloud, data types'),
        RespostaModel.errada('Transfer, update, read'),
        RespostaModel.certa('Hadoop, Spark, NoSQL'),
    ], 'Ciências Humanas e Sociais Aplicadas'),
    new QuestaoModel(220, 'Wha tis the meaning of HTTP?', [
        RespostaModel.errada('Hadoop, Text, Transfer, Page'),
        RespostaModel.errada('Hoop, Transfer, Test, Pay'),
        RespostaModel.errada('Height, Totally, Tall, Pick up'),
        RespostaModel.certa('HyperText Transfer Protocol'),
    ], 'Ciências Humanas e Sociais Aplicadas'),
    new QuestaoModel(221, 'What PowerPoint does?', [
        RespostaModel.errada('write a text'),
        RespostaModel.errada('calculations'),
        RespostaModel.errada('pictures'),
        RespostaModel.certa('slideshows'),
    ], 'Ciências Humanas e Sociais Aplicadas')
]

export default questoes