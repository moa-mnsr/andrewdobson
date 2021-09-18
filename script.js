// this is the data for holding which page and language we are on
let languageNumber = 0
let pageNumber = 0

// hold the content for these language numbers
const languages = [{
    text: "EN"
  },
  {
    text: "DE"
  },
]

// hold the content for the homepage
const homepage = [{
	content: "#050505"
}]

// hold the content for the page nubmers
const pagesEN = [{
    text: "Language Teacher",
    content: "yellow"
  },
  {
    text: "Translator",
    content: "coral"
  },
  {
    text: "Writer",
    content: "aqua"
  },
  {
    text: "Contact"
  },
]

const pagesDE = [{
    text: "Sprachlehrer",
    content: "green"
  },
  {
    text: "Übersetzer",
    content: "pink"
  },
  {
    text: "Autor",
    content: "springgreen"
  },
  {
    text: "Kontakt"
  },
]

// pick the relevant tags
const languageTag = document.querySelector("div.language")
const page0Tag = document.querySelector("h1")
const page1Tag = document.querySelector("li.page-1")
const page2Tag = document.querySelector("li.page-2")
const page3Tag = document.querySelector("li.page-3")
const emailTag = document.querySelector("h2 a")
const mainTag = document.querySelector("div.picture")


// make a function to increase and decrease the language number
const language = function() {
  if (languageNumber > 0) {
    languageNumber = languageNumber - 1
  } else {
    languageNumber = languageNumber + 1
  }
  updateLanguageToggle()
}

// this will toggle the language button between "EN" & "DE"
const updateLanguageToggle = function() {
  languageTag.innerHTML = languages[languageNumber].text
}

// makes a function to change the language of the navigation buttons to different pages
const nav = function() {
  if (languageNumber > 0) {
    updatePagesEN()
  } else {
    updatePagesDE()
  }
}

// makes a function to change the nav language to English
const updatePagesEN = function() {
  page1Tag.innerHTML = pagesEN[pageNumber].text
  page2Tag.innerHTML = pagesEN[pageNumber + 1].text
  page3Tag.innerHTML = pagesEN[pageNumber + 2].text
  emailTag.innerHTML = pagesEN[pageNumber + 3].text
}

//makes a function to change the nav language to German
const updatePagesDE = function() {
  page1Tag.innerHTML = pagesDE[pageNumber].text
  page2Tag.innerHTML = pagesDE[pageNumber + 1].text
  page3Tag.innerHTML = pagesDE[pageNumber + 2].text
  emailTag.innerHTML = pagesDE[pageNumber + 3].text
}


//on click of languageTag, run this
languageTag.addEventListener("click", function() {
  language()
  nav()
})

// make a function to run on click of page1 toggle
const page0 = function() {
  updateHomepage()
}

//on click of page 1 tag, run this
page0Tag.addEventListener("click", function() {
  page0()
})

// make a function to reset homepage content
const updateHomepage = function() {
    mainTag.style.backgroundColor = homepage[pageNumber].content
}


// make a function to run on click of page1 toggle
const page1 = function() {
  updatePage1()
}

//on click of page 1 tag, run this
page1Tag.addEventListener("click", function() {
  page1()
})

// make a function to test what language page 1 is in and then change content accordingly
const updatePage1 = function() {
  if (languageNumber > 0) {
    mainTag.style.backgroundColor = pagesEN[pageNumber].content
  } else if (languageNumber === 0) {
    mainTag.style.backgroundColor = pagesDE[pageNumber].content
  }
}

// make a function to run on click of page2 toggle
const page2 = function() {
  updatePage2()
}

//on click of page 2 tag, run this
page2Tag.addEventListener("click", function() {
  page2()
})

// make a function to test what language page 2 is in and then change content accordingly
const updatePage2 = function() {
  if (languageNumber > 0) {
    mainTag.style.backgroundColor = pagesEN[pageNumber + 1].content
  } else if (languageNumber === 0) {
    mainTag.style.backgroundColor = pagesDE[pageNumber + 1].content
  }
}

// make a function to run on click of page3 toggle
const page3 = function() {
  updatePage3()
}

//on click of page 3 tag, run this
page3Tag.addEventListener("click", function() {
  page3()
})

// make a function to test what language page 3 is in and then change content accordingly
const updatePage3 = function() {
  if (languageNumber > 0) {
    mainTag.style.backgroundColor = pagesEN[pageNumber + 2].content
  } else if (languageNumber === 0) {
    mainTag.style.backgroundColor = pagesDE[pageNumber + 2].content
  }
}

