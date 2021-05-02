<i18n>
{
  "en": {
    "titleFilm": "Kong: Skull Island",
    "feature": "Action",
    "sinopse": "Legends go on a collision course in Godzilla vs. Kong, when these two mythical opponents meet in a spectacular and historic battle, which puts the fate of the world at stake. Kong and his protectors begin a dangerous journey to find their true home. With them is Jia, a young orphan with whom Kong has created a unique and solid bond. But, unexpectedly, they cross the path of an enraged Godzilla, who has left behind a trail of destruction across the planet. The epic confrontation between the two titans - instigated by invisible forces - is just the gateway to the great mystery that resides deep within the Earth's core."
  },
  "es": {
    "titleFilm": "Kong: la isla calavera",
    "feature": "Acción",
    "sinopse": "Las leyendas siguen un curso de colisión en Godzilla vs. Kong, cuando estos dos míticos oponentes se encuentran en una espectacular e histórica batalla, que pone en juego el destino del mundo. Kong y sus protectores comienzan un peligroso viaje para encontrar su verdadero hogar. Con ellos está Jia, una joven huérfana con la que Kong ha creado un vínculo único y sólido. Pero, inesperadamente, se cruzan en el camino de un Godzilla enfurecido, que ha dejado un rastro de destrucción en todo el planeta. La confrontación épica entre los dos titanes, instigada por fuerzas invisibles, es solo la puerta de entrada al gran misterio que reside en las profundidades del núcleo de la Tierra."
  },
  "pt-br": {
    "titleFilm": "Kong: A Ilha da Caveira",
    "feature": "Ação",
    "sinopse": "Lendas entram em rota de colisão em Godzilla vs. Kong, quando esses dois adversários míticos se encontram em uma batalha espetacular e histórica, que coloca o destino do mundo em jogo. Kong e seus protetores iniciam uma jornada perigosa para encontrar seu verdadeiro lar. Com eles está Jia, jovem órfã com quem Kong criou um vínculo único e sólido. Mas, inesperadamente, eles cruzam o caminho de um Godzilla enfurecido, que tem deixado atrás de si uma trilha de destruição em todo o planeta. O confronto épico entre os dois titãs - instigado por forças invisíveis - é apenas a porta de entrada do grande mistério que reside nas profundezas do núcleo da Terra."
  }
}
</i18n>
<template>
  <div>
      <img src="~/assets/kong-horizontal.jpg" alt="Cartaz Kong" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: blue;">{{ $t('feature') }}</b-badge></h1>
      <p>2017 | <b-badge variant="warning" style="padding:7px;">12</b-badge> | 1h 58min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="584" height="357" src="https://www.youtube.com/embed/VU-m5T6wBzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
      <Comentario />
    </b-container>
  </div>
</template>
<style scoped>
h3{
  color: rgb(165, 35, 35);
}
</style>
