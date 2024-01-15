import React, {useEffect} from "react";


function Intestazione(){
    useEffect(() => {
        // Aggiunge una classe 'fixed' all'header quando si fa lo scrolling
        const handleScroll = () => {
            const header = document.getElementById('myHeader');
            if (header) {
                if (window.scrollY >= 0 && window.scrollY<=1350) {
                    header.classList.add('fixed');
                } else {
                    header.classList.remove('fixed');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Pulisce l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(

        <header style={{ padding: '20px', textAlign: 'center' }} className={'header'} id={'myHeader'}> <h1 className={'titolo'}>
            <span>Exploring the Dynamic Landscape:</span> <br /> <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            An In-Depth Analysis of AI-Powered Image Generation Solutions
        </span></h1> </header>

    );
}
export default Intestazione;

/*
<header style={{padding: '8px', textAlign:"center"}} className={'header'} id={"myHeader"} >
                <h1 className={'titolo'}> Exploring the Dynamic Landscape: An In-Depth Analysis of AI-Powered Image Generation Solutions in a Rapidly Evolving Realm</h1>
            </header>
 */