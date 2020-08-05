export default function convertHoutToMinutes(time: string){
    //8:00

    //divide a string e passa por todos os itens 
   const [hour, minutes] = time.split(':').map(Number)
   const timeInMinutes = (hour * 60) + minutes

   return timeInMinutes;
}