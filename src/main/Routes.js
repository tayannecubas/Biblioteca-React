import React from 'react'
import {Route, Switch }  from 'react-router-dom'

import Index from '../view/contato/Index'
import Dicas from '../view/dicas/Dicas'
import Home from '../view/home/Home'
import Recomendado from '../view/recomendados/Recomendado'
import Sobre from '../view/sobre/Sobre'
import Vendidos from '../view/vendidos/Vendidos'

export default function Routes (){
  return (
    <Switch>
      <Route exact path= '/' component={Home} />
      <Route exact path= '/dicas' component={Dicas} />
      <Route exact path= '/sobre' component={Sobre} />
      <Route exact path= '/contato' component={Index} />
      <Route exact path= '/vendidos' component={Vendidos} />
      <Route exact path= '/recomendados' component={Recomendado} />
    </Switch>
  )
}
  