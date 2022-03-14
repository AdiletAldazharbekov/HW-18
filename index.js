const body = document.body
const div1 = document.querySelector('#task1')
const btn = document.querySelector('#task2')
const result = document.querySelector('#result')
result.innerHTML=`<b><i><br>Результат:</i></b><br>0`
const div3 = document.querySelector('#task3')
const coordinate=document.querySelector('#coordinate')
coordinate.innerHTML=`<b><i>Координаты:<br></i></b>X-0<br>Y-0`
const input = document.querySelector('#task4')

const colors = {
    blue:'primary',
    gray:'secondary',
    green:'success',
    red: 'danger',
    yellow:'warning',
    white:'light',
    black:'dark',
    sky:'info',
    chernyi:'black'
}

const colorToBootstrap=(color)=>{
    switch(color){
        case 'red': return colors.red
        case 'green': return colors.green
        case 'blue': return colors.blue
        case 'black': return colors.black
        case 'gray': return colors.gray
        case 'white': return colors.white
        case 'yellow': return colors.yellow
        default: return colors.sky
    }
}

// Общая функция для смены цвета фона
function changeBG(tag, bgcolor){
    let arr = tag.className.split(' ').map((i, index) => i.slice(0,3)==='bg-'?i=bgcolor:i).join(' ')
    arr===''?tag.className=bgcolor:tag.className=arr
}

// Функция для задачи 1
document.addEventListener('keydown', e=>{
let bg=e.key
    switch(bg){
            case 'r': bg=colors.red; break
            case 'g': bg=colors.green; break
            case 'b': bg=colors.blue; break
            case 'B': bg=colors.black; break
            case 'G': bg=colors.gray; break
            case 'w': bg=colors.white; break
            default: bg=colors.yellow; break
    }
    changeBG(div1,`bg-${bg}`)
})

// Функция для задачи 2
const x2 =(num) =>{
i=i<=0?1:i*2
result.innerHTML=`<b><i><br>Результат:</i></b><br>${i}`
}

let i=0
btn.addEventListener('click',x2)

// Функция для задачи 3 -  не много добавил анимации по координатам
div3.addEventListener('mousedown',(e) =>{
    let x=e.offsetX
    let y=e.offsetY
    coordinate.innerHTML=`<b><i>Координаты:</i></b><br>X-${x}<br>Y-${y}`
    let bg=''
 if(x<=167){x=1} else if(x<=333) {x=2} else {x=3}
 if(y<=167){y=1} else if(y<=333) {y=2} else {y=3}
    switch(x){
        case 1: switch(y){
            case 1: bg=colors.red; break
            case 2: bg=colors.green; break
            default: bg=colors.blue; break
        }; break
        case 2: switch(y){
            case 1: bg=colors.black; break
            case 2: bg=colors.gray; break
            default: bg=colors.white; break
        }; break
        default:switch(y){
            case 1: bg=colors.yellow; break
            case 2: bg=colors.sky; break
            default: bg=colors.chernyi
        }
    }
    changeBG(div3,`bg-${bg}`)
})

// Функция для задачи 4
input.addEventListener('input', () => {
    let color = input.value
    changeBG(body,`bg-${colorToBootstrap(color)}`)
  }
)

