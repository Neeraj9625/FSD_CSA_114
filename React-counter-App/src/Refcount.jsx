export const Ref = ()=>{
    const [count, setCount] = useState(0)
    const refex = ()=>{
      let a = 5;
      const Refcount = useRef(0)
      console.log("object Rendered")
      function handereg(){
        Refcount.current++;
        console.log("refcount=",Refcount.current)
        if(Refcount.current==a){
          alert("counter"+Refcount.current)
        }
      }
    }}