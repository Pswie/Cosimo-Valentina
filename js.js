// Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu")
  const navigation = document.querySelector(".navigation")
  toggleMenu.classList.toggle("active")
  navigation.classList.toggle("active")

  // Close the mobile menu when clicking on a navigation link
  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navigation.classList.remove("active")
        toggleMenu.classList.remove("active")
      }
    })
  })
}
// End Navigation

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})
// End Swiper Slider

// Filter
function filterPage(mainClass) {
  const allTab = document.querySelectorAll(`${mainClass} .filter-btn`)

  allTab.forEach((tab) => {
    tab.addEventListener("click", function () {
      console.log("clicked")
      allTab.forEach((tab) => {
        tab.classList.remove("active")
      })
      this.classList.add("active")
      const tabContent = document.querySelectorAll(`${mainClass} .filter-cards`)
      tabContent.forEach((content) => {
        content.classList.remove("t-active")
      })
      const tabActive = document.querySelector(`${mainClass} .tab` + this.dataset.tab)
      tabActive.classList.add("t-active")
    })
  })
}
filterPage(".bridal")
filterPage(".itinerary")
// End Filter

// Aggiungi il codice per il timer alla fine del file

// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
  // Set the date we're counting down to
  const weddingDate = new Date("Sep 8, 2025 14:30:00").getTime()

  // Update the countdown every 1 second
  const countdownTimer = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the wedding date
    const distance = weddingDate - now

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result
    document.getElementById("days").textContent = days.toString().padStart(2, "0")
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdownTimer)
      document.getElementById("countdown").innerHTML = "<h3>È arrivato il grande giorno!</h3>"
    }
  }, 1000)
})
// End Countdown Timer


// WhatsApp Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const whatsappForm = document.getElementById("whatsapp-form")

  whatsappForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const guests = document.getElementById("guests").value
    const message = document.getElementById("message").value

    const whatsappMessage = `Ciao Valentina, sono ${name}. Confermo la mia presenza al matrimonio con ${guests} ospiti. ${message ? "Allergeni e Intolleranze: " + message : ""}`

    const whatsappNumber = "393342882532" // Numero di Valentina
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, "_blank")
  })
})

