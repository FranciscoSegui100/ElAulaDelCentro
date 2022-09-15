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
/// Add SDK credentials
// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago('TEST-3408d91e-cd74-49c7-8a2e-4cae69855cdd', {
  locale: 'AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});

// Handle call to backend and generate preference.
document.getElementById("checkout-btn").addEventListener("click", function() {

  $('#checkout-btn').attr("disabled", true);
  
  const orderData = {
    quantity: document.getElementById("quantity").value,
    description: document.getElementById("product-description").innerHTML,
    price: document.getElementById("unit-price").innerHTML
  };
    
  fetch("/create_preference", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function(response) {
        return response.json();
    })
    .then(function(preference) {
        createCheckoutButton(preference.id);
        
        $(".shopping-cart").fadeOut(500);
        setTimeout(() => {
            $(".container_payment").show(500).fadeIn();
        }, 500);
    })
    .catch(function() {
        alert("Unexpected error");
        $('#checkout-btn').attr("disabled", false);
    });
});

// Create preference when click on checkout button
function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  mercadopago.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '#button-checkout', // Class name where the payment button will be displayed
      label: 'Pay', // Change the payment button text (optional)
    }
  });
}

// Handle price update
function updatePrice() {
  let quantity = document.getElementById("quantity").value;
  let unitPrice = document.getElementById("unit-price").innerHTML;
  let amount = parseInt(unitPrice) * parseInt(quantity);

  document.getElementById("cart-total").innerHTML = "$ " + amount;
  document.getElementById("summary-price").innerHTML = "$ " + unitPrice;
  document.getElementById("summary-quantity").innerHTML = quantity;
  document.getElementById("summary-total").innerHTML = "$ " + amount;
}

document.getElementById("quantity").addEventListener("change", updatePrice);
updatePrice();  

// Go back
document.getElementById("go-back").addEventListener("click", function() {
  $(".container_payment").fadeOut(500);
  setTimeout(() => {
      $(".shopping-cart").show(500).fadeIn();
  }, 500);
  $('#checkout-btn').attr("disabled", false);  
});