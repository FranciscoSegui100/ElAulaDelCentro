const documenatcion = document.getElementById("documentacion")

documenatcion.addEventListener ("click", async () => {
    const { value: password } = await Swal.fire({
        title: 'Ingresar Contraseña',
        input: 'password',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (password === "RuloCaba") {
        location.href = "https://drive.google.com/"
      }else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Contraseña incorrecta',
          })
      }
})