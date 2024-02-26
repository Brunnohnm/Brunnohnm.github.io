document.getElementById('generateLesson').addEventListener('click', function() {
    const lessons = [
        {
            lesson: "A morte não é o fim da vida, mas uma parte dela.",
            explanation: "Esta frase nos lembra de que a morte é uma transição natural e inevitável, não um ponto final absoluto. Encare a vida como uma jornada preciosa e finita, onde cada experiência e relação tem seu valor."
        },
        {
            lesson: "O amor é a única coisa racional e satisfatória a se perseguir.",
            explanation: "O amor é o que dá verdadeiro sentido à nossa existência, nos incentivando a focar nossas energias em cultivar conexões genuínas com os outros."
        },
        {
            lesson: "Às vezes, não acreditamos no que vemos e precisamos acreditar no que sentimos. E, se quisermos que os outros confiem em nós, precisamos sentir que nós confiamos neles. Mesmo que estejamos no escuro. Mesmo quando estamos caindo.",
            explanation: "Esta frase nos ensina sobre a importância da fé e confiança, não apenas em nós mesmos, mas também nas pessoas ao nosso redor, especialmente em momentos de incerteza ou dificuldade​"
        },
        {
            lesson: "Não viva com arrependimentos; escolha o caminho certo agora.",
            explanation: "Este ensinamento nos incita a tomar decisões conscientes e intencionais, vivendo de acordo com nossos valores mais profundos sem remorsos."
        },
        {
            lesson: "Dê-se permissão para ser humano e sentir emoções.",
            explanation: "Ser vulnerável é uma força. Aceitar e expressar nossas emoções nos torna mais compassivos e empáticos."
        },
        {
            lesson: "O sentido da vida é aprender a amar.",
            explanation: "A vida nos oferece inúmeras lições, mas a mais crucial é aprender a amar. Amar não apenas os outros, mas também a nós mesmos e o mundo ao nosso redor. Este ensinamento nos encoraja a abrir nossos corações e apreciar as conexões que formamos."
        },
        {
            lesson: "Encontre compaixão dentro de você mesmo.",
            explanation: "A compaixão começa internamente. Reconhecer nossa própria dor e sofrimento é o primeiro passo para entender os outros. Este ensinamento nos lembra da importância de sermos gentis e misericordiosos conosco mesmos, como base para estender essa gentileza aos outros."
        },
        {
            lesson: "Viva uma vida que você se orgulhará de lembrar.",
            explanation: "Nossas ações e escolhas definem nosso legado. Este ensinamento nos motiva a viver de forma autêntica e significativa, de modo que, ao olharmos para trás, possamos fazê-lo com satisfação e sem arrependimentos."
        },
        {
            lesson: "A vulnerabilidade é a chave para a intimidade emocional.",
            explanation: "Ser vulnerável permite conexões profundas com os outros. Este ensinamento nos encoraja a compartilhar nossos medos, esperanças e sonhos, fortalecendo nossos relacionamentos e nossa compreensão mútua."
        },
        {
            lesson: "Dê sem esperar nada em troca.",
            explanation: "A generosidade desinteressada é uma das maiores virtudes. Este ensinamento nos lembra da alegria e satisfação encontradas em dar aos outros, sem a expectativa de reciprocidade."
        },
        {
            lesson: "Encontre beleza nas pequenas coisas.",
            explanation: "A beleza está ao nosso redor, nas menores coisas. Este ensinamento nos incentiva a apreciar os momentos simples da vida, encontrando alegria e gratidão nas coisas cotidianas."
        },
        {
            lesson: "Aprenda a perdoar para viver em paz.",
            explanation: "O perdão é fundamental para a paz interior. Este ensinamento nos mostra que perdoar aos outros e a nós mesmos nos liberta de pesos desnecessários, permitindo-nos viver com leveza e harmonia."
        },
        {
            lesson: "Aceite-se como você é.",
            explanation: "A autoaceitação é a base do bem-estar. Este ensinamento nos encoraja a abraçar nossas imperfeições e celebrar nossa singularidade, reconhecendo que somos suficientes tal como somos."
        },
        {
            lesson: "Cultive a gratidão todos os dias.",
            explanation: "A gratidão transforma nossa perspectiva de vida. Este ensinamento nos lembra de sermos gratos pelas bênçãos que temos, grandes e pequenas, nutrindo uma atitude positiva e um coração agradecido."
        },
        {
            lesson: "Seja paciente, o tempo revela todas as respostas.",
            explanation: "A paciência é uma virtude poderosa. Este ensinamento nos aconselha a ter paciência com a vida, com os outros e conosco mesmos, sabendo que o tempo trará clareza e compreensão."
        },
        {
            lesson: "Ouvir é tão importante quanto falar.",
            explanation: "A arte de ouvir é fundamental para o entendimento mútuo. Este ensinamento nos incentiva a ouvir atentamente, valorizando as perspectivas e sentimentos dos outros."
        },
        {
            lesson: "Transforme a dor em crescimento.",
            explanation: "A dor é inevitável, mas o sofrimento é opcional. Este ensinamento nos mostra como podemos usar nossas experiências dolorosas como oportunidades para crescer e nos fortalecer."
        },
        {
            lesson: "A vida é sua professora mais sábia.",
            explanation: "Cada experiência da vida oferece uma lição valiosa. Este ensinamento nos encoraja a estar abertos às lições que a vida nos ensina, mesmo (e especialmente) nas circunstâncias mais desafiadoras."
        },
        {
            lesson: "Mantenha a curiosidade viva.",
            explanation: "A curiosidade nos leva a explorar, aprender e crescer. Este ensinamento nos motiva a manter nossa mente aberta e nosso espírito inquisitivo, nunca parando de questionar e descobrir."
        },
        {
            lesson: "A generosidade enriquece sua alma.",
            explanation: "Dar aos outros não apenas ajuda a quem recebe, mas também alimenta nossa própria alma. Este ensinamento nos lembra que a verdadeira riqueza vem de compartilhar o que temos."
        },
        {
            lesson: "Encontre propósito nas conexões humanas.",
            explanation: "Nossas relações com os outros dão significado à nossa existência. Este ensinamento nos incentiva a valorizar e cultivar nossas conexões humanas, reconhecendo-as como a essência da vida."
        },
        {
            lesson: "Abra espaço para mudanças.",
            explanation: "A mudança é constante e necessária para o crescimento. Este ensinamento nos lembra de ser flexíveis e adaptáveis, abraçando as mudanças como oportunidades para evoluir."
        },
        {
            lesson: "Viva com intenção, não por hábito.",
            explanation: "Viver intencionalmente significa fazer escolhas conscientes. Este ensinamento nos desafia a agir com propósito, em vez de seguir cegamente os hábitos e rotinas."
        },
        {
            lesson: "A simplicidade é a chave para a felicidade.",
            explanation: "Viver de maneira simples nos ajuda a focar no que realmente importa. Este ensinamento nos encoraja a descomplicar nossa vida, encontrando alegria nas coisas mais básicas."
        },
        {
            lesson: "Deixe seu legado de amor.",
            explanation: " O maior legado que podemos deixar é o amor. Este ensinamento nos inspira a viver de forma que nossas ações e palavras deixem uma marca positiva nos outros, perpetuando o ciclo do amor."
        }
    ];
    const reflection = document.getElementById('reflection');
    const randomIndex = Math.floor(Math.random() * lessons.length);
    const selectedLesson = lessons[randomIndex];
    reflection.innerHTML = `<strong>${selectedLesson.lesson}</strong><br><br>${selectedLesson.explanation}`;
});
