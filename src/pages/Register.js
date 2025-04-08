import { React, useEffect } from 'react';

function Register() {
  useEffect(() => {
    document.title = "Prime Burger - Cadastrar"
  }, []);
  
  return (
    <div>Cadastrar</div>
  )
}

export default Register;