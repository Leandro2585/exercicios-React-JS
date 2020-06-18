import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// import Primeiro from './componentes/Primeiro'
// import Multi from './componentes/multiplos'
// import Saudacao from './componentes/saudacao'
import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
        <Pai nome="Paulo" sobrenome="Silva" >
                <Filho nome="Pedro" />
                {/* <Filho nome="Paulo" />
                <Filho nome="Carla" /> */}
         </Pai>
    , document.getElementById('root'))


