<template>
  <div>
    <b-container>
      <b-row class="d-flex align-items-center">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3 class="mb-3">{{ nome }}</h3>
          <b-avatar :src="require(`~/assets/${img}`)" size="300px"></b-avatar>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <p><strong>{{ $t('activities') }}</strong> <span>{{ atividades }}</span></p>
          <p><strong>{{ $t('nameNasc') }} </strong><span>{{ nomeNasc }}</span></p>
          <p><strong>{{ $t('nasc') }} </strong><span>{{ nascimento }}</span></p>
          <p><strong>{{ $t('nationality') }} </strong><span>{{ nacionalidade }}</span></p>
          <p><strong>{{ $t('ageActor') }} </strong><span>{{ idade }} {{ $t('yearsActor') }}</span></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="border text-center" cols="6" sm="6" md="6" lg="6" xl="6">
          <strong>{{ anosCar }}</strong>
          <p>{{ $t('yearsCareer') }}</p>
        </b-col>
        <b-col class="border text-center" cols="6" sm="6" md="6" lg="6" xl="6">
          <strong>{{ filmes }}</strong>
          <p>{{ $t('filmSerie') }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.border{
  border: 1px solid black;
  padding: 12px;
}
.border strong{
  font-size: 30px;
}
@media(max-width:768px){
  div{
    text-align: center;
  }
}
</style>
<script>
export default {
  props: {
    nome: String,
    atividades: String,
    nomeNasc: String,
    nascimento: String,
    nacionalidade: String,
    idade: String,
    anosCar: Number,
    filmes: Number,
    img: String
  }
}
</script>
