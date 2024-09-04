import styles from "./button.module.css"

function Button({ onClick }) {
    return (
        <>
            <div className={styles.container}>
                <button onClick={onClick} className={styles.button_buscar}>Buscar</button>
            </div>
        </>
    )
}

export default Button
