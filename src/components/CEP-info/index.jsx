import styles from "./CEPInfo.module.css"

function CEPInfo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.infos}>
                    <h2>CEP: 41290-730</h2>
                    <p>Rua da bussola perdida</p>
                    <p>Complemento: Algum complemento</p>
                    <p>Pirajá</p>
                    <p>Salvador - BA</p>
                </div>
            </div>
        </>
    )
}

export default CEPInfo
