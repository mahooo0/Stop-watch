// buttons
const start_btn= document.querySelector("#start_btn")
const reset_btn= document.querySelector("#reset_btn")
const lap_btn= document.querySelector("#lap_btn")
// buttons
const upper_time= document.querySelector("#upper_time")
const buttom_time= document.querySelector("#buttom_time")
const buttom_SEction= document.querySelector("#buttom_SEction")
let butoom_section_arr=[]
let elments_cont=0
let sec_interval
let upeer_time_value=0
let buttom_time_value=0
let upper_sec=0
let buttom_sec=0
let upper_result
let buttom_result
start_btn.addEventListener("click" ,mainfun)
reset_btn.addEventListener("click",()=>{
upper_sec=0
buttom_sec=0
upper_result=sec_to_time(upper_sec)
buttom_result=sec_to_time(buttom_sec)
upper_time.innerHTML=upper_result
buttom_time.innerHTML=buttom_result

})
lap_btn.addEventListener("click",()=>{
    
    elments_cont++
        upper_result=sec_to_time(upper_sec)
        buttom_result=sec_to_time(buttom_sec)
        let buttom_el=`
        <div class="lap ">
                <h2>#${elments_cont}</h2>
                <h2 class="text-light">${buttom_result}</h2>
                <h2>${upper_result}</h2>
                <h2 >Lap</h1>
            </div>
        `
        butoom_section_arr.push(buttom_el)
        let ell=butoom_section_arr.join("")
        buttom_SEction.innerHTML=ell
        buttom_sec=0
})
function sec_to_time(s){
    let sec=s%60
    let min=Math.floor(s/60)
    let hour=Math.floor(min/60)
    return `${hour<10 ? "0"+hour :hour}.${min<10 ? "0"+min :min}.${sec<10 ? "0"+sec :sec}`
}

function mainfun(){
    
    if(start_btn.role=="start"){
        start_btn.role="stop"
        start_btn.innerHTML=`Stop`
        
        sec_interval=setInterval(()=>{
        upper_sec++
        buttom_sec++
        upper_result=sec_to_time(upper_sec)
        buttom_result=sec_to_time(buttom_sec)
        upper_time.innerHTML=upper_result
        buttom_time.innerHTML=buttom_result
    
        },100) 
       
        

    }else{
        clearInterval(sec_interval)
        start_btn.role="start"
        start_btn.innerHTML=`Continue`
        elments_cont++
        upper_result=sec_to_time(upper_sec)
        buttom_result=sec_to_time(buttom_sec)
        let buttom_el=`
        <div class="lap ">
                <h2>#${elments_cont}</h2>
                <h2 class="text-light">${buttom_result}</h2>
                <h2>${upper_result}</h2>
                <h2 >stop</h1>
            </div>
        `
        butoom_section_arr.push(buttom_el)
        let ell=butoom_section_arr.join("")
        buttom_SEction.innerHTML=ell
    }
}