<template>
  <div>
    <b-navbar class="nav" toggleable="lg" type="dark">
      <b-navbar-brand href="/">Cinema</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-nav-item href="#" class="lancamentos">Lançamentos</b-nav-item>
      <b-nav-item href="#" class="lancamentos">Em breve</b-nav-item>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item>
              <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <nuxt-link :to="switchLocalePath('es')">ES</nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <nuxt-link :to="switchLocalePath('pt-br')">PT-BR</nuxt-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
  .lancamentos:hover{
    background-color: gray;
    color: black!important;
    border-radius: 5px 5px 5px 5px;
  }
  .lancamentos{
    color: white;
  }
  .dropdown{
    text-decoration: none;
    list-style: none;
    color: white;
  }
  .nav{
    background-color: #af0404;
  }
  ::v-deep .nav-link {
    color: white!important;
  }
</style>
