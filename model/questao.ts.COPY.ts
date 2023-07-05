import { Embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: any[]
    #acertou: boolean
    // #respondida: boolean
    constructor(id: number, enunciado: string, respostas: any[], acertou: boolean = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true
        }

        return false
    }

    get acertou() {
        return this.#acertou
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.#id, this.enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = Embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    static fromObject(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.fromObject(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.toObject()),
        }
    }
}