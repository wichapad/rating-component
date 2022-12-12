const rateSelect = document.querySelector(".rating-select")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const againButton = document.getElementById("again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn-score")

// เมื่อคลิ๊ก ปุ่ม submit หน้าเลือก rate จะหายไป แล้ว ปรากฏ หน้า thankyou
submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    rateSelect.style.display = "none"
})

// เมื่อ click ปุ่ม again หน้า thank you จะหายไป หน้าเลือก rate จะโผล่กลับมา
againButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    rateSelect.style.display = "block"
})

//เมื่อ click ตัวเลขแล้วกด submit ค่าที่ click จะส่งไปยัง div thankyou-rate ของ section thank-you
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})