<script>
    
    import { addToCart } from "$lib/cart/cart";

    const product = {
        brand: 'Fielmann',
        model: 'SUN FA CARRY',
        img: 'https://fim-live.cdn.aboutyou.cloud/images/04e3e03f01dbf37719155658247e03dd.png?brightness=1&width=3072&height=1720&quality=85&bg=FFFFFF',
        price: '29.90',
    }

</script>

<div class="line">
    <article>
        <figure>
            <img src={product.img} alt="{product.brand} {product.model}">
        </figure>
        <header>
            <h3>{product.brand} {product.model}</h3>
            <button on:click={() => addToCart(product)}>{product.price}</button>
        </header>
    </article>
</div>

<style>

    .line {
        display: flex;
        justify-content: center;
    }

    article {
        background-color: var(--bubble);
        border-radius: 1rem;
        max-width: 24rem;
        position: relative;
    }

    figure {
        padding: 1rem;
    }

    img {
        mix-blend-mode: multiply;
        aspect-ratio: 1/1;
        border-radius: 2rem;
        object-fit: contain;
    }

    header {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 1rem 1.5rem;
        align-items: center;
    }

    button {
        padding: 0.3rem 1rem;
        background-color: var(--background);
        border-radius: 2rem;
        transition: all 1s;
    }

    button:hover {
        background-color: var(--text);
        color: var(--background);
    }

</style>