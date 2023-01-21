const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso!")
    return
  }
  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso!")
}

function save() {
  localStorage.setItem("BrunoS@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("BrunoS@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

/*const data = {
  run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
}

nlwSetup.setData(data)
nlwSetup.load()*/
