import "../scss/components/Instructions.scss";

function Instructions() {
  return (
    <div className="instructions__div">
      <h2 className="instructions__title"> ¡Cuidado con Grogu!</h2>
      <p className="instructions__p">
        El cazarrecompensas mandaloriano Din Djarin, conocido como «el
        Mandaloriano» o simplemente «mando», está a cargo de Grogu mientras
        viaja por la galaxia realizando todo tipo de encargos. En esta ocasión
        el encargo es muy especial. Debe entregar huevos de rana (no
        fertilizados), galletas azules (¡qué ricas!) y unas ranas. Todo ello es
        muy importante ya que este cargamento es de vital importancia para
        restablecer contacto con Ahsoka Tano.
      </p>
      <p className="instructions__p">
        El objetivo es entregar la mercancía a un contacto en el planeta
        Nevarro. Él nos dará la información del paradero de Ahsoka, información
        que usaremos para volver a intentar que sea la maestra de Grogu como
        Jedi. El problema es que nuestro contacto ha sido muy claro, si no llega
        la mercancía no hay trato. Ayuda a Mando a conseguir su objetivo y
        tendrás una buena recompensa.
      </p>
      <h3 className="instructions__subtitle"> Reglas del juego </h3>

      <p className="instructions__p">
        Dispondremos de 6 casillas que representan un camino en la zona de carga
        de la Razor Crest que lleva hasta el armario donde se encuentra segura
        la mercancía.
      </p>
      <p className="instructions__p">
        De este modo tendremos 7 casillas, 6 del camino y una que representa al
        armario: Durante el viaje has hecho muy bien tu trabajo pero ahora debes
        vaciar el armario. Para ello deberás descargar la mercancía poco a poco.
        Este es el momento más delicado ya que Grogu puede aprovechar y llegar
        hasta el armario. Si eso ocurre se comerá lo que encuentre y Mando
        perderá la oportunidad de saber dónde esta Ahsoka.
      </p>
      <p className="instructions__p">
        Ganarás el juego si consigues descargar toda la mercancía. Perderás si
        Grogu llega a la última casilla (el armario).
      </p>
    </div>
  );
}

export default Instructions;
