
export default function Indicator(props: {name: string, quantity: string}){
  return(
    <div className="indicator">
      <div className="quantity">{props.quantity}</div>
      <div className="name">{props.name}</div>      
    </div>
  )
}