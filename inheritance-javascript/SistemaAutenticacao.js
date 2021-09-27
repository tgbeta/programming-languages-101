export class SistemaAutenticacao {
    static login (autenticavel, senha) {
        if(SistemaAutenticacao.eAutenticacel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticacel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}