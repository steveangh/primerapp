
const ItemDetailContainer = () => {

    const operacion = new Promise((resolver, rechazar) => {
    //Aquí va la operación que tarda en el tiempo.
    setTimeout(() => {
      // console.log('Hola!');
      const pedido_a = ['Steve', 'Alex'];
      resolver(pedido_a);
    }, 2000);
  });
  
  // console.log(operacion);
  
  operacion.then(() => {
    console.log('Termino la solicitud de manera correcta');
  });
  
  operacion.catch(() => {
    console.log('Termino la solicitud de manera incorrecta');
  });
}

export default ItemDetailContainer