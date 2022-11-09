const content = document.getElementById('dynamic-content')
const forwardBtn = document.getElementById('forward')
const backBtn = document.getElementById('back')
const navBtns = document.querySelectorAll('li')

const FIRST_PAGE = 1
const LAST_PAGE = 10

document.addEventListener('DOMContentLoaded', renderPage)
forwardBtn.addEventListener('click', () => {
  const pageToRender = +content.className + 1
  if (+content.className >= LAST_PAGE) {
    return
  } else {
    content.className = pageToRender
    renderPage()
  }
})
backBtn.addEventListener('click', () => {
  const pageToRender = +content.className - 1
  if (+content.className <= FIRST_PAGE) {
    return
  } else {
    content.className = pageToRender
    renderPage()
  }
})
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const pageToRender = btn.id
    if (pageToRender < FIRST_PAGE || pageToRender > LAST_PAGE) {
      return
    } else {
      content.className = pageToRender
      renderPage()
    }
  })
})

function renderPage() {
  navBtns.forEach(btn => {
    if (btn.id === content.className) {
      btn.style.background = 'rgba(255, 255, 255, 0.6)'
    } else {
      btn.style.background = 'rgba(255, 255, 255, 0.2)'
    }
  })

  switch (content.className) {
    case '1':
      content.innerHTML = `
      <div class="content">
        <h1>Phonetics</h1>
       </div>
      `
      break

    case '2':
      content.innerHTML = `
      <div class="content">
        <h2>Phonology</h2>
        <p>Phonetics or phonology broadly describes the study of sounds.</p>
        <p>'phono' and 'phone' is used in many words to describe sound. e.g. 'microphone', 'saxophone' and 'headphones'</p>
        <br>
        <br>
        <h2>Phonological aspects of conversation</h2>
        <p>Prosodic features | Pitch and intonation | Emphasis and stress | Pauses | Non-verbal sounds.</p>
      </div>
      `
      break

    case '3':
      content.innerHTML = `
      <div class="content">
        <h2>Prosodic Features</h2>
        <p>Features such as rhythm, intonation and pitch. These features affect more than one word.</p>
      </div>
      `
      break

    case '4':
      content.innerHTML = `
      <div class="content">
        <h2>Pitch and Intonation</h2>
        <p>Pitch is the measure of how high or low the frequency of a sound is.</p>
        <p>Intonation, on the other hand, dictates the pattern of pitch. e.g. a sentence ending in a high pitched voice might denote a question.</p>
      </div>
      `
      break

    case '5':
      content.innerHTML = `
      <div class="content">
        <h2>Emphasis and Stress</h2>
        <p>Emphasis refers to giving more volume or time to a word to show importance. Stress is the pattern of emphasis in a given word.</p>
        <p>Words with multiple syllables often stresses a particular syllable.</p>
      </div>
      `
      break

    case '6':
      content.innerHTML = `
      <div class="content">
        <h2>Pauses</h2>
        <p>Pauses in speech act like punctuation.</p>
        <p>Micropauses are like commas in a text and longer pauses are like sentence-end punctuation.</p>
      </div>
      `
      break

    case '7':
      content.innerHTML = `
      <div class="content">
        <h2>Non-verbal Sounds</h2>
        <p>Voiced pauses or fillers to avoid long pauses in speech. These include sounds like 'um' or 'uh'.</p>
        <p>Even other sounds like laughter can be used as fillers in speech.</p>
      </div>
      `
      break

    case '8':
      content.innerHTML = `
      <div class="content">
        <h2>Phonemes</h2>
        <p>There are specific terms used to describe the precise sounds made in speech. These are called phonetic descriptors or phonemes.</p>
        <p>In standard English, there are 44 phonemes denoting every different sound used in speech. Compared to graphemes or alphabets, of which there are only 26, phonemes are much more accurate at describing the pronunciation of each word.</p>
      </div>
      `
      break

    case '9':
      content.innerHTML = `
      <div class="content">
        <h2>International Phonemic Alphabet</h2>
        <p>The International Phonemic Alphabet (or IPA) is a standardized and consistent way of recording phonemes across all languages. lt has a single symbol for each possible phoneme to avoid complications.</p>
      </div>
      `
      break

    case '10':
      content.innerHTML = `
      <div class="content">
        <h2>Phonemic Chart</h2>
        <div>
          <img src="/phonemic-chart.jpg" alt="phonemic chart" />
        </div>
      </div>
      `
      break

    default:
      break
  }
}
