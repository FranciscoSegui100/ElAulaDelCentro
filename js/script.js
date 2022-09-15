const documenatcion = document.getElementById("documentacion")

documenatcion.addEventListener ("click", async () => {
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Ciencias Medicas': '👨‍⚕️Ciencias Medicas👨‍⚕️',
        'Ingenierias y Arquitectura': '👷Ingenierias y Arquitectura👷'
      })
    },0)
  })
  
  const { value: Carrera } = await Swal.fire({
    title: 'Elegir Carrera',
    input: 'select',
    inputOptions: inputOptions,
    showCloseButton: true,
  })
  if (Carrera === "Ciencias Medicas" ) {
    Swal.fire({ 
      html: `Elegiste: ${Carrera}. Redireccionando a los documentos`, showConfirmButton: false,})
    setTimeout(() => {
      location.href = "https://drive.google.com/drive/folders/1oyGO-gKvB-KQOSwrPJs5tOYEjbCMwHpq"
    },1500)
  }
  if (Carrera === "Ingenierias y Arquitectura"){
    Swal.fire({ html: `Elegiste: ${Carrera}. Redireccionando a los documentos`, showConfirmButton: false,})
    
    setTimeout(() => {
      location.href = "https://drive.google.com/drive/folders/1wIxdqn5zCydH0e_i6ZO_4oz4WZLnOCP3"
  },1500)
}
})
