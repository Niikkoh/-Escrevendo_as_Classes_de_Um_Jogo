
    /*Constantes que indicam o nome de cada classe de herói*/

const MAGE_TYPE = "mago";
const WARRIOR_TYPE = "guerreiro";
const MONK_TYPE = "monge";
const NINJA_TYPE = "ninja";

     /*Constantes que indicam a mensagem padrão de ataque de cada classe do herói*/

const MAGE_TYPE_MESSAGE_ATTACK = "magia";
const WARRIOR_TYPE_MESSAGE_ATTACK = "espada";
const MONK_TYPE_MESSAGE_ATTACK = "artes marciais";
const NINJA_TYPE_MESSAGE_ATTACK = "shuriken";

const NONE_TYPE_MESSAGE_ATTACK = "none";

     /*Exemplo de entrada de dados para intânciar classe hero*/

const PLAYER_NAME_1 = "Link";
const PLAYER_AGE_1 = 23;

const PLAYER_NAME_2 = "Mario";
const PLAYER_AGE_2 = 28;

const PLAYER_NAME_3 = "Pacman";
const PLAYER_AGE_3 = 30;

const PLAYER_NAME_4 = "Sonic";
const PLAYER_AGE_4 = 25;

const N = 4;

/*=================================================================================================================*/

    /*Classe com informações do herói*/

class Hero{

    constructor(name, age, type)
    {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackType;

        this.getAttackType();
    }

    /*Informa a mensagem de ataque correspondente a classe do herói*/

    getAttackType()
    {
        if(this.type == MAGE_TYPE)
            this.attackType = MAGE_TYPE_MESSAGE_ATTACK;
        else if(this.type == WARRIOR_TYPE)
            this.attackType = WARRIOR_TYPE_MESSAGE_ATTACK;
        else if(this.type == MONK_TYPE)
            this.attackType = MONK_TYPE_MESSAGE_ATTACK;
        else if(this.type == NINJA_TYPE)
            this.attackType = NINJA_TYPE_MESSAGE_ATTACK;
        else
            this.attackType = NONE_TYPE_MESSAGE_ATTACK;
    }

    /*Informa na tela que o herói atacou*/

    attack() { console.log(`O ${this.type} ${this.name} atacou usando ${this.attackType}`); }
}

/*=================================================================================================================*/

main()

/*=================================================================================================================*/

function main()
{
    /*Instancia 4 heróis em um vetor*/

    let playerOne = [new Hero(PLAYER_NAME_1, PLAYER_AGE_1, MAGE_TYPE),
                     new Hero(PLAYER_NAME_2, PLAYER_AGE_2, WARRIOR_TYPE),
                     new Hero(PLAYER_NAME_3, PLAYER_AGE_3, MONK_TYPE),
                     new Hero(PLAYER_NAME_4, PLAYER_AGE_4, NINJA_TYPE)];

    /*Printa o ataque na tela de cada herói*/

    for(let i=0; i < N; i++)
        playerOne[i].attack();

}