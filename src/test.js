import string from './css.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')

const btnPause = document.querySelector('#btnPause')
const btnPlay = document.querySelector('#btnPlay')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')

let speed = 100
let n = 1
let id

const player = {
    init : ()=>{
        demo2.innerText = string.substr(0,n)
        demo.innerHTML = string.substr(0,n)
        player.play()
        player.bindEvents()
    },
    events : {
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents:()=>{
        for (let key in player.events){
            if (player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    print :() =>{
        n+=1
        if(n>string.length){
            window.clearInterval(id)
            return
        }
        demo.innerText = string.substr(0,n)
        demo2.innerHTML = string.substr(0,n)
        demo.scrollTop = 9999999
    },
    play : ()=>{
        id = setInterval(player.print,speed)
    },
    pause : ()=>{
        window.clearInterval(id)
    },
    slow : ()=>{
        player.pause()
        speed = 300
        player.play()
    },
    normal : ()=>{
        player.pause()
        speed = 100
        player.play()
    },
    fast : ()=>{
        player.pause()
        speed = 2
        player.play()
    },
}

player.init()
