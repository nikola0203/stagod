<?php
// get_search_form();
?>
<section class="header-form pb-8">
  <div class="container">
    <h1>Pronađi savršenog profesionalca po tvojoj meri</h1>
    <form role="search" ' . $aria_label . 'method="get" class="search-form d-flex mb-2" action="">
      <div class="col-8">
        <label class="w-100">
          <span class="screen-reader-text"></span>
          <input type="search" class="search-field" placeholder="Probaj 'Nemački jezik'" name="s" />
        </label>
      </div>  
      <div class="col-3 d-flex">
        <div class="col-6">
          <label class="city-label" for="city"><?php echo icon_location(); ?>Izaberi grad:</label>
        </div>
        <div class="col-6">
          <select name="cars" id="cars" class="px-0">
            <option value="citys">U mojoj blizini</option>
            <option value="city-1">Leskovac</option>
            <option value="city-2">Niš</option>
            <option value="city-3">Beograd</option>
            <option value="city-4">Novi Sad</option>
          </select>
        </div>
      </div>
      <div class="col-1">
        <input type="submit" class="search-submit h-100" value="Pretraži" />
      </div>
    </form>
    <div class="row">
      <div class="col-md-8 d-none d-md-block">
        <span>Popularno: </span>
      </div>
      <div class="col-md-4">
        <input type="checkbox" id="online-services" name="online-services" value="online-services">
        <label for="online-services"> Online usluge</label>
      </div>
    </div>
  </div>
</section>