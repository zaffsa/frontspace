const btnMobile = document.getElementById('btn-mobile-btn')
function toggleMenu(event){
if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

const not_reload = document.querySelector('#nao-vai-carregar').addEventListener('click', e => {
    e.preventDefault()
})
const not_reload_mobile = document.querySelector('#nao-vai-carregar').addEventListener('tap', e => {
    e.preventDefault()
})


/*  PRODUTOS 
    


*/
const addClasseT = document.querySelector('#token-btn').addEventListener('click', e => {
    e.preventDefault()
    token.classList.add('height-p')
    token.classList.remove('active-hidden')
    gamedev.classList.add('active-hidden')
    blockchain.classList.add('active-hidden')
    /* BOTAO */
    btn_token.classList.add('produtos-btn')
    btn_dev.classList.remove('produtos-btn')
    btn_chain.classList.remove('produtos-btn')

})
const addClasseG = document.querySelector('#game-btn').addEventListener('click', e => {
    e.preventDefault()

    token.classList.add('active-hidden')
    gamedev.classList.remove('active-hidden')
    blockchain.classList.add('active-hidden')
    /* botao */
    btn_token.classList.remove('produtos-btn')
    btn_dev.classList.add('produtos-btn')
    btn_chain.classList.remove('produtos-btn')
})
const width = screen.width
if (width > 576)
    token.classList.remove('active-hidden')


const addClassB = document.querySelector('#chain-btn').addEventListener('click', e => {
e.preventDefault()

token.classList.add('active-hidden')
gamedev.classList.add('active-hidden')
blockchain.classList.remove('active-hidden')
/* btn */
btn_token.classList.remove('produtos-btn')
btn_dev.classList.remove('produtos-btn')
btn_chain.classList.add('produtos-btn')

})



const fechar = document.querySelector('.fechar').addEventListener('click', e =>{
    e.preventDefault()
 
     token.classList.add('active-hidden')
    
 
 } )
 const fechar2 = document.querySelector('.fechar3').addEventListener('click', e =>{
     e.preventDefault()
  
      gamedev.classList.add('active-hidden')
     
  
  } )
  const fechar3 = document.querySelector('.fechar2').addEventListener('click', e =>{
     e.preventDefault()
  
      blockchain.classList.add('active-hidden')
     
  
  } )

/*NAO DEIXA PAGINA CARREGAR */


