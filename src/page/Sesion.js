const Sesion = () => {   
  
    var inicio = document.getElementById("inicio");
    var contMain = document.getElementById("cont-main");
  
    contMain.style.display = "none";
  
    inicio.addEventListener("click", function() {
      contMain.style.display = "block";
    });
  
      return <main className='main sesion'>      
      <section className="sec-sesion">
        <figure>
            <div>
            <img src="https://thumbs.dreamstime.com/b/unknown-male-silhouette-profile-avatar-vector-people-175294833.jpg"></img>
            <h2>Nombre del usuario</h2>
            </div>
            <section className="sec-boton">
                <button>Salir</button>
            </section>
        </figure>
      </section>
    </main>;
  }
  export default Sesion;