export function Vista(){
    return(
        <form action="">
        <fieldset>
          <legend>Conctános llenando todos los campos</legend>

          <div>
            <label for="">Nombre</label>
            <input type="text" placeholder="Tu Nombre" />
          </div>

          <div>
            <label for="">Teléfono</label>
            <input type="tel" placeholder="Tu Teléfono" />
          </div>

          <div>
            <label for="">Correo</label>
            <input type="email" placeholder="Tu Email" />
          </div>

          <div>
            <label for="">Mensaje:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div>
            <input type="submit" value="Enviar" />
          </div>
        </fieldset>
      </form>
    )
}