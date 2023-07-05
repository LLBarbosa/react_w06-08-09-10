import ProductCard from '../ProductCard/ProductCard';


function Main () {
    const data1 = ['Corpo/braço em mogno (mahogany)', '02 Captadores Humbuckers', 'Escala em pau-ferro', 'Cor: sunburst ']



    return (

        <ProductCard nome="Gibson LesPaul" valor={35000.00} descricao='Excelente Guitarra' id={125} caracteristicas={data1} />




    )
};


export default Main;