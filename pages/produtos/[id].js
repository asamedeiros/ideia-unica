export async function getStaticPaths() { //mantem copia estatica na cdn
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    return {
        props: {
            id: id
        },
        revalidate: 5
    }
}

function Produtos(props) {
    return <div>Página do Produto {props.id}</div>
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}