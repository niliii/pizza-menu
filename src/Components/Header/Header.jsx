// import "index.css";


export default function Header(){
    const hour=new Date().getHours();
    const openhour=5;
    const closeHour=22;
    console.log(hour);
    if(hour>=openhour && hour<=closeHour)alert ("we are open");
    else  alert ("we are closed");


    return (
        <div>
            
        </div>
    )
}