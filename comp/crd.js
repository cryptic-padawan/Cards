import "tailwindcss/tailwind.css";
import Cards from "./cards.js";
import cards from '../data/delta.js';


// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:8000/cards');
//   const data = await res.json();

//   return {
//     props: { cards: data }
//   }
// }
function del (cards){
  return (<Cards 
  id={cards.id}
  href={cards.href}
  name={cards.name}
  description={cards.description}
  />)
}

function Crds () {

  return (
    <div  className="mt-8 mx-3 md:mx-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.map(del => (
        <div  className="flex items-center bg-white p-4 rounded-lg" key={del.id}>
          <div className="flex items-center">
            <img className="rounded-lg h-20 w-20" src={ del.href } alt="" />
          </div>
          <div className="ml-4 bg-white rounded-bl-md rounded-br-md">
            <h2 className="text-gray-700 font-bold">{ del.name }</h2>
            <p className="italic">{ del.description }</p>
          </div>
          
        </div>
      ))}

    </div>
  );
}

 
export default Crds;