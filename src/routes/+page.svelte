<script>
  import { enhance } from "$app/forms";
</script>

<h1>wrangler-proxy-r2-put-bug</h1>

<form use:enhance method="POST" enctype="multipart/form-data">
  <label>
    File:
    <input type="file" name="file" />
  </label>
  <button>Submit</button>
</form>
