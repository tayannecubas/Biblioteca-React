import React from "react";

export default function Contato(){
  return(
    <section>
      <form>
         Nome: <input type='text' name='nome' />

         E-mail: <input type='email' name='email' /> 

 
           Comentários: <textarea name='comentarios'></textarea> 

        <input type='submit' name='enviar' value='Enviar' />
        <input type='reset'  name='reset' value='apagar' /> 
        
      </form>
    </section>
  )
}