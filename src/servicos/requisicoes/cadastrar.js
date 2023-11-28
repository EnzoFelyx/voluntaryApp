import api from "../api";

export async function criarConta(perfil,nome,email,cpf_cnpj,senha)
{ 
        try{

            await api.post(`/users`,
            {
            
               perfil:perfil,
               nome:nome,
               email:email,
               cpf_cnpj:cpf_cnpj,
               senha:senha,
            });
            return 'Sucesso'
        }
    
        catch (error){
            return 'Erro'
        }
 
};


