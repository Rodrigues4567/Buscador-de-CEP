import styles from "./CEPInfo.module.css"

function CEPInfo(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.infos}>
                    <h2><strong>CEP:</strong> {props.cep}</h2>
                    <p><strong>Logradouro:</strong> {props.logradouro}</p>
                    <p><strong>Bairro:</strong> {props.bairro}</p>
                    <p><strong>Cidade:</strong> {props.cidade}</p>
                    <p><strong>UF:</strong> {props.uf}</p>
                </div>
            </div>
        </>
    )
}

export default CEPInfo
