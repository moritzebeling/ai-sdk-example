<script>

    import {cart} from './cart.js';

    let isOpen = false;

    $: count = $cart.length || 0;
    $: sum = $cart.reduce((acc, product) => acc + Number(product.price), 0);

    function renderCurrency(value) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
    }

</script>

{#if count > 0}
    <aside>
        {#if isOpen}
            <div class="cart">
                <header>
                    <button on:click={() => isOpen = false}>Close</button>
                </header>
                <ul>
                    {#each $cart as product}
                        <li>
                            <p>{product.brand} {product.model}</p>
                            <p>{renderCurrency(product.price)}</p>
                        </li>
                    {/each}
                </ul>
                <footer>
                    <div class="total">
                        <p>TOTAL</p>
                        <p>{renderCurrency(sum)}</p>
                    </div>
                    <div class="checkout">
                        <a href="/summary">Checkout</a>
                    </div>
                </footer>
            </div>
        {:else}
            <button on:click={() => isOpen = true}>Cart ({count})</button>
        {/if}
    </aside>
{/if}

<style>

    aside {
        position: fixed;
        top: 0;
        right: 0;
        padding: 1rem;
        z-index: 999;
    }
    
    button, a {
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        transition: all 1s;
    }
    button:hover, a:hover {
        background-color: var(--text);
        color: var(--background);
    }
    
    .cart {
        background-color: var(--bubble);
        border-radius: 1rem;
        width: 20rem;
    }

    header {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
    }
    
    li {
        padding: 0.5rem 1rem;
        border-top: 1px solid var(--background); 
        display: flex; 
        justify-content: space-between;
    }
    
    footer {
        border-top: 1px solid var(--background);  
    }
    
    .total {
        display: flex;
        padding: 0.5rem 1rem;
        justify-content: space-between;
        border-bottom: 1px solid var(--background);  
    }

    .checkout {
        display: flex;
        justify-content: center;
        padding: 3rem;
    }

    .checkout a {
        text-decoration: none;
        background-color: var(--text);
        color: var(--background);
    }

</style>