<script>
    export let messages = [];
    function clear() {
        messages = [];
    }
</script>

<div id="log" class="box">
    {#if messages.length > 0}
        {#each messages as message}
            <p>* {message}</p>
        {/each}
        <button on:click={clear}>Clear</button>
    {:else}
        <p class="caption">There's nothing to see here...</p>
    {/if}
</div>

<style>
    p {
        text-align: center;
    }
    button {
        font-family: monospace;
        border: none;
        color: #5e81ac;
        background: none;
    }
    button:hover {
        color: #81a1c1;
    }
    .caption {
        color: #d8dee9;
        font-style: italic;
    }
</style>