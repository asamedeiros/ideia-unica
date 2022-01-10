
export async function getServerSideProps(context) {

    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Teste(props) {

    return <div>Página do Teste {props.id}</div>;
}

export default Teste;