export async function getData(n) {
    try {
        let resultado = await fetch("https://randomuser.me/api/?results=" + n);
        let json = await resultado.json();
            return json.results;
    }catch(error){
        console.log(error);
    }
}


