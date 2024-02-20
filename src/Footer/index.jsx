import Order from "../components/Order"



const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour


    return (
        <footer className="Footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    )
}

export default Footer