
const Ingresar = () => {   
    
    document.getElementById("cont-main").style.display = "none";
    document.getElementById("hdr").style.display = "none";

      return <><main className='main sesion'>
          <section className="sec-sesion">
              <figure>
                  <img src="https://thumbs.dreamstime.com/b/unknown-male-silhouette-profile-avatar-vector-people-175294833.jpg"></img>
                  <section className="sec-boton">
                      <div>
                          <label for="correo">Email:</label>
                          <input type="input" id="correo" name="correo" placeholder="example@gmail.com"></input>
                          <label for="password">password:</label>
                          <input type="password" id="password" name="password" placeholder="*********"></input>                          
                          <a id="btn-ingresar" href="/Inicio">Ingresar</a>
                      </div>
                  </section>
              </figure>
          </section>
      </main></>;
  };
  export default Ingresar;