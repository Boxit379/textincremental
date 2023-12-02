<script>
    // Import CSS
    import '/src/style/main.css';

    // Import Components
    import Log from "/src/lib/log.svelte";
    import Resources from "/src/lib/resources.svelte";

    // Import Stores
    import { game } from "/src/lib/stores.js";
</script>

<main>
    <div id="sidebar">
        <div class="sidebar-item">
            <Log bind:messages={$game.logMessages} class="sidebar-item"/>
        </div>
        <div class="sidebar-item">
            <Resources bind:resources={$game.resources} class="sidebar-item"/>
        </div>
    </div>
    <div id="content">
        <slot />
    </div>
</main>

<style>
    main {
        display: flex;
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
    }

    #sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
        height: 100%;
        box-sizing: border-box;
        padding: 5px;
    }

    .sidebar-item {
        flex: 1;
        margin: 5px;
    }
</style>