<script lang="ts">
    import type * as utilTypes from "../../../../common/types/utils";
    import { getMediaImagePath } from "../../utils/media";

    export let mediaImageOptions: utilTypes.MediaImageOptions;
    $: mediaImagePath = getMediaImagePath(mediaImageOptions);
</script>

{#if mediaImagePath}
    <img src={mediaImagePath} alt={mediaImageOptions?.name} />
{/if}

