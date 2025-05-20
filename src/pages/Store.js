import  { React, useEffect, useState } from "react";
import styles from "../pages/Store.module.css";



const Store = () => {
    useEffect(() => {
        document.title = "Prime Burger - Cadastrar Loja"
    }, []);

    const [displayName, setName]=useState('');
    const [displayEmail, setEmail]  = useState('');
    const [displayPassword, setPassword]  = useState('');
    const [displayConfirm, setConfirm]  = useState('');
    const [error, setError] = useState('');

    return (
        <div className={styles.main_content}>
            <h1>Cadastre sua Loja</h1>
            <form className={styles.forms}>
            <label>
                    <span>
                        Loja:
                    </span>
                    <input type="text" name="displayName" required placeholder="Nome da Loja"/>
                    </label>
                    <label>
                    <span>
                        Endereço:
                    </span>
                    <input type="text" name="displayEmail" required placeholder="Endereço"/>
                </label>
                <label>
                    <span>
                        Cidade:
                    </span>
                    <input type="text" name="displayPassword" required placeholder="Cidade"/>
                </label>
                <label>
                    <span>
                        UF:
                    </span>
                    <input type="text" name="displayConfirm" required placeholder="UF"/>
                </label>
                <button className={styles.btnRegister}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default Store