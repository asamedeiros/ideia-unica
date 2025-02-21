async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    console.log(apiSecret);
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    //faz com que o response seja cacheado. a vercel tentará atualizar o cache após 10 segundos
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;