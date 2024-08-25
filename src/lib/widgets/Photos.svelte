<script>

    const images = [
        '/holiday/sea-3.jpeg',
        '/holiday/sea-2.jpeg',
        '/holiday/sea-1.jpeg',
    ];

</script>

<div>
    {#each images as image, i}
        <figure>
            <img class="img-{i}" src={image} alt="Sea" />
        </figure>
    {/each}
</div>

<style>

div {
    margin: 4rem -10vw;
    display: flex;
}

figure {
    flex: 0 1 auto;
    margin: 0 -4rem;
}

img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    transition: transform 0.3s;
}

.img-0 {
    transform: rotate(-4deg) scale(0.9);
}
.img-0:hover {
    transform: rotate(-2deg) scale(0.97);
    z-index: 1;
    position: relative;
}

.img-1 {
    transform: rotate(-0);
}
.img-1:hover {
    transform: rotate(2deg) scale(1.02);
    z-index: 2;
    position: relative;
}

.img-2 {
    transform: rotate(4deg) scale(0.9);
}
.img-2:hover {
    transform: rotate(2deg) scale(0.97);
    z-index: 1;
    position: relative;
}
</style>