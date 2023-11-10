import api from "../api";

export async function criarConta(perfil,nome,email,senha,cpf_cnpj)
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
            console.log(error)
            return 'Erro'
        }
 
};


