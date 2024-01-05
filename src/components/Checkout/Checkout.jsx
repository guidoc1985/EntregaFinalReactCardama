import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc} from "firebase/firestore";

export const Checkout =() =>{

    const [nombre, setNombre] = useState("");
    const [apellido , setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailRep, setEmailRep] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    // eslint-disable-next-line no-unused-vars
    const [mensaje, setMensaje] = useState("");

    const { cart, totalPrice, removeProduct} = useCartContext();

    const manejoFormulario = (event) =>{
        event.preventDefault()
    
    if(!nombre || !apellido || !email || !emailRep){
        setError ("Por favor completá los campos obligatorios")
        return;
    }

    if( email !== emailRep){
        setError("los emails son distintos")
        return;
    }

    const total = totalPrice();

    const orden = {
        items: cart.map((producto) =>({
            id: producto.id,
            nombre: producto.title,
            cantidad: producto.quantity,

        })),
        total: total,
        fecha : new Date(),
        nombre,
        apellido,
        telefono,
        email,
     };

     Promise.all(
        orden.items.map(async(productoOrden)=>{
            const db = getFirestore();
            const productoRef = doc( db, "products", productoOrden.id)

            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stock;
            await updateDoc (productoRef, {
                stock: stockActual - productoOrden.cantidad,
            });
        })
     )
     .then(()=> {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
        .then((docRef)=> {
            setOrdenId(docRef.id)
            removeProduct();
        })
    

     .catch((error)=>{
        console.log("no se pudo crear la orden", error)
        setError("error en la orden")
     })
 })
 .catch((error)=>{
    console.log("no se pudo actualizar el stock", error)
    setError("error en el stock")
 })

 setNombre("")
 setApellido("")
 setEmail("")
 setEmailRep("")
 setTelefono("")
 setMensaje("")

  };
    return (
        <div className="container-flex ml-1">
            <h2 className="fuente-principal mt-10"> Completá tus datos!</h2>
<form onSubmit={manejoFormulario}>

    {cart.map((producto)=>(
        <div key={producto.id}>
            <p>{""} {producto.nombre} {producto.cantidad}</p>
            <p>{producto.precio}</p>
        </div>
    ))}
    <div>
    <label className="fuente-principal login" >Nombre:</label>
        <input className="login-input" type="text"  value={nombre} onChange={(e)=> setNombre(e.target.value)}  ></input>
    </div>
    <div>
        <label  className="fuente-principal login"> Apellido</label>
        <input className="login-input" type="text"  value={apellido} onChange={(e)=> setApellido(e.target.value)}  ></input>
    </div>
    <div>
        <label className="fuente-principal login"> Telefono</label>
        <input className="login-input" type="nunmber"  value={telefono} onChange={(e)=> setTelefono(e.target.value)}  ></input>
    </div>
    <div>
        <label className="fuente-principal login"> Email</label>
        <input className="login-input"type="email"  value={email} onChange={(e)=> setEmail(e.target.value)}  ></input>
    </div>
    <div>
        <label className="fuente-principal login"> Confirmar email</label>
        <input className="login-input"type="email"  value={emailRep} onChange={(e)=> setEmailRep(e.target.value)}  ></input>
    </div>
    

{error && <p>{error}</p>}
{ordenId && (
    <p> Gracias por la compra!  tu número de orden es: <br/>{""} {ordenId} {""}<br/></p>
)}
<div>
    <button className="agregar-carrito" type="submit"> Enviar</button>
</div>

</form>


        </div>



    )

}