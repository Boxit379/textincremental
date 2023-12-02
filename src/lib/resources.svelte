<script>
    export let resources;
</script>

<div id="resources" class="box">
    {#each resources as resource}
        <p>* {resource.name} ~ {resource.amount}</p>
    {/each}
</div>

<style>
    p {
        text-align: center;
    }
</style>