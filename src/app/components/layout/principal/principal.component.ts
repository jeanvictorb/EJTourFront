<app-menu></app-menu>
<router-outlet/>

<!-- Carousel wrapper -->
<div class="container mt-4 mb-4">
  <mdb-carousel [controls]="true" [indicators]="true" [animation]="'fade'">
    <mdb-carousel-item>
      <img
        src="Atv-Front-Angular/src/app/assents/img/cataratas.jpg"
        class="d-block w-100 carousel-image"
        alt="Cataratas do Iguaçu"
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Cataratas do Iguaçu</h5>
        <p>Uma das mais espetaculares quedas d'água do mundo, reconhecida como Patrimônio Mundial pela UNESCO.</p>
      </div>
    </mdb-carousel-item>
    
    <mdb-carousel-item>
      <img
        src="Atv-Front-Angular/src/app/assents/img/bird_park.jpg"
        class="d-block w-100 carousel-image"
        alt="Usina de Itaipu"
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Usina Hidrelétrica de Itaipu</h5>
        <p>Uma das maiores usinas hidrelétricas do mundo e uma maravilha da engenharia moderna.</p>
      </div>
    </mdb-carousel-item>
    
    <mdb-carousel-item>
      <img
        src="Atv-Front-Angular/src/app/assents/img/marco_tres.jpg"
        class="d-block w-100 carousel-image"
        alt="Marco das Três Fronteiras"
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Marco das Três Fronteiras</h5>
        <p>Onde Brasil, Argentina e Paraguai se encontram, oferecendo uma vista panorâmica espetacular.</p>
      </div>
    </mdb-carousel-item>
  </mdb-carousel>
</div>

<app-footer></app-footer> 