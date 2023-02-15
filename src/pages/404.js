import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <div className="content-not-found">
            <Container>
                <h2 className='content-impressum-headline'>Whoops!</h2>
                <p>
                    Sieht so aus, als hättest du dich verirrt. Aber keine Panik, das ist völlig normal! Du hast wahrscheinlich die Seite gesucht, auf der das beste Festival aller Zeiten stattfindet. Aber leider, hier ist es nicht. Stell sicher, dass du deine Tanzbewegungen auf Vordermann bringst, bevor du hier auftauchst. Wir sehen uns auf der Tanzenfläche!
                </p>
                <Link className="content-not-found-link" to="/">Zurück zur Party</Link>
            </Container>
        </div>
    );
}