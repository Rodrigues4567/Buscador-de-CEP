import styles from "./input.module.css"

function Input({ onInputChange }) {
    return (
        <>
            <div className={styles.container}>
                <input type="text" className={styles.input} placeholder="Digite seu CEP" onChange={(e) => onInputChange(e.target.value)} />
            </div>
        </>
    )
}

export default Input
