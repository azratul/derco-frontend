import '../styles/Footer.css';

/** Footer profile */
const Footer = () => {
    return (
        <section className='Footer'>
            <div>
                <span><b>Derco Test</b></span> <span>&copy; {new Date().getFullYear()}</span>
            </div>
        </section>
    );
};

export default Footer;
