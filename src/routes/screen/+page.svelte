<script lang="ts">
	import { files } from '../../stores';
  import TabBar from '../../components/TabBar.svelte';
	import { TextArea } from '@microsoft/fast-components';
  let activeFile : number = 0;
</script>
<!-- TabBar on top of component-->
<div class="flex flex-col w-full h-full text-gray-400 dark:text-gray-400  bg-gray-300 dark:bg-gray-800">
  <TabBar bind:activeFile={activeFile} />
  <textarea bind:value={ $files[activeFile].content} class="flex-auto grow text-gray-400 dark:text-gray-400  bg-gray-300 dark:bg-gray-800" />
</div>
 