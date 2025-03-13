import { Page } from "./components/Page.js";
import { LineSummary } from "./components/LineSummary.js";

function App() {
	return (
		<div className="App">
			{/* <div className="Book">
        <div className="">
          <img
            src="./capa.png"
            width={"100%"}
          ></img>
        </div>
      </div> */}

			<Page
				title={"Sumário"}
				pageNumber={1}
			>
				<h4
					id={"Sumario"}
					className="mb-3 text-lg font-semibold"
				>
					Maldições
				</h4>
				<div className="flex flex-col gap-3">
					<LineSummary
						destino={"Ganancia"}
						title={"Ganancia"}
						page={3}
					/>
					<LineSummary
						destino={"Gula"}
						title={"Gula"}
						page={3}
					/>
					<LineSummary
						destino={"Inveja"}
						title={"Inveja"}
						page={4}
					/>
					<LineSummary
						destino={"Luxuria"}
						title={"Luxuria"}
						page={5}
					/>
					<LineSummary
						destino={"Orgulho"}
						title={"Orgulho"}
						page={6}
					/>
					<LineSummary
						destino={"Preguica"}
						title={"Preguiça"}
						page={7}
					/>
					<LineSummary
						destino={"Raiva"}
						title={"Raiva"}
						page={8}
					/>
					<LineSummary
						destino={"Raiva"}
						title={"Raiva"}
						page={8}
					/>
					<LineSummary
						destino={"Estudo"}
						title={"Estudo das Maldições"}
						page={2}
					/>
				</div>
			</Page>
			<Page
				pageNumber={2}
				destino={"Sumario"}
				title={"Ganancia"}
			>
				<h4 id="Ganancia">Maldição Cruciatus, descoberta no século VII.</h4>
				<p className="Paragraph">Era um vez um nobre que morava com sua família em uma pequena cidade comandada por um lider conservador.</p>
				<p className="Paragraph">
					O nobre tinha enormes vinhedos e vendia na bem cidade, tinha potencial para lucrar mais, mas era limitado devido as leis do lider que sempre
					rancorava em seu coração para que o lider morresse.
				</p>
				<p className="Paragraph">O Lider era protegido por inumeros guardas, apenas confiando no seu conselheiro.</p>
				<p className="Paragraph">O velho conservador não era convencido por nada que o nobre dizia e recusava todas as suas propostas.</p>
				<p className="Paragraph">Ele conhecia o conselheiro leal do lider ao qual lhe confiava a vida.</p>
				<p className="Paragraph">
					O nobre começou a procurar uma forma de arrancar as informações do conselheiro. Depois de gastar parte da sua fortuna encontrou um bruxo que
					lhe ensinou uma maldição que ninguem poderia suportar.
				</p>
				<p className="Paragraph">
					Sabendo disso ele torturou o conselheiro até que ele descobrisse como se livrar deles. Forjou uma carta dizendo que foram encuralados em uma
					viagem e que o lider havia morrido.
				</p>
				<p className="Paragraph">Executando seu plano o nobre ganancioso consquistou a pequena cidade. Em pouco tempo o reino.</p>
				<p className="Paragraph">A ganância do homem o transformou em um Tirano. Ele usava a maldição para se tornar cada vez mais poderoso.</p>
				<p className="Paragraph">
					Até que um dia após uma batalha planejando conquistar o reino vizinho, ao torturar o rei foi morto pelas costas por um aliado.
				</p>
			</Page>
			<Page
				pageNumber={3}
				destino={"Sumario"}
				title={"Gula"}
			>
				<h4 id="Gula">Maldição Petrificus Totalus, descoberta no século VIII</h4>
				<p className="Paragraph"></p>
				<p className="Paragraph">Era uma vez um guarda, que tinha a missão de proteger um cofre com todas as riquezas do lorde da região.</p>
				<p className="Paragraph">
					Ao seu lado, havia um grande protetor que também protegia o cofre, ele era forte e destemido. O Protetor cuidava da porta do cofre, enquanto
					o guarda patrulhava o local.
				</p>
				<p className="Paragraph">
					Um dia o guarda começou a sentir uma forte tentação de comer as guloseimas que estavam lá dentro. Ele tentou resistir à tentação, mas a
					ideia de se deliciar com o que estavam ali dentro era forte demais.
				</p>
				<p className="Paragraph">
					Foi então que ele descobriu um feitiço no cofre em meio aos tesouros. Um feitiço capaz de transformar um indivíduo em pedra. O guarda viu
					uma oportunidade de se aproveitar da situação e transformou o Protetor do cofre em pedra, para que pudesse ter livre acesso ao cofre.
				</p>
				<p className="Paragraph">
					Ele se esbaldou com as comidas e bebidas que estavam lá dentro, mas em pouco tempo gula começou a mostrar suas consequências. Ele engordou e
					ficou lento, tornando-se um alvo fácil para quem quisesse roubar o cofre. Um dia, quando ele estava se deliciando, não foi rápido o bastante
					e foi pego em flagrante pelo lorde.
				</p>
				<p className="Paragraph">
					O guarda tentou explicar suas ações, mas o lorde ficou furioso e o demitiu imediatamente. Desde então ele nunca mais conseguiu comer as
					delícias que ele tanto amava.
				</p>
			</Page>
			<Page
				pageNumber={4}
				destino={"Sumario"}
				title={"Inveja"}
			>
				<h4 id="Inveja">Maldição foi descoberta no seculo XII, mas foi perdida durante a historia.</h4>
				<p className="Paragraph">Era uma vez duas irmãs parecidas que moravam em um vilarejo afastado.</p>
				<p className="Paragraph">Durante um verão receberam a visita de um homem rico de terras distantes.</p>
				<p className="Paragraph">
					o homem viu as irmãs e se apaixonou por uma delas, no último dia de sua visita ele disse que voltaria para buscá-la.
				</p>
				<p className="Paragraph">A irmã escolhida ficou muito feliz, ela poderia partir desse vilarejo e ir para uma grande cidade.</p>
				<p className="Paragraph">
					A outra irmã não aceitou isso, ela tinha muita inveja de sua irmã, mesmo parecidas sua irmã era mais bonita e isso a atormentava.
				</p>
				<p className="Paragraph">Então até a próxima visita do homem, ela procurou um jeito de ficar com o homem.</p>
				<p className="Paragraph">Ela amaldiçou e transfigurou a si mesma para que se parecesse com sua irmã e pudesse substitui-la.</p>
				<p className="Paragraph">No grande dia a irmã invejosa fez um pacto com sua irmã, que elas nunca contariam seus segredos a ninguém.</p>
				<p className="Paragraph">Contou à irmã o seu plano e a prendeu dentro de casa e foi se encontrar com o homem.</p>
				<p className="Paragraph">O homem não percebeu a diferença entre as moças e casou-se com a irmã invejosa.</p>
			</Page>
			<Page
				pageNumber={5}
				destino={"Sumario"}
				title={"Luxuria"}
			>
				<h4 id="Luxuria">Maldição Imperio, descoberta no século IX</h4>
				<p className="Paragraph">Havia um homem rico que adorava ir ao bordel, ele sempre era bem recebido e todas as mulheres conheciam ele.</p>
				<p className="Paragraph">Se dizia que era homem tinha gostos estranhos, mas por ser um bom cliente ninguém nunca o negou um programa.</p>
				<p className="Paragraph">Certo dia uma moça nova chega ao bordel, chamando a atenção de todos de lá.</p>
				<p className="Paragraph">A moça era tão egocêntrica como bela e seduzia todos os clientes. O homem logo a percebeu e tratou de abordá-la.</p>
				<p className="Paragraph">No momento do ato a moça nega fazer certos caprichos do homem e que nada a convenceria do contrário.</p>
				<p className="Paragraph">O homem não satisfeito com o que lhe acontecia, procura outras moças, mas nenhuma o contenta.</p>
				<p className="Paragraph">Frustrado ele decide tentar obrigá-la a fazer o que queria, mas não poderia fazê-lo pois amava o tal bordel.</p>
				<p className="Paragraph">O homem motivado, retorna certo dia e utiliza de um feitiço maligno capaz de fazer qualquer um obedecer.</p>
				<p className="Paragraph">
					Ele consegue o que quer e mantém relações com ela, certo dia o homem precisa fazer uma viagem longa e retorna depois de umas semanas. Ao
					retornar todos estavam com raiva dele e o baniram da cidade.
				</p>
			</Page>
			<Page
				pageNumber={6}
				destino={"Sumario"}
				title={"Orgulho"}
			>
				<h4 id="Orgulho">Maldição Avada Kedavra, descoberta no séculos VIII</h4>
				<p className="Paragraph">
					Havia uma vez um homem muito orgulhoso, ele era rico, poderoso e bem-sucedido, mas ele queria mais. Ele acreditava que era superior a todos
					os outros e que não havia nada que ele não pudesse conseguir.
				</p>
				<p className="Paragraph">
					Um dia descobriu um feitiço capaz de matar, sem defesa. Ele ficou eufórico com essa descoberta e começou a usar seu poder para se vingar de
					quem ele achava que o tinha prejudicado. Ele matou inimigos, pessoas que o desafiaram e até mesmo aqueles que simplesmente lhe desagradavam.
				</p>
				<p className="Paragraph">
					Enquanto Paulo estava se divertindo com seu novo poder, ele não notou que as pessoas ao seu redor estavam ficando cada vez mais assustadas e
					desconfiadas dele. Ele também não percebeu que sua alma estava se tornado cada vez mais escura e vazia.
				</p>
				<p className="Paragraph">
					Até que um dia o homem foi confrontado por uma pessoa que ele amava e respeitava. Essa pessoa lhe mostrou como ele estava se tornando uma
					pessoa má e lhe pediu que parasse de matar.
				</p>
				<p className="Paragraph">
					O Homem orgulhoso não lhe deu ouvidos, até que um dia durante uma noite os assassinos invadiram o quarto do homem e o mataram.
				</p>
			</Page>
			<Page
				pageNumber={7}
				destino={"Sumario"}
				title={"Preguiça"}
			>
				<h4 id="Preguica">Maldição Obliviate, descoberta no século X</h4>
				<p className="Paragraph">Era uma vez um homem preguiçoso que passava seus dias sempre folgado e a toa.</p>
				<p className="Paragraph">
					Mas ele ainda precisava trabalhar, o Homem pensava em alguma forma de parar de trabalhar, ele então decidiu perguntar a um Bruxo centenário
					que dizia que o ensinaria se ele pagasse o preço. Ele aceitou sem enrolar. Mal esperava para fazer o que bem queria.
				</p>
				<p className="Paragraph">
					O homem achou que o seu poder era incrível e começou a usá-lo para apagar as memórias das pessoas que o incomodavam ou que o obrigavam a
					fazer alguma coisa que ele não queria. Ele apagava as memórias da sua mãe quando ela o obrigava a lavar a louça, dos colegas de trabalho
					quando eles trocavam o turno do trabalho e até mesmo das meninas que o rejeitavam.
				</p>
				<p className="Paragraph">
					O homem começou a usá-lo para apagar as memórias das pessoas que o incomodavam ou que o obrigavam a fazer alguma coisa que ele não queria.
					Nem seus colegas, amigos ou mesmo familiares e até mesmo as meninas que o rejeitavam.
				</p>
				<p className="Paragraph">
					Com o tempo, o Homem havia apagado a memória de todos e ninguém o reconhecia. Começou a se sentir solitário e vazio.
				</p>
				<p className="Paragraph">O homem no fim ficou sozinho, se arrependendo do seu pecado.</p>
			</Page>
			<Page
				pageNumber={8}
				destino={"Sumario"}
				title={"Raiva"}
			>
				<h4 id="Raiva">Maldiçao Sectumsempra, descoberta no século VII</h4>
				<p className="Paragraph">
					Havia um Caçador bruxo, que percorria as florestas em busca de criaturas mágicas para caçar. Ele era famoso por ter enfrentado uma criatura
					poderosa que causou grande mal à sua família. Um dia, enquanto explorava uma área desconhecida da floresta, ele encontrou uma casa
					abandonada de um bruxo.
				</p>
				<p className="Paragraph">
					O caçador vasculhou, e encontrou um livro de feitiços antigos, que continha um feitiço terrível. O feitiço permitia ao bruxo causar
					ferimentos horríveis em seus inimigos, ferimentos que dificilmente eram curados, abastecidos pela sua raiva.
				</p>
				<p className="Paragraph">
					O caçador percebeu que havia encontrado algo verdadeiramente poderoso, que poderia torná-lo imbatível na caça de criaturas mágicas.
				</p>
				<p className="Paragraph">
					Então ele começou a usar o feitiço com mais frequência, e logo ficou famoso por seus poderes mágicos impressionantes. Ele era temido por
					todas as criaturas mágicas e caçadores locais.
				</p>
				<p className="Paragraph">
					Mas com o tempo, o caçador começou a perceber que algo estava errado. As criaturas que ele caçava sofriam de maneira terrível, suas feridas
					pareciam nunca cicatrizar. Ele começou a sentir remorso pelo que estava fazendo e aos poucos foi perdendo a raiva.
				</p>
				<p className="Paragraph">O feitiço já não funcionava como antes e o homem encontrou ali a sua redenção.</p>
			</Page>

			<Page
				pageNumber={9}
				destino={"Sumario"}
				title={"Estudo das Maldições"}
			>
				<p
					id="Estudo"
					className="Paragraph"
				>
					Eu sempre me perguntei por que os bruxos usam os pecados capitais como fonte de poder para a Arte das Trevas. Como uma estudioso e
					pesquisador da magia, fui a fundo nesse assunto e descobri que pecados são considerados negativos porque representam comportamentos e
					atitudes prejudiciais para a Alma. Capazes de trazer ruína as Almas mais gentis.
				</p>
				<p className="Paragraph">
					Ao usar magia com princípio negativo baseado nos pecados, estamos essencialmente explorando as fraquezas humanas e os aspectos mais sombrios
					da natureza humana para obter poder. É um caminho perigoso, que exige sacrifícios de nossa moralidade e valores. Os bruxos e feiticeiros que
					se aventuram por esse caminho buscam mais poder ou influência, e muitas vezes são motivados pelo desejo de controlar outras pessoas ou
					destruir seus inimigos. Suas almas são corrompidas e entregues à escuridão.
				</p>
				<p className="Paragraph">
					Esses feitiços poderosos e perigosos são usados para infligir dor e sofrimento àqueles que são alvo delas. No entanto, nem todas as
					maldições são iguais e algumas são consideradas tão terríveis que são rotuladas como "imperdoáveis".
				</p>
				<p className="Paragraph">
					A magia negativa é poderosa porque é baseada em emoções e energias negativas. Os pecados capitais geram energias negativas, como raiva,
					inveja, luxúria e avareza, que são facilmente canalizadas para a magia negativa. No entanto, é importante lembrar que a magia negativa
					baseada em pecados capitais é altamente perigosa e prejudicial. Ela pode corromper a alma e transformar uma pessoa em um ser maligno e sem
					escrúpulos.
				</p>
				<p className="Paragraph">
					Se sucumbirmos aos poderes da magia negativa, corremos o risco de sermos consumidos por nossos próprios desejos egoístas e destruirmos o
					mundo.
				</p>
				<p className="Paragraph"></p>
				<p className="Paragraph"></p>
				<p className="Paragraph"></p>
			</Page>
		</div>
	);
}

export default App;
